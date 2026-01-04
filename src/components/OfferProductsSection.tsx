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
    <section id="offer-products" className="container mx-auto px-4 py-8">
      <div className="bg-secondary/30 rounded-xl p-4 md:p-6">
        <div className="text-center mb-5">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full font-semibold text-xs mb-3">
            LIMITED TIME OFFERS
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Special Offer Products</h2>
          <p className="text-muted-foreground text-xs md:text-sm">Up to 50% off on selected items</p>
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
            className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-3 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {offerProducts.map((product) => (
              <div 
                key={product.id} 
                className="min-w-[155px] max-w-[155px] sm:min-w-[170px] sm:max-w-[170px] md:min-w-[190px] md:max-w-[190px] flex-shrink-0 snap-start"
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

        <div className="text-center mt-4">
          <Link to="/products">
            <Button variant="outline" size="sm" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore More Products
              <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
