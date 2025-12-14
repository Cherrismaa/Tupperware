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
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-slide-in">
      <div className="bg-gradient-offer text-accent-foreground rounded-lg shadow-2xl p-6 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-6 w-6 hover:bg-white/20"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="pr-8">
          <h3 className="text-xl font-bold mb-2">🎉 Limited Time Offer!</h3>
          <p className="text-sm mb-3">Buy ₹2500 worth of products and get ₹1000 OFF instantly!</p>
          <a href="/products">
            <Button variant="outline" size="sm" className="bg-white text-primary hover:bg-white/90">
              Shop Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
