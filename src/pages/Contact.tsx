import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Scroll to show contact information
    setTimeout(() => {
      window.scrollTo({ top: 150, behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Tupperware Store Hyderabad - Get in Touch</title>
        <meta
          name="description"
          content="Contact Tupperware Store Hyderabad. Call us, WhatsApp, or visit our store for authentic Tupperware products with amazing offers."
        />
        <meta name="keywords" content="Tupperware Contact Hyderabad, Tupperware Store Location, Contact Tupperware" />
        <link rel="canonical" href="https://tupperwarestore.co.in/contact" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="bg-gradient-hero py-12 mb-8">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground">We're here to help you find the perfect products</p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+918919357003" className="text-muted-foreground hover:text-primary">
                          +91 89193 57003
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a
                          href="https://wa.me/918919357003"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          Chat with us on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">Hyderabad, Telangana 500045</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Store Hours</h3>
                        <p className="text-muted-foreground">
                          Mon - Sat: 10:00 AM - 8:00 PM
                          <br />
                          Sunday: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a href="https://wa.me/918919357003" target="_blank" rel="noopener noreferrer">
                      <Button variant="offer" size="lg" className="w-full">
                        Contact via WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
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
                  <p className="text-muted-foreground mb-4">
                    Visit us in person to explore our complete range of authentic Tupperware products and get expert
                    advice from our team.
                  </p>
                  <Button variant="default" size="lg" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className=" bg-pink bg-gradient-offer text-accent-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="black text-3xl font-bold mb-4">🎉 Special In-Store Offers!</h2>
                <p className="text-lg mb-6">Visit our store for exclusive deals and personalized product recommendations</p>
                <a href="/visit-store">
                  <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Learn More About Our Store
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
