import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const heroSlides = [
  {
    id: 1,
    title: "Buy ₹5500 worth of products",
    subtitle: "Get ₹1000 worth of products FREE!",
    highlight: "Limited Time Offer",
    image: "public/assets/tup-2026.webp",
  },
  {
    id: 2,
    title: "FREE Shipping",
    subtitle: "On orders of ₹3500 and above",
    highlight: "All India Delivery",
    image: "public/assets/bottles-boxes.webp",
  },
  {
    id: 3,
    title: "Premium Quality Storage",
    subtitle: "Authentic Tupperware Products",
    highlight: "15+ Years of Trust",
    image: "public/assets/tup-hero3.webp",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(currentSlide);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(currentSlide);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 50) {
      if (walk > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        setIsDragging(false);
      } else if (walk < 0 && currentSlide < heroSlides.length - 1) {
        setCurrentSlide(currentSlide + 1);
        setIsDragging(false);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 50) {
      if (walk > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        setIsDragging(false);
      } else if (walk < 0 && currentSlide < heroSlides.length - 1) {
        setCurrentSlide(currentSlide + 1);
        setIsDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-gradient-hero">
      <div
        ref={sliderRef}
        className="flex h-full transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {heroSlides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              draggable={false}
            />
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
              {slide.highlight && (
                <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-bold bg-[#e92063] text-black rounded-full mb-4 animate-pulse">
                  {slide.highlight}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 animate-fade-in">{slide.title}</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#e92063] font-semibold mb-6 animate-slide-up">{slide.subtitle}</p>
              <Button variant="offer" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-8" : "bg-primary/30"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
