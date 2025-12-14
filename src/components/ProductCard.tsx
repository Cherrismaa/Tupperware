import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
    window.dispatchEvent(new Event("cart-updated"));
  };

  if (compact) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
        <div className="relative">
          {product.isOffer && product.discount && (
            <Badge className="absolute top-2 right-2 bg-[#e92063] text-white z-10 text-[10px] px-2 py-0.5">
              {product.discount}% OFF
            </Badge>
          )}
          <div className="aspect-square bg-secondary overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <CardContent className="p-3 flex-grow">
          <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
          {product.size && (
            <p className="text-xs text-muted-foreground mb-1">{product.size}</p>
          )}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#e92063]">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-3 pt-0">
          <Button
            variant="cart"
            size="sm"
            className="w-full text-xs h-8"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-1 h-3 w-3" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="relative">
        {product.isOffer && product.discount && (
          <Badge className="absolute top-2 right-2 bg-[#e92063] text-white z-10">
            {product.discount}% OFF
          </Badge>
        )}
        <div className="aspect-square bg-secondary overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        {product.size && (
          <p className="text-sm text-muted-foreground mb-1">Size: {product.size}</p>
        )}
        {product.quantity && (
          <p className="text-sm text-muted-foreground mb-2">Quantity: {product.quantity}</p>
        )}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-bold text-[#e92063]">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          variant="cart"
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
};
