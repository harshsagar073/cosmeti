import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface CategoryShowcaseProps {
  title: string;
  description: string;
  products: Product[];
  bgColor: string;
  textColor: string;
}

const CategoryShowcase = ({ 
  title, 
  description, 
  products, 
  bgColor, 
  textColor 
}: CategoryShowcaseProps) => {
  return (
    <section className={cn("py-20 px-4 sm:px-6 lg:px-8", bgColor)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", textColor)}>
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-primary text-white font-semibold text-xs px-3 py-1">
                        new
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-category-skin text-white font-semibold text-xs px-3 py-1">
                        bestseller
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="bg-destructive text-white font-semibold text-xs px-3 py-1">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white transition-all duration-200"
                  >
                    <Heart className="w-4 h-4 text-gray-600" />
                  </Button>

                  {/* Action Buttons - Show on Hover */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      className="px-6 h-10 rounded-full bg-primary text-white hover:bg-primary/90 shadow-md font-medium"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      ADD TO CART
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-3 h-3",
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
                    {product.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 font-semibold"
          >
            View All {title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;