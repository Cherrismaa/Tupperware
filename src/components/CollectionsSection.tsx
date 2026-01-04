import { categories } from "@/data/products";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

export const CollectionsSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Explore Our Collections</h2>
        <p className="text-muted-foreground">Discover our premium range of authentic Tupperware products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link key={category.id} to={`/products?category=${category.slug}`} className="group">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-3">
                <div className="aspect-square bg-secondary rounded-lg mb-3 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
