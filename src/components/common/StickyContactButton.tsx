import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const StickyContactButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 left-6 z-50 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-red hover:bg-primary-glow transition-all duration-300 hover:scale-105 group flex items-center gap-2"
      aria-label="Get a Quote"
    >
      <Phone className="h-5 w-5" />
      <span className="font-semibold">Get a Quote</span>
    </Link>
  );
};

export default StickyContactButton;