//src\components\KitchenGallery.tsx

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Link } from "react-router-dom";

export interface GalleryImage {
  id: string;
  src: string;
  label: string;
  description?: string;
  productsUsed?: string[];
  problemSolved?: string;
}

// Sample placeholder images for kitchen setups
export const sampleGalleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Before",
    description: "Cluttered kitchen with no organization system",
    productsUsed: ["Smart Stor Container Set", "Modular Mates Oval Set"],
    problemSolved: "Transformed a messy pantry into an organized storage haven",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    label: "After",
    description: "Beautifully organized kitchen with Tupperware containers",
    productsUsed: ["Premium Storage Organizer", "FridgeSmart Container Set"],
    problemSolved: "Easy access to ingredients, no more expired food waste",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    label: "Kitchen Setup",
    description: "Complete kitchen transformation using Tupperware",
    productsUsed: ["Crystal Wave Bowl", "Classic Bowl Set"],
    problemSolved: "Modern storage solution that maximizes space",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    label: "Dining Area",
    description: "Elegant serving setup for family gatherings",
    productsUsed: ["Elegant Serve Set"],
    problemSolved: "Stylish serving with leak-proof lids",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=800&q=80",
    label: "Customer Setup",
    description: "Real customer's organized pantry",
    productsUsed: ["Modular Mates Oval Set", "Premium Storage Organizer"],
    problemSolved: "Complete pantry makeover in one day",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
    label: "Before/After",
    description: "Dramatic transformation of storage space",
    productsUsed: ["Smart Stor Container Set", "FridgeSmart Container Set"],
    problemSolved: "From chaos to clarity - 50% more usable space",
  },
];

interface KitchenGalleryProps {
  images?: GalleryImage[];
  showDetails?: boolean;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  showCustomizeMessage?: boolean;
}

export const KitchenGallery = ({
  images = sampleGalleryImages,
  showDetails = false,
  title = "Customer Kitchen Organization and free Transformations Service in Hyderabad",
  subtitle = "Expert home visit, personalized planning, and complete kitchen setup using Tupperware solutions",
  compact = false,
  showCustomizeMessage = false,
}: KitchenGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const openLightbox = (index: number) => {
    if (!isDragging) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current || startX === 0) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
    setStartX(0);
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleMouseLeave = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
    setStartX(0)
  };

  return (
    <section className={`${compact ? "py-8" : "py-12"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-6">
            {title && (
              <h2 className={`${compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"} font-bold text-foreground mb-2`}>
                {title}
              </h2>
            )}
            {subtitle && <p className="text-muted-foreground text-sm md:text-base">{subtitle}</p>}
            <p className="text-muted-foreground max-w-3xl mx-auto mt-3 text-sm md:text-base">
              We provide a free kitchen organization service across Hyderabad and nearby areas. Our team visits your home, understands your storage needs, and helps organize your kitchen using customized Tupperware solutions for better space utilization and everyday convenience.</p>

          </div>
          
        )}

        {/* Customize Message Block */}
        {showCustomizeMessage && (
          <div className="bg-secondary/50 border border-border rounded-xl p-4 md:p-6 mb-6 text-center">
            <p className="text-foreground text-sm md:text-base leading-relaxed mb-4">
              <strong>Want to customize your kitchen?</strong> We can help! We personally visit your kitchen 
              and organize it neatly according to your requirements and preferences. The before and after 
              transformation is very satisfying – you can see real customer homes here.
            </p>
            <Link to="/contact">
              <Button className="bg-[#e92063] hover:bg-[#d11a57] text-white">
                Contact Us to Get Started
              </Button>
            </Link>
          </div>
        )}

        {/* Gallery Carousel with Swipe */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-md -ml-2 md:-ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-md -mr-2 md:-mr-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Scrollable Images Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide cursor-grab select-none pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`${compact ? "min-w-[260px] max-w-[260px] sm:min-w-[280px] sm:max-w-[280px]" : "min-w-[280px] max-w-[280px] sm:min-w-[300px] sm:max-w-[300px] md:min-w-[320px] md:max-w-[320px]"} flex-shrink-0`}
              >
                <div
                  onClick={() => openLightbox(index)}
                  className="group/card relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3] premium-card"
                >
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    draggable={false}
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-70" />
                  
                  {/* Label */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-primary text-primary-foreground rounded-full">
                      {image.label}
                    </span>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <div className="p-1.5 bg-background/90 rounded-full">
                      <ZoomIn className="h-3 w-3" />
                    </div>
                  </div>
                  
                  {/* Description - Compact */}
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-white text-xs font-medium line-clamp-1">
                      {image.description}
                    </p>
                    {showDetails && image.productsUsed && (
                      <p className="text-white/80 text-[10px] mt-0.5 line-clamp-1">
                        Products: {image.productsUsed.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center gap-1 mt-4 md:hidden">
            <span className="text-xs text-muted-foreground">← Swipe to see more →</span>
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 bg-foreground border-none">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          
          {/* Navigation */}
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          
          {/* Image */}
          <div className="relative">
            <img
              src={images[lightboxIndex]?.src}
              alt={images[lightboxIndex]?.label}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Details Panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground via-foreground/90 to-transparent p-4 md:p-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e92063] text-white rounded-full mb-2">
                {images[lightboxIndex]?.label}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {images[lightboxIndex]?.description}
              </h3>
              {images[lightboxIndex]?.problemSolved && (
                <p className="text-white/80 text-sm mb-2">
                  <strong>Result:</strong> {images[lightboxIndex]?.problemSolved}
                </p>
              )}
              {images[lightboxIndex]?.productsUsed && (
                <p className="text-white/70 text-xs md:text-sm">
                  <strong>Products Used:</strong> {images[lightboxIndex]?.productsUsed?.join(", ")}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
