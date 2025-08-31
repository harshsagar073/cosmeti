import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  category: string;
}

const ProductCard = ({ image, title, price, originalPrice, category }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button size="sm" variant="secondary" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-gradient-primary text-white rounded-full hover:shadow-glow transition-all duration-300">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;