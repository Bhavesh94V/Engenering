import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Our Clients", to: "/clients" },
    { label: "Contact", to: "/contact" },
  ];

  const latestBlogs = [
    { title: "Innovations in Sustainable Steel Design", date: "Dec 2024" },
    { title: "The Future of Infrastructure Engineering", date: "Nov 2024" },
    { title: "Seismic Design Best Practices", date: "Nov 2024" },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container-fluid py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">STRUCTURAL</span>
              <span className="text-primary ml-2">ENG</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Award-winning structural engineering firm delivering innovative solutions for
              commercial, industrial, and infrastructure projects worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 line-accent pb-3">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Blogs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 line-accent pb-3">Latest Insights</h3>
            <ul className="space-y-4">
              {latestBlogs.map((blog, index) => (
                <li key={index}>
                  <Link
                    to="/blog"
                    className="group block hover:text-primary transition-colors"
                  >
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {blog.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{blog.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Career */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6 line-accent pb-3">Get In Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@structuraleng.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@structuraleng.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    123 Engineering Plaza, Tech District, CA 94105
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/50">
              <Link
                to="/career"
                className="inline-block text-sm font-semibold text-primary hover:text-primary-glow transition-colors group"
              >
                Join Our Team →
                <span className="block text-xs text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                  View Career Opportunities
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container-fluid py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Structural Engineering Excellence. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Engineered With Precision | Designed For Tomorrow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
