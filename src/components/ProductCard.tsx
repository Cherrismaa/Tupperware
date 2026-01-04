import { useState } from "react";
import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart, ZoomIn } from "lucide-react";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";
import { ProductImageLightbox } from "./ProductImageLightbox";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
    window.dispatchEvent(new Event("cart-updated"));
  };

  // Combine primary image with additional images
  const allImages = product.images?.length 
    ? [product.image, ...product.images] 
    : [product.image];

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  if (compact) {
    return (
      <>
        <Card className="overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
          <div className="relative">
            {product.isOffer && product.discount && (
              <Badge className="absolute top-1.5 right-1.5 bg-primary text-primary-foreground z-10 text-[10px] px-2 py-0.5">
                {product.discount}% OFF
              </Badge>
            )}
            <div 
              className="aspect-[4/3] bg-secondary overflow-hidden cursor-pointer group relative"
              onClick={handleImageClick}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Zoom indicator on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-200 flex items-center justify-center">
                <ZoomIn className="h-6 w-6 text-background opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
              </div>
            </div>
          </div>

          <CardContent className="p-2.5 flex-grow">
            <h3 className="font-medium text-sm text-foreground mb-0.5 line-clamp-1">{product.name}</h3>
            {product.size && (
              <p className="text-[11px] text-foreground/70">{product.size}</p>
            )}
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-base font-bold text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-[11px] text-foreground/60 line-through">₹{product.originalPrice}</span>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-2.5 pt-0">
            <Button
              variant="cart"
              size="sm"
              className="w-full text-[11px] h-8"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-1 h-3 w-3" />
              {product.inStock ? "Add" : "Out"}
            </Button>
          </CardFooter>
        </Card>

        <ProductImageLightbox
          images={allImages}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          productName={product.name}
        />
      </>
    );
  }

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
        <div className="relative">
          {product.isOffer && product.discount && (
            <Badge className="absolute top-1.5 right-1.5 bg-primary text-primary-foreground z-10 text-xs px-2 py-0.5">
              {product.discount}% OFF
            </Badge>
          )}
          <div 
            className="aspect-[4/3] bg-secondary overflow-hidden cursor-pointer group relative"
            onClick={handleImageClick}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Zoom indicator on hover */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-200 flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-background opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
            </div>
          </div>
        </div>

        <CardContent className="p-3.5 flex-grow">
          <h3 className="font-semibold text-base md:text-lg text-foreground mb-1 line-clamp-2">{product.name}</h3>
          {product.size && (
            <p className="text-xs text-foreground/70 mb-0.5">Size: {product.size}</p>
          )}
          {product.quantity && (
            <p className="text-xs text-foreground/70 mb-1">Qty: {product.quantity}</p>
          )}
          <p className="text-xs text-foreground/60 mb-2 line-clamp-2 hidden md:block">{product.description}</p>

          <div className="flex items-center gap-1.5">
            <span className="text-lg md:text-xl font-bold text-primary">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-foreground/50 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-3.5 pt-0">
          <Button
            variant="cart"
            size="sm"
            className="w-full text-xs md:text-sm h-9 md:h-10"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </CardFooter>
      </Card>

      <ProductImageLightbox
        images={allImages}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        productName={product.name}
      />
    </>
  );
};
