// src/pages/NotFound.tsx

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: Page not found →", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Tupperware Store Hyderabad</title>
        <meta
          name="description"
          content="The page you’re looking for doesn’t exist. Explore our products, offers, and kitchen solutions from the homepage."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow flex items-center justify-center bg-secondary/30 px-4">
          <div className="max-w-md text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>

            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Page not found
            </h2>

            <p className="text-muted-foreground mb-6">
              The page you’re trying to reach doesn’t exist or may have been moved.
              You can continue browsing from the homepage.
            </p>

            <Link to="/">
              <Button className="bg-[#e92063] hover:bg-[#d11a57] text-white">
                Return to Home
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
