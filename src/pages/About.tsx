//src\pages\About.tsx

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { KitchenGallery, sampleGalleryImages } from "@/components/KitchenGallery";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Award, Users, Clock, Sparkles, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);

const About = () => {
  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "We understand your kitchen needs and storage challenges",
    },
    {
      step: "2",
      title: "Product Selection",
      description: "We recommend the perfect Tupperware products for your space",
    },
    {
      step: "3",
      title: "Setup & Organization",
      description: "Our team helps organize your kitchen with your new products",
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "We're always here to help with replacements and new additions",
    },
  ];

  const benefits = [
    "Premium quality Tupperware products",
    "15+ years of trusted service in Hyderabad",
    "Expert kitchen organization advice",
    "Reliable products backed by warranty support",
    "Affordable pricing with great discounts",
    "Free delivery on orders above ₹3500",
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Tupperware Hyderabad - 15+ Years of Trusted Service</title>
        <meta
          name="description"
          content="Learn about our 15+ years of experience in kitchen organization and premium Tupperware solutions. Discover how we help families create well-organized kitchens."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-1 text-xs font-semibold bg-[#e92063]/10 text-[#e92063] rounded-full mb-4">
                  About Us
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Transforming Kitchens Across Hyderabad
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For over 15 years, we've been helping families organize their kitchens with thoughtfully chosen Tupperware solutions. 
                  Our mission is to make every kitchen neat, organized, and a joy to work in.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-10 border-b">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4">
                  <div className="flex justify-center mb-2">
                    <Clock className="h-8 w-8 text-[#e92063]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-[#e92063]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-2">
                    <Sparkles className="h-8 w-8 text-[#e92063]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Kitchen Setups</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-[#e92063]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Authentic Products</div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  How We Help You Organize
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our process is simple and customer-focused. We work with you to understand your needs and deliver the perfect organization solution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <div className="premium-card p-6 text-center h-full">
                      <div className="w-12 h-12 bg-[#e92063] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Section with Full Details */}
          <section className="py-12 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Real Customer Transformations
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See the before and after results from our satisfied customers. Each transformation shows the Tupperware products used and the problems we solved.
                </p>
              </div>
            </div>
            
            <KitchenGallery 
              images={sampleGalleryImages} 
              showDetails={true}
              title=""
              subtitle=""
              showCustomizeMessage={true}
            />
          </section>

          {/* What Customers Receive */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Why Choose Tupperware Hyderabad?
                  </h2>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#e92063] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link to="/products">
                      <Button size="lg" className="bg-[#e92063] hover:bg-[#d11a57] text-white">
                        Browse Products
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="border-[#e92063] text-[#e92063] hover:bg-[#e92063] hover:text-white">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="premium-card p-6 bg-gradient-hero">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#e92063]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-10 w-10 text-[#e92063]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        100% Authentic Guarantee
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Every product we sell is 100% genuine Tupperware with full warranty and support.
                      </p>
                      <div className="text-3xl font-bold text-[#e92063]">
                        15+ Years
                      </div>
                      <div className="text-sm text-muted-foreground">
                        of trusted service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 bg-gradient-to-r from-[#e92063] to-[#d11a57] text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Kitchen?
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Contact us today for a free consultation. We'll help you choose the perfect Tupperware products for your home.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 text-sm">
                <a href="tel:+918919357003" className="flex items-center gap-2 text-white/90 hover:text-white">
                  <Phone className="h-4 w-4" />
                  +91 89193 57003
                </a>
                <a href="mailto:contacttupperwarehyd@gmail.com" className="flex items-center gap-2 text-white/90 hover:text-white">
                  <Mail className="h-4 w-4" />
                  contacttupperwarehyd@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/918919357003" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2">
                    <WhatsAppIcon />
                    Chat on WhatsApp
                  </Button>
                </a>
                <Link to="/visit-store">
                  <Button size="lg" className="bg-[#e92063] hover:bg-[#d11a57] text-white border-2 border-white/30">
                    Visit Our Store
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default About;
