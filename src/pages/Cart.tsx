import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { getCart, updateCartQuantity, removeFromCart, getCartTotal } from "@/lib/cart";
import { CartItem } from "@/types/product";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    const updatedCart = updateCartQuantity(productId, newQuantity);
    setCart(updatedCart);
    window.dispatchEvent(new Event("cart-updated"));
    toast.success("Cart updated");
  };

  const handleRemove = (productId: string) => {
    const updatedCart = removeFromCart(productId);
    setCart(updatedCart);
    window.dispatchEvent(new Event("cart-updated"));
    toast.success("Item removed from cart");
  };

  const total = getCartTotal(cart);
  const discount = total >= 2500 ? 1000 : 0;
  const finalTotal = total - discount;

  return (
    <>
      <Helmet>
        <title>Shopping Cart | Tupperware Store Hyderabad</title>
        <meta name="description" content="Review your Tupperware products cart and checkout with amazing discounts." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="bg-gradient-hero py-12 mb-8">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Shopping Cart</h1>
              <p className="text-xl text-muted-foreground">Review your items and checkout</p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Add some amazing Tupperware products to get started!</p>
                <Link to="/products">
                  <Button variant="default" size="lg">
                    Browse Products
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {cart.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleUpdateQuantity(item.id, item.cartQuantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center font-medium">{item.cartQuantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleUpdateQuantity(item.id, item.cartQuantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive"
                                onClick={() => handleRemove(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-primary">₹{item.price * item.cartQuantity}</p>
                            {item.originalPrice && (
                              <p className="text-sm text-muted-foreground line-through">
                                ₹{item.originalPrice * item.cartQuantity}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span className="font-semibold">₹{total}</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between text-success">
                            <span>Discount (₹2500+ offer)</span>
                            <span className="font-semibold">-₹{discount}</span>
                          </div>
                        )}
                        <div className="border-t pt-3 flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-primary">₹{finalTotal}</span>
                        </div>
                      </div>

                      {total >= 2500 && (
                        <div className="bg-success/10 border border-success text-success p-3 rounded-lg mb-4 text-sm text-center">
                          🎉 You saved ₹1000!
                        </div>
                      )}

                      {total < 2500 && total > 0 && (
                        <div className="bg-accent/10 border border-accent text-accent-foreground p-3 rounded-lg mb-4 text-sm text-center">
                          Add ₹{2500 - total} more to get ₹1000 off!
                        </div>
                      )}

                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        <Button variant="offer" size="lg" className="w-full mb-3">
                          Checkout via WhatsApp
                        </Button>
                      </a>
                      <Link to="/visit-store">
                        <Button variant="outline" size="lg" className="w-full">
                          Visit Store to Buy
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
