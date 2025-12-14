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
          <div className="bg-gradient-primary text-primary-foreground py-16 mb-8">
            <div className="container mx-auto px-4 text-center">
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Store</h1>
              <p className="text-xl mb-2">Hyderabad's Trusted Tupperware Destination</p>
              <p className="text-lg opacity-90">Serving premium quality products for over 15 years</p>
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
                        <p className="text-muted-foreground">123 Main Street, Hyderabad, Telangana 500001</p>
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
                        <a href="tel:+919876543210" className="text-primary hover:underline">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button variant="default" size="lg" className="w-full">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <a href="tel:+919876543210">
                      <Button variant="outline" size="lg" className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-gradient-offer text-accent-foreground">
                  <CardContent className="p-6">
                    <Gift className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Exclusive In-Store Offers!</h3>
                    <ul className="space-y-2 text-lg">
                      <li>✨ 50% Off on Selected Items</li>
                      <li>🎁 Buy ₹2500, Get ₹1000 OFF</li>
                      <li>🌟 Free Product Demonstrations</li>
                      <li>💝 Special Bundle Deals</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Star className="h-6 w-6 text-gold" />
                      Why Visit Our Store?
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>See and feel products before buying</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Expert guidance on product selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Exclusive in-store only deals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>100% authentic Tupperware products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Free product care demonstrations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Instant product availability</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Trust Section */}
            <Card className="bg-secondary/50">
              <CardContent className="p-8 text-center">
                <Award className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold mb-4">15+ Years of Excellence</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We've been serving authentic Tupperware products in Hyderabad for over 15 years — premium kitchenware,
                  storage, and organizational solutions you can trust. Visit us today and experience the difference!
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
