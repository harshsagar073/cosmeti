import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, ShoppingCart, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  colors?: string[];
}

const EnhancedProductCard = ({
  id,
  image,
  title,
  price,
  originalPrice,
  category,
  rating,
  reviewCount,
  isNew = false,
  colors = []
}: EnhancedProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0] || '');
  
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-card">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && (
              <Badge className="bg-primary text-white font-semibold text-xs px-3 py-1">
                new
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-destructive text-white font-semibold text-xs px-3 py-1">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white transition-all duration-200"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-colors duration-200",
                isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              )}
            />
          </Button>

          {/* Action Buttons - Show on Hover */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border-0 shadow-md"
            >
              <Eye className="w-4 h-4" />
            </Button>
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
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                )}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-1">
              {reviewCount} reviews
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>

          {/* Colors */}
          {colors.length > 0 && (
            <div className="flex items-center gap-2 mb-3">
              {colors.map((color) => (
                <button
                  key={color}
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-all duration-200",
                    selectedColor === color ? "border-foreground scale-110" : "border-gray-300"
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedProductCard;