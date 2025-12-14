import { useRef } from "react";
import { offerProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const OfferProductsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -280 : 280;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="offer-products" className="container mx-auto px-4 py-12">
      <div className="bg-offer-bg/30 rounded-2xl p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#e92063] text-white px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
            🔥 LIMITED TIME OFFERS 🔥
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Special Offer Products</h2>
          <p className="text-muted-foreground text-sm md:text-base">Up to 50% off on selected items - Don't miss out!</p>
        </div>

        {/* Scrollable Products Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-md -ml-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 shadow-md -mr-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {offerProducts.map((product) => (
              <div 
                key={product.id} 
                className="min-w-[200px] max-w-[200px] sm:min-w-[220px] sm:max-w-[220px] md:min-w-[240px] md:max-w-[240px] flex-shrink-0 snap-start"
              >
                <ProductCard product={product} compact />
              </div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center gap-1 mt-2 md:hidden">
            <span className="text-xs text-muted-foreground">← Swipe to see more →</span>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/products">
            <Button variant="outline" size="lg" className="group border-[#e92063] text-[#e92063] hover:bg-[#e92063] hover:text-white">
              Explore More Products
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
