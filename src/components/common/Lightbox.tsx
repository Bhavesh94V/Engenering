import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, currentIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
      if (e.key === "ArrowRight") setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors p-2"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" />
      </button>

      <button
        onClick={() => setIndex((i) => (i > 0 ? i - 1 : images.length - 1))}
        className="absolute left-4 text-foreground hover:text-primary transition-colors p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>

      <img
        src={images[index]}
        alt={`Project ${index + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      <button
        onClick={() => setIndex((i) => (i < images.length - 1 ? i + 1 : 0))}
        className="absolute right-4 text-foreground hover:text-primary transition-colors p-2"
        aria-label="Next image"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;