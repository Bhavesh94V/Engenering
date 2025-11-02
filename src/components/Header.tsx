import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Building2, Briefcase, Users, FileText, Award, Newspaper } from "lucide-react";
import { services } from "@/data/services";
import MobileMenu from "./MobileMenu";
import logo from "@/assets/image.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const mobileMenuItems = [
    { label: 'Home', link: '/', ariaLabel: 'Go to home page' },
    { label: 'About', link: '/about', ariaLabel: 'Learn about us' },
    { label: 'Services', link: '/services', ariaLabel: 'View our services' },
    { label: 'Projects', link: '/projects', ariaLabel: 'View our projects' },
    { label: 'Clients', link: '/clients', ariaLabel: 'View our clients' },
    { label: 'Blog', link: '/blog', ariaLabel: 'Read our blog' },
    { label: 'Contact', link: '/contact', ariaLabel: 'Get in touch' },
    { label: 'Careers', link: '/career', ariaLabel: 'Join our team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      to: "/",
      label: "Home",
      type: "simple" as const,
      dropdown: null
    },
    {
      to: "/about",
      label: "About Us",
      type: "mega" as const,
      dropdown: [
        {
          title: "Company",
          icon: Building2,
          links: [
            { to: "/about", label: "Company Overview" },
            { to: "/about#vision", label: "Our Vision" },
            { to: "/about#mission", label: "Our Mission" },
            { to: "/why-choose-us", label: "Why Choose Us" },
          ]
        },
        {
          title: "Team",
          icon: Users,
          links: [
            { to: "/about#team", label: "Leadership Team" },
            { to: "/career", label: "Careers" },
            { to: "/about#culture", label: "Company Culture" },
          ]
        }
      ]
    },
    {
      to: "/services",
      label: "Services",
      type: "mega" as const,
      dropdown: [
        {
          title: "Engineering Services",
          icon: Briefcase,
          links: services.slice(0, 4).map(service => ({
            to: `/services/${service.id}`,
            label: service.title,
          }))
        },
        {
          title: "Specialized Solutions",
          icon: Award,
          links: services.slice(4).map(service => ({
            to: `/services/${service.id}`,
            label: service.title,
          }))
        }
      ]
    },
    {
      to: "/projects",
      label: "Projects",
      type: "simple" as const,
      dropdown: [
        { to: "/projects", label: "All Projects" },
        { to: "/projects?filter=commercial", label: "Commercial" },
        { to: "/projects?filter=industrial", label: "Industrial" },
        { to: "/projects?filter=infrastructure", label: "Infrastructure" },
        { to: "/projects?filter=residential", label: "Residential" },
      ]
    },
    {
      to: "/clients",
      label: "Our Clients",
      type: "simple" as const,
      dropdown: [
        { to: "/clients", label: "Client Portfolio" },
        { to: "/clients#testimonials", label: "Testimonials" },
        { to: "/clients#case-studies", label: "Case Studies" },
      ]
    },
    {
      to: "/blog",
      label: "Blog",
      type: "simple" as const,
      dropdown: [
        { to: "/blog", label: "All Articles" },
        { to: "/blog?category=structural-design", label: "Structural Design" },
        { to: "/blog?category=seismic-engineering", label: "Seismic Engineering" },
        { to: "/blog?category=industry-insights", label: "Industry Insights" },
        { to: "/blog?category=case-studies", label: "Case Studies" },
      ]
    },
    {
      to: "/contact",
      label: "Contact",
      type: "simple" as const,
      dropdown: null
    },
  ];

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mobileMenuItems}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-elevation py-3 mt-10"
          : "bg-transparent backdrop-blur-sm py-6"
          }`}
      >
        <nav className="container-fluid mx-auto flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {leftLinks.map((link) => (
              <div
                key={link.to}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 flex items-center gap-1 ${location.pathname === link.to ? "text-primary after:w-full" : "text-foreground"
                    }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {link.dropdown && openDropdown === link.label && (
                  link.type === "mega" ? (
                    <div className="absolute top-full left-0 mt-2 w-[500px] bg-background/60 backdrop-blur-xl backdrop-saturate-150 border border-border shadow-2xl animate-fade-in z-[100] p-6 rounded-lg">
                      <div className="grid grid-cols-2 gap-6">
                        {link.dropdown.map((section: any) => (
                          <div key={section.title}>
                            <div className="flex items-center gap-2 mb-3">
                              <section.icon className="h-5 w-5 text-primary" />
                              <h3 className="font-semibold text-sm">{section.title}</h3>
                            </div>
                            <div className="space-y-1">
                              {section.links.map((item: any) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/30 transition-all duration-200 rounded"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-background/60 backdrop-blur-xl backdrop-saturate-150  border border-border shadow-2xl animate-fade-in z-[100] rounded-lg overflow-hidden">
                      {link.dropdown.map((item: any) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-6 py-3 text-sm text-foreground hover:text-primary hover:bg-muted/30 transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Logo - Centered */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto scale-110" />
            {/* <div className="text-2xl font-bold tracking-tight">
            <span className="text-foreground">STRUCTURAL</span>
            <span className="text-primary ml-2">ENG</span>
          </div> */}
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {rightLinks.map((link) => (
              <div
                key={link.to}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 flex items-center gap-1 ${location.pathname === link.to ? "text-primary after:w-full" : "text-foreground"
                    }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {link.dropdown && openDropdown === link.label && (
                  link.type === "mega" ? (
                    <div className="absolute top-full right-0 mt-2 w-[500px] bg-background/60 backdrop-blur-xl backdrop-saturate-150 border border-border shadow-2xl animate-fade-in z-[100] p-6 rounded-lg">

                      <div className="grid grid-cols-2 gap-6">
                        {link.dropdown.map((section: any) => (
                          <div key={section.title}>
                            <div className="flex items-center gap-2 mb-3">
                              <section.icon className="h-5 w-5 text-primary" />
                              <h3 className="font-semibold text-sm">{section.title}</h3>
                            </div>
                            <div className="space-y-1">
                              {section.links.map((item: any) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/30 transition-all duration-200 rounded"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                      <div className="absolute top-full right-0 mt-2 w-56 bg-background/60 backdrop-blur-xl backdrop-saturate-150 border border-border shadow-2xl animate-fade-in z-[100] rounded-lg overflow-hidden">
                      {link.dropdown.map((item: any) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-6 py-3 text-sm text-foreground hover:text-primary hover:bg-muted/30 transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle - Shown on mobile, hidden on desktop */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
