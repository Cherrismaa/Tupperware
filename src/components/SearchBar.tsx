import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { allProducts } from "@/data/products";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Search keywords mapped to products for smart suggestions
const searchKeywords: Record<string, string[]> = {
  // Location-based keywords
  "kitchen shelf": ["Smart Stor Container Set", "Modular Mates Oval Set", "Premium Storage Organizer"],
  "fridge": ["FridgeSmart Container Set", "Smart Stor Container Set"],
  "cupboard": ["Modular Mates Oval Set", "Premium Storage Organizer"],
  "pantry": ["Modular Mates Oval Set", "Smart Stor Container Set"],
  "dining table": ["Elegant Serve Set", "Classic Bowl Set"],
  "dining": ["Elegant Serve Set", "Classic Bowl Set"],
  
  // Generic product terms
  "snack box": ["Compact Lunch Box", "Venture Lunch Box", "Smart Lunch Set"],
  "chapati box": ["Crystal Wave Bowl", "Classic Bowl Set"],
  "lunch carrier": ["Smart Lunch Set", "Venture Lunch Box"],
  "masala box": ["Smart Stor Container Set", "Modular Mates Oval Set"],
  "kitchen items": ["Smart Stor Container Set", "Classic Bowl Set", "Crystal Wave Bowl", "Premium Storage Organizer"],
  "fridge set": ["FridgeSmart Container Set", "Smart Stor Container Set"],
  "lunch box": ["Compact Lunch Box", "Venture Lunch Box", "Smart Lunch Set"],
  
  // Size-based keywords
  "water": ["Fresh & Pure Water Bottle", "Eco Water Bottle"],
  "bottle": ["Fresh & Pure Water Bottle", "Eco Water Bottle"],
  "1l": ["Fresh & Pure Water Bottle", "Smart Stor Container Set"],
  "1 liter": ["Fresh & Pure Water Bottle", "Smart Stor Container Set"],
  "small box": ["Compact Lunch Box", "Smart Stor Container Set"],
  "tall box": ["Modular Mates Oval Set"],
  "big box": ["Premium Storage Organizer", "Modular Mates Oval Set"],
  
  // Use-case keywords
  "serving": ["Elegant Serve Set"],
  "mixing bowl": ["Classic Bowl Set", "Crystal Wave Bowl"],
  "microwave": ["Crystal Wave Bowl"],
  "storage": ["Smart Stor Container Set", "FridgeSmart Container Set", "Premium Storage Organizer"],
  "organizer": ["Premium Storage Organizer", "Modular Mates Oval Set"],
  "container": ["Smart Stor Container Set", "FridgeSmart Container Set", "Modular Mates Oval Set"],
  
  // User-based keywords
  "kids": ["Compact Lunch Box", "Venture Lunch Box"],
  "school": ["Compact Lunch Box", "Smart Lunch Set", "Eco Water Bottle"],
  "office": ["Smart Lunch Set", "Fresh & Pure Water Bottle"],
  "children": ["Compact Lunch Box", "Venture Lunch Box"],
};

interface SearchBarProps {
  className?: string;
  onClose?: () => void;
  isMobile?: boolean;
}

export const SearchBar = ({ className = "", onClose, isMobile = false }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof allProducts>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    
    // First, check keyword mappings
    let matchedProductNames: string[] = [];
    Object.entries(searchKeywords).forEach(([keyword, productNames]) => {
      if (keyword.includes(lowerQuery) || lowerQuery.includes(keyword)) {
        matchedProductNames.push(...productNames);
      }
    });

    // Then search in product names, descriptions, and categories
    const directMatches = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.size?.toLowerCase().includes(lowerQuery)
    );

    // Combine and deduplicate
    const keywordMatchedProducts = allProducts.filter((p) =>
      matchedProductNames.includes(p.name)
    );
    
    const combined = [...new Map([...directMatches, ...keywordMatchedProducts].map(p => [p.id, p])).values()];
    setSuggestions(combined.slice(0, 6));
    setIsOpen(combined.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
      onClose?.();
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/products?highlight=${productId}`);
    setIsOpen(false);
    setQuery("");
    onClose?.();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search by product, size, or use..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          className="pl-10 pr-10 h-10 bg-secondary/50 border-border/50 focus:border-primary focus:bg-background"
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={() => {
              setQuery("");
              setSuggestions([]);
              setIsOpen(false);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-2 text-xs text-muted-foreground border-b">
            Suggestions based on your search
          </div>
          {suggestions.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="w-full flex items-center gap-3 p-3 hover:bg-secondary/50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded bg-muted flex-shrink-0 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {product.category} • {product.size}
                </p>
              </div>
              <span className="text-sm font-semibold text-primary">₹{product.price}</span>
            </button>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full p-3 text-sm text-primary font-medium hover:bg-secondary/50 transition-colors border-t"
          >
            View all results for "{query}"
          </button>
        </div>
      )}
    </div>
  );
};