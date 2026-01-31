//src\components\PromoBanner.tsx

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 right-3 z-50 max-w-[280px] md:max-w-sm animate-slide-in-right">
      <div className="bg-primary text-primary-foreground rounded-lg shadow-2xl p-4 md:p-5 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1.5 right-1.5 h-6 w-6 hover:bg-white/20 text-primary-foreground"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="pr-6">
          <h3 className="text-base md:text-lg font-bold mb-1.5">Limited-Time Offer</h3>
          <p className="text-xs md:text-sm mb-2.5 opacity-95">Shop for ₹2500 and enjoy ₹1000 instant savings.</p>
          <a href="/products">
            <Button variant="outline" size="sm" className="bg-white text-primary hover:bg-white/90 text-xs md:text-sm h-8">
              Shop Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
