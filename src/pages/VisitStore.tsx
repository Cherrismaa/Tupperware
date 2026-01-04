import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Navigation, Gift, Star, Award } from "lucide-react";

const VisitStore = () => {
  return (
    <>
      <Helmet>
        <title>Visit Our Store | Tupperware Store Hyderabad - Location & Offers</title>
        <meta
          name="description"
          content="Visit Tupperware Store in Hyderabad for exclusive in-store offers. 15+ years serving authentic Tupperware products with expert guidance."
        />
        <meta
          name="keywords"
          content="Tupperware Store Hyderabad Location, Visit Tupperware Store, Tupperware Shop Hyderabad"
        />
        <link rel="canonical" href="https://tupperwarestore.co.in/visit-store" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="bg-secondary py-10 mb-6">
            <div className="container mx-auto px-4 text-center">
              <Award className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Visit Our Store</h1>
              <p className="text-sm md:text-base text-muted-foreground">Hyderabad's Trusted Tupperware Destination • 15+ Years of Excellence</p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            {/* Location Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    Store Location
                  </h2>

                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6230942622043!2d78.48671631487767!3d17.42528288805315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-muted-foreground">Hyderabad, Telangana 500045</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Store Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 10:00 AM - 8:00 PM
                          <br />
                          Sunday: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Contact</p>
                        <a href="tel:+918919357003" className="text-primary hover:underline">
                          +91 89193 57003
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button variant="default" size="lg" className="w-full">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <a href="tel:+918919357003">
                      <Button variant="outline" size="lg" className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {/* Exclusive Offers - Elegant Card Design */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Gift className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Exclusive In-Store Offers</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/50 rounded-lg p-3 text-center">
                        <span className="text-xl font-bold text-primary">50%</span>
                        <p className="text-xs text-muted-foreground mt-1">Off Selected Items</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3 text-center">
                        <span className="text-xl font-bold text-primary">FREE</span>
                        <p className="text-xs text-muted-foreground mt-1">Demonstrations</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3 text-center col-span-2">
                        <span className="text-sm font-semibold text-foreground">Buy ₹2500, Get ₹1000 OFF</span>
                        <p className="text-xs text-muted-foreground mt-0.5">+ Special Bundle Deals</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Visit - Clean Professional Design */}
                <Card className="bg-card border border-border">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Why Visit Our Store?</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "See and feel products before buying",
                        "Expert guidance on product selection",
                        "Exclusive in-store only deals",
                        "100% authentic Tupperware products",
                        "Free product care demonstrations",
                        "Instant product availability"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm md:text-base text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Trust Section - Refined */}
            <Card className="bg-secondary/30 border-0">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h2 className="text-xl font-semibold mb-2 text-foreground">15+ Years of Excellence</h2>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                  Serving authentic Tupperware products in Hyderabad — premium kitchenware, storage, and organizational solutions you can trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default VisitStore;
