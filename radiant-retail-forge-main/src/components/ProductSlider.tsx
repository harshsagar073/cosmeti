import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EnhancedProductCard from "./EnhancedProductCard";
import Autoplay from "embla-carousel-autoplay";

interface Product {
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

interface ProductSliderProps {
  products: Product[];
  title?: string;
  autoplay?: boolean;
}

const ProductSlider = ({ products, title, autoplay = false }: ProductSliderProps) => {
  const plugins = autoplay ? [Autoplay({ delay: 3000 })] : [];

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          {title}
        </h2>
      )}
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={plugins}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <EnhancedProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </div>
  );
};

export default ProductSlider;