import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, X } from 'lucide-react';

interface MenuItem {
  label: string;
  link: string;
  ariaLabel: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const preLayerElsRef = useRef<HTMLDivElement[]>([]);
  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);

  const socialItems = [
    { label: 'Facebook', link: '#', icon: Facebook },
    { label: 'Twitter', link: '#', icon: Twitter },
    { label: 'LinkedIn', link: '#', icon: Linkedin },
    { label: 'Instagram', link: '#', icon: Instagram },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      if (!panel) return;

      let preLayers: HTMLDivElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      gsap.set([panel, ...preLayers], { xPercent: 100 });
    });
    return () => ctx.revert();
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const contactInfo = panel.querySelector('.sm-contact-info');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
    const closeBtn = panel.querySelector('.sm-close-btn');

    gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    gsap.set(numberEls, { '--sm-num-opacity': 0 });
    if (contactInfo) gsap.set(contactInfo, { opacity: 0, y: 20 });
    gsap.set(socialLinks, { y: 25, opacity: 0 });
    if (closeBtn) gsap.set(closeBtn, { opacity: 0, y: -10 });

    const tl = gsap.timeline({ paused: true });

    layers.forEach((layer, i) => {
      tl.fromTo(layer, { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layers.length ? (layers.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layers.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: 100 },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    // Animate close button
    tl.to(closeBtn, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, panelInsertTime + 0.2);

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;

      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.6, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.08, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    if (contactInfo) {
      tl.to(contactInfo, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, panelInsertTime + 0.5);
    }

    if (socialLinks.length) {
      tl.to(
        socialLinks,
        { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: { each: 0.08 } },
        panelInsertTime + 0.6
      );
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();

    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
    });
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      const tl = buildOpenTimeline();
      if (tl) tl.play(0);
    } else {
      playClose();
    }
  }, [isOpen, buildOpenTimeline, playClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div
        ref={preLayersRef}
        className="absolute top-0 right-0 bottom-0 w-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: 'hsl(var(--primary) / 0.1)' }} />
        <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: 'hsl(var(--background) / 0.95)' }} />
      </div>

      <aside
        ref={panelRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-background/95 backdrop-blur-xl border-l border-border/50 flex flex-col p-8 overflow-y-auto pointer-events-auto"
        aria-hidden={!isOpen}
      >

        {/* Header with Close Button */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-lg font-semibold tracking-wide uppercase text-white">Menu</h2>
          <button
            onClick={onClose}
            className="sm-close-btn p-2 border border-[#ff0000] rounded-full hover:bg-muted transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <ul
            className="sm-panel-list list-none m-0 p-0 flex flex-col gap-3"
            role="list"
            data-numbering="true"
          >
            {items.map((item, idx) => (
              <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={item.label + idx}>
                <Link
                  to={item.link}
                  className={`sm-panel-item relative font-bold text-5xl cursor-pointer leading-none tracking-tight uppercase transition-colors duration-150 inline-block no-underline pr-[1.4em] ${location.pathname === item.link ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  onClick={handleLinkClick}
                  aria-label={item.ariaLabel}
                  data-index={idx + 1}
                >
                  <span className="sm-panel-itemLabel inline-block will-change-transform">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="sm-contact-info mt-auto pt-8 space-y-4 border-t border-border/50">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Contact Us</h3>
            <a href="tel:+919876543210" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-lg">+91 98765 43210</span>
            </a>
            <a href="mailto:info@company.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="text-lg">info@company.com</span>
            </a>
          </div>

          <div className="flex flex-col gap-3" aria-label="Social links">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Follow Us</h3>
            <ul className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap" role="list">
              {socialItems.map((social, i) => (
                <li key={social.label + i}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm-socials-link flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <style>{`
.sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-panel-item { position: relative; font-weight: 700; font-size: 3rem; cursor: pointer; line-height: 1; letter-spacing: -1px; text-transform: uppercase; transition: color 0.15s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 0; font-size: 16px; font-weight: 400; color: hsl(var(--primary)); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }
@media (max-width: 640px) { .sm-panel-item { font-size: 2.5rem; } }
      `}</style>
    </div>
  );
};

export default MobileMenu;
