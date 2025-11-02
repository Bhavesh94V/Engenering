import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const MiniHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[70] bg-primary text-primary-foreground border-b border-primary-glow transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container-fluid flex items-center justify-between h-10 text-sm">
        {/* Left - Contact Numbers */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden md:inline">+1 (234) 567-890</span>
          </a>
          <a
            href="tel:+1234567891"
            className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden md:inline">+1 (234) 567-891</span>
          </a>
          <a
            href="mailto:info@structuraleng.com"
            className="hidden lg:flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>info@structuraleng.com</span>
          </a>
        </div>

        {/* Right - Social Media */}
        <div className="flex items-center gap-4">
          <span className="text-xs hidden md:inline mr-2">Follow Us:</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground/80 transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
