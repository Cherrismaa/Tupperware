import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { sampleGalleryImages } from "@/components/KitchenGallery";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight, ZoomIn, Filter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = [
    { id: "all", label: "All" },
    { id: "before", label: "Before" },
    { id: "after", label: "After" },
    { id: "kitchen", label: "Kitchen" },
    { id: "dining", label: "Dining" },
  ];

  const filteredImages = selectedFilter === "all" 
    ? sampleGalleryImages 
    : sampleGalleryImages.filter(img => 
        img.label.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        img.description?.toLowerCase().includes(selectedFilter.toLowerCase())
      );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Real Kitchen Transformations - Tupperware Hyderabad</title>
        <meta
          name="description"
          content="See real before and after kitchen transformations from our customers. Browse our gallery of organized kitchens using Tupperware products in Hyderabad."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-10 md:py-14">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-1 text-xs font-semibold bg-[#e92063]/10 text-[#e92063] rounded-full mb-4">
                  Gallery
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Real Customer Transformations
                </h1>
                <p className="text-muted-foreground">
                  Browse through our collection of before and after photos showing how Tupperware products 
                  have transformed kitchens across Hyderabad.
                </p>
              </div>
            </div>
          </section>

          {/* Customize Message */}
          <section className="py-6 bg-secondary/50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-4">
                  <strong>Want to customize your kitchen?</strong> We can help! We personally visit your kitchen 
                  and organize it neatly according to your requirements and preferences. The before and after 
                  transformation is very satisfying – you can see real customer homes here.
                </p>
                <Link to="/contact">
                  <Button className="bg-[#e92063] hover:bg-[#d11a57] text-white">
                    Contact Us to Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="py-6 border-b sticky top-[104px] bg-background/95 backdrop-blur z-40">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex-shrink-0 ${selectedFilter === filter.id ? "bg-[#e92063] hover:bg-[#d11a57]" : ""}`}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-10">
            <div className="container mx-auto px-4">
              {filteredImages.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No images found for this filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredImages.map((image, index) => (
                    <div
                      key={image.id}
                      onClick={() => openLightbox(index)}
                      className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square premium-card"
                    >
                      <img
                        src={image.src}
                        alt={image.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Label */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-xs font-semibold bg-[#e92063] text-white rounded-full">
                          {image.label}
                        </span>
                      </div>
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="p-2 bg-background/90 rounded-full">
                          <ZoomIn className="h-4 w-4" />
                        </div>
                      </div>
                      
                      {/* Description on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium line-clamp-2">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-10 bg-gradient-to-r from-[#e92063] to-[#d11a57] text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                Want Your Kitchen Transformed?
              </h2>
              <p className="text-white/80 mb-4 max-w-lg mx-auto">
                Contact us today and let us help you organize your kitchen with premium Tupperware products.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 text-sm">
                <a href="tel:+918919357003" className="flex items-center gap-2 text-white/90 hover:text-white">
                  <Phone className="h-4 w-4" />
                  +91 89193 57003
                </a>
                <a href="mailto:yourmail@example.com" className="flex items-center gap-2 text-white/90 hover:text-white">
                  <Mail className="h-4 w-4" />
                  yourmail@example.com
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products">
                  <Button className="bg-white text-[#e92063] hover:bg-white/90">
                    Browse Products
                  </Button>
                </Link>
                <a href="https://wa.me/918919357003" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2">
                    <WhatsAppIcon />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0 bg-foreground border-none overflow-hidden">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          
          {/* Navigation */}
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-background/20 hover:bg-background/40 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          
          {/* Image */}
          <div className="relative">
            <img
              src={filteredImages[lightboxIndex]?.src}
              alt={filteredImages[lightboxIndex]?.label}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            
            {/* Details Panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground via-foreground/90 to-transparent p-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#e92063] text-white rounded-full mb-2">
                {filteredImages[lightboxIndex]?.label}
              </span>
              <h3 className="text-lg font-semibold text-white mb-1">
                {filteredImages[lightboxIndex]?.description}
              </h3>
              {filteredImages[lightboxIndex]?.problemSolved && (
                <p className="text-white/80 text-sm mb-1">
                  <strong>Result:</strong> {filteredImages[lightboxIndex]?.problemSolved}
                </p>
              )}
              {filteredImages[lightboxIndex]?.productsUsed && (
                <p className="text-white/70 text-sm">
                  <strong>Products:</strong> {filteredImages[lightboxIndex]?.productsUsed?.join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="bg-foreground p-4 flex gap-2 overflow-x-auto">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setLightboxIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  index === lightboxIndex ? "border-[#e92063]" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
