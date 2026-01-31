//src\pages\Home.tsx

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { OfferProductsSection } from "@/components/OfferProductsSection";
import { PromoBanner } from "@/components/PromoBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { KitchenGallery } from "@/components/KitchenGallery";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Tupperware Store Hyderabad | Premium Kitchen Products & Amazing Offers</title>
        <meta
          name="description"
          content= "Explore premium Tupperware products including food storage, kitchenware, bottles, and lunch boxes. Fast delivery across Telangana and Pan India." />

        <meta 
          property="og:title" 
          content="Tupperware Store Hyderabad - Authentic Products at 50% Off" />
        <meta
          property="og:description"
          content="Premium Tupperware products in Hyderabad, exclusive offers, and kitchen organization support with fast delivery across Telangana and India."/>

        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tupperwarestore.co.in/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <CollectionsSection />
          <OfferProductsSection />
          
          {/* Kitchen Gallery Section */}
          <section className="bg-secondary/30 py-12">
            <KitchenGallery 
              showDetails={false}
              title="Real Customer Setups"
              subtitle="Trusted by hundreds of families across Hyderabad"
              compact
              showCustomizeMessage={true}
            />
            <div className="container mx-auto px-4 text-center mt-4">
              <Link to="/gallery">
                <Button variant="outline" className="gap-2 border-[#e92063] text-[#e92063] hover:bg-[#e92063] hover:text-white">
                  View Full Gallery
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
        <PromoBanner />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Home;