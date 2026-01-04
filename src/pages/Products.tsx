import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { allProducts, categories } from "@/data/products";
import { Helmet } from "react-helmet-async";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    // Auto-scroll to products after brief delay
    setTimeout(() => {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }, 500);
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <Helmet>
        <title>All Products | Tupperware Store Hyderabad - Food Storage & Kitchenware</title>
        <meta
          name="description"
          content="Browse our complete range of authentic Tupperware products in Hyderabad. Food storage containers, kitchenware, lunch boxes, water bottles with 50% off."
        />
        <meta
          name="keywords"
          content="Tupperware Products Hyderabad, Food Storage Containers, Kitchen Organizers, Lunch Boxes, Water Bottles, Serverware"
        />
        <link rel="canonical" href="https://tupperwarestore.co.in/products" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="bg-gradient-hero py-12 mb-8">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Products</h1>
              <p className="text-xl text-muted-foreground">Authentic Tupperware with Amazing Offers</p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">All Products ({filteredProducts.length})</h2>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
