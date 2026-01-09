import { MapPin, Phone, Instagram, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "918919357003";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="public/logos/footer-logo.png"
                alt="Tupperware Hyderabad"
                className=" h-16 sm:h-20 md:h-24 w-auto object-contain mb-4"/>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Serving authentic Tupperware products in Hyderabad for over 15 years — premium kitchenware, storage, and organizational solutions you can trust.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/918919357003`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#25D366]/20 rounded-full transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              </a>
              <a
                href="https://instagram.com/abc_tupperware"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#e92063]/20 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5 text-[#e92063]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#e92063]">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Home
              </Link>
              <Link to="/products" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Products
              </Link>
              <Link to="/gallery" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Contact Us
              </Link>
              <Link to="/visit-store" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Visit Store
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#e92063]">Categories</h3>
            <div className="space-y-2">

              <Link to="/products?category=food-storage" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Food Storage
              </Link>

              <Link to="/products?category=kitchenware" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Kitchenware
              </Link>

              <Link to="/products?category=serverware" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                ServerWare
              </Link>

              <Link to="/products?category=lunch-boxes" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Kidsware / Lunch Boxes
              </Link>

              <Link to="/products?category=water-bottles" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Water Bottles
              </Link>

              <Link to="/products?category=water-bottles" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                CookWare
              </Link>

              <Link to="/products?category=organizers" className="block text-sm text-white/70 hover:text-[#e92063] transition-colors">
                Organizers
              </Link>
              
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#e92063]">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+918919357003"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#e92063] transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 89193 57003</span>
              </a>
              <a
                href={`https://wa.me/918919357003`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:contacttupperwarehyd@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#e92063] transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contacttupperwarehyd@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon-Sat: 10AM - 8PM</span>
              </div>
            </div>

            <Link to="/visit-store">
              <Button variant="default" size="sm" className="mt-4 bg-[#e92063] hover:bg-[#d11a57] text-white">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Tupperware Hyderabad. All rights reserved.</p>
            <p>15+ Years of Authentic Tupperware Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
