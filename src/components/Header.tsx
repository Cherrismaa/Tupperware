import { ShoppingCart, Phone, Menu, X, Search, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getCartCount, getCart } from "@/lib/cart";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      setCartCount(getCartCount(cart));
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cart-updated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Visit Store", href: "/visit-store" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Top announcement bar */}
        <div className="bg-gradient-primary text-primary-foreground py-2 px-4 text-center text-xs sm:text-sm font-medium">
          <p>🎉 Limited Time Offer: Buy ₹2500 & Get ₹1000 Off! | Free Shipping on ₹3500+ 🎉</p>
        </div>

        {/* Main header */}
        <div className="container mx-auto flex h-14 items-center justify-between px-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">

            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="public/logos/header-logo.png"
                alt="Tupperware Hyderabad"
                className="h-8 sm:h-20 w-auto object-contain"/>
            </Link>

          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <SearchBar />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Instagram */}
            <a
              href="https://instagram.com/abc_tupperware"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>

            {/* Call Button */}
            <a href="tel:+918919357003" className="hidden sm:flex items-center">
              <Button variant="ghost" size="sm" className="gap-2 h-9">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">Call Us</span>
              </Button>
            </a>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-accent border-2 border-background">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar (expandable) */}
        {mobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 animate-slide-up">
            <SearchBar isMobile onClose={() => setMobileSearchOpen(false)} />
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="absolute right-0 top-0 h-full w-72 bg-background shadow-2xl animate-slide-in-right">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold text-primary">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="mx-4 border-t" />

            {/* Contact Actions */}
            <div className="p-4 space-y-3">
              <a
                href="tel:+918919357003"
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 89193 57003</span>
              </a>
              
              <a
                href="https://wa.me/918919357003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-base font-medium bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 rounded-lg transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/abc_tupperware"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@abc_tupperware</span>
              </a>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-secondary/30">
              <p className="text-xs text-muted-foreground text-center">
                15+ Years of Authentic Tupperware Service
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};