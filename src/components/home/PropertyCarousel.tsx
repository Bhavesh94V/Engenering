import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import building1 from "@/assets/building-1.jpg";
import building2 from "@/assets/building-2.jpg";
import building3 from "@/assets/building-3.jpg";

interface Slide {
    id: number;
    category: string;
    title: string;
    description: string;
    buttonText: string;
    image: string;
    video?: string;
    bgColor: string;
}

const slides: Slide[] = [
    {
        id: 1,
        category: "Commercial/Hospitality High-Rise Project",
        title: "Westport, SBR Ahmedabad",
        description: "The exquisite property offering spacious & limited numbers of offices & Showrooms starting from 2800 SQ FT.",
        buttonText: "Hospitality Projects",
        image: building1,
        bgColor: "from-[#C17B63] to-[#E8A896]",
    },
    {
        id: 2,
        category: "Commercial Project | SG Highway, Ahmedabad",
        title: "Money Plant High Street",
        description: "A new-age real estate project designed to fit your bigger business dreams with its spacious office and shop spaces.",
        buttonText: "Commercial Projects",
        image: building2,
        bgColor: "from-[#3A3A3A] to-[#5A5A5A]",
    },
    {
        id: 3,
        category: "High-Rise Residential | Ahmedabad",
        title: "Parshwa Ayaan Bopal-Ambli Road",
        description: "Spacious 4 BHK luxury residences with world-class interiors, iconic landscape gardens, and top-notch specifications.",
        buttonText: "Residential Projects",
        image: building3,
        bgColor: "from-[#B8933A] to-[#D4AF5A]",
    },
    {
        id: 4,
        category: "High-Rise Residential | Ahmedabad",
        title: "Parshwa Ayaan Bopal-Ambli Road",
        description: "Spacious 4 BHK luxury residences with world-class interiors, iconic landscape gardens, and top-notch specifications.",
        buttonText: "Residential Projects",
        image: building3,
        bgColor: "from-[#C6F6D5] to-[#9AE6B4]",
    },
    {
        id: 5,
        category: "High-Rise Residential | Ahmedabad",
        title: "Parshwa Ayaan Bopal-Ambli Road",
        description: "Spacious 4 BHK luxury residences with world-class interiors, iconic landscape gardens, and top-notch specifications.",
        buttonText: "Residential Projects",
        image: building3,
        bgColor: "from-[#FFE5B4] to-[#FFD1A4]",
    },
];

export const PropertyCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setAnimate(false);
        setTimeout(() => setAnimate(true), 50);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const getPrevIndex = () => {
        return selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
    };

    const getNextIndex = () => {
        return selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background gradient overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${slides[selectedIndex].bgColor} transition-all duration-1000 ease-in-out`}
            />

            {/* Side preview panels - hidden on mobile/tablet */}
            <div className="hidden xl:block absolute inset-0 pointer-events-none">
                {/* Left preview */}
                <div className="absolute left-[0%] top-[45%] -translate-y-1/2 w-[300px] h-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    {slides[getPrevIndex()].video ? (
                        <video
                            src={slides[getPrevIndex()].video}
                            className="w-full h-full object-cover opacity-60"
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <img
                            src={slides[getPrevIndex()].image}
                            alt="Previous"
                            className="w-full h-full object-cover opacity-60"
                        />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full border border-white/30" />
                        </div>
                    </div>
                </div>

                {/* Right preview */}
                <div className="absolute right-[0%] top-[45%] -translate-y-1/2 w-[300px] h-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    {slides[getNextIndex()].video ? (
                        <video
                            src={slides[getNextIndex()].video}
                            className="w-full h-full object-cover opacity-60"
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <img
                            src={slides[getNextIndex()].image}
                            alt="Next"
                            className="w-full h-full object-cover opacity-60"
                        />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-2 border-white/40 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full border border-white/30" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main carousel */}
            <div className="relative h-full flex items-center justify-center">
                <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[650px] h-[80%] sm:h-[75%] md:h-[70%] xl:h-[65%] relative overflow-hidden" ref={emblaRef}>
                    <div className="flex h-full">
                        {slides.map((slide) => (
                            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    {/* Main media container */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        {slide.video ? (
                                            <video
                                                src={slide.video}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                            />
                                        ) : (
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                                    </div>

                                    {/* Text content overlay */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
                                        <div
                                            className={`space-y-2 sm:space-y-3 md:space-y-4 ${animate ? "animate-text-zoom" : "opacity-0"
                                                }`}
                                        >
                                            <p className="text-white/90 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-light">
                                                {slide.category}
                                            </p>
                                            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight px-4">
                                                {slide.title}
                                            </h2>
                                            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-light leading-relaxed">
                                                {slide.description}
                                            </p>
                                            <div className="pt-2 sm:pt-3 md:pt-4">
                                                <button className="bg-white text-gray-800 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105">
                                                    {slide.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 sm:left-6 md:left-12 lg:left-16 xl:left-[7.5%] top-[45%] -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-full border-2 border-white/60 bg-transparent hover:bg-white/10 flex items-center justify-center transition-all duration-300 group z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
                </button>

                <button
                    onClick={scrollNext}
                    className="absolute right-4 sm:right-6 md:right-12 lg:right-16 xl:right-[7.5%] top-[45%] -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-full border-2 border-white/60 bg-transparent hover:bg-white/10 flex items-center justify-center transition-all duration-300 group z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </div>
    );
};
