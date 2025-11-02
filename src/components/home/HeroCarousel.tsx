import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStructure1 from "@/assets/hero-structure-1.jpg";
import heroStructure2 from "@/assets/hero-structure-2.jpg";
import heroStructure3 from "@/assets/hero-structure-3.jpg";

interface Slide {
  id: number;
  image?: string;
  video?: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroStructure1,
    // video: "https://cdn.pixabay.com/video/2020/04/03/34855-403777679_large.mp4", // Uncomment and add video path when available
    // video: "https://cdn.pixabay.com/video/2023/11/07/188288-882243044_large.mp4", // Uncomment and add video path when available
    video: "https://cdn.pixabay.com/video/2016/07/23/3975-176000797_medium.mp4", // Uncomment and add video path when available
    title: "Redefining Strength",
    subtitle: "Innovative Structural Solutions",
    description: "Engineering excellence that transforms ambitious visions into lasting architectural landmarks.",
    side: "left",
  },
  {
    id: 2,
    image: heroStructure2,
    video: "https://cdn.pixabay.com/video/2020/06/23/42923-434300950_large.mp4", // Uncomment and add video path when available
    title: "Precision Built To Last",
    subtitle: "Commercial & Industrial Design",
    description: "From concept to completion, we deliver structural integrity with uncompromising precision.",
    side: "right",
  },
  {
    id: 3,
    image: heroStructure3,
    video: "https://cdn.pixabay.com/video/2022/11/01/137374-766338347_large.mp4", // Uncomment and add video path when available
    title: "Structures That Inspire",
    subtitle: "Infrastructure Excellence",
    description: "Bridging innovation and sustainability through advanced engineering methodologies.",
    side: "left",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Preload next video/image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const nextSlide = slides[nextIndex];

    if (nextSlide.video && !loadedVideos.has(nextIndex)) {
      const video = videoRefs.current[nextIndex];
      if (video) {
        video.load();
      }
    }
  }, [currentSlide, loadedVideos]);

  // Handle video playback
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }

    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentSlide) {
        video.pause();
      }
    });
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const handleVideoLoad = (index: number) => {
    setLoadedVideos((prev) => new Set(prev).add(index));
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media (Video or Image) */}
      <div className="absolute inset-0">
        {slides.map((slideItem, index) => (
          <div
            key={slideItem.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {slideItem.video ? (
              <div className="relative h-full w-full">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: isAnimating && index === currentSlide ? "scale(1.05)" : "scale(1)",
                    transition: "transform 1s ease-out",
                  }}
                  loop
                  muted
                  playsInline
                  preload={index === 0 ? "auto" : "metadata"}
                  onLoadedData={() => handleVideoLoad(index)}
                  poster={slideItem.image}
                >
                  <source src={slideItem.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
              </div>
            ) : (
              <div
                className="h-full w-full transition-transform duration-1000 ease-out"
                style={{
                  backgroundImage: `url(${slideItem.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: isAnimating && index === currentSlide ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center z-20">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center w-full ${slide.side === "right" ? "lg:grid-flow-dense" : ""
            }`}
        >
          {/* Text Content */}
          <div
            className={`space-y-6 ${slide.side === "right" ? "lg:col-start-2" : ""
              } animate-fade-in`}
            key={`text-${slide.id}`}
          >
            <div className="space-y-2">
              <p className="text-primary text-sm font-medium uppercase tracking-widest">
                {slide.subtitle}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight text-foreground">
                {slide.title}
              </h1>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg">
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Empty Column for Layout */}
          <div className={slide.side === "right" ? "lg:col-start-1" : ""} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full bg-background/10 backdrop-blur-md hover:bg-primary hover:text-primary-foreground border border-border/30 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground"
                } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-background/10 backdrop-blur-md hover:bg-primary hover:text-primary-foreground border border-border/30 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce z-30">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground uppercase tracking-widest rotate-90">
            Scroll
          </p>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
