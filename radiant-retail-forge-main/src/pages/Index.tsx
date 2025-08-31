import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Truck, Heart, Palette, Leaf, User, Zap, Gift, Users } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ProductSlider from "@/components/ProductSlider";
import BlogCard from "@/components/BlogCard";
import CategoryShowcase from "@/components/CategoryShowcase";

import tropicalImage from "@/assets/tropical-cosmetics.jpg";
import purpleSerumImage from "@/assets/purple-serum.jpg";
import orangeCreamImage from "@/assets/orange-cream.jpg";
import redLipstickImage from "@/assets/red-lipstick.jpg";
import blogMakeupImage from "@/assets/blog-makeup.jpg";
import blogSkincareImage from "@/assets/blog-skincare.jpg";
import blogPerfumeImage from "@/assets/blog-perfume.jpg";

// Hair Care Images
import hairCare1 from "@/assets/hair-care-1.jpg";
import hairCare2 from "@/assets/hair-care-2.jpg";
import hairCare3 from "@/assets/hair-care-3.jpg";

// Skincare Images
import skincare1 from "@/assets/skincare-1.jpg";
import skincare2 from "@/assets/skincare-2.jpg";
import skincare3 from "@/assets/skincare-3.jpg";

// Lipstick Images
import lipstick1 from "@/assets/lipstick-1.jpg";
import lipstick2 from "@/assets/lipstick-2.jpg";
import lipstick3 from "@/assets/lipstick-3.jpg";

const Index = () => {
  const categories = [
    {
      title: "Hair care",
      icon: <Heart className="w-8 h-8 text-white" />,
      colorClass: "bg-category-hair",
      bgColorClass: "bg-category-hair-bg",
      isNew: true,
    },
    {
      title: "Skin care",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      colorClass: "bg-category-skin",
      bgColorClass: "bg-category-skin-bg",
    },
    {
      title: "Lip stick",
      icon: <Palette className="w-8 h-8 text-white" />,
      colorClass: "bg-category-lips",
      bgColorClass: "bg-category-lips-bg",
    },
    {
      title: "Face skin",
      icon: <User className="w-8 h-8 text-white" />,
      colorClass: "bg-category-face",
      bgColorClass: "bg-category-face-bg",
      isSale: true,
    },
    {
      title: "Blusher",
      icon: <Zap className="w-8 h-8 text-white" />,
      colorClass: "bg-category-blusher",
      bgColorClass: "bg-category-blusher-bg",
    },
    {
      title: "Natural",
      icon: <Leaf className="w-8 h-8 text-white" />,
      colorClass: "bg-category-natural",
      bgColorClass: "bg-category-natural-bg",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      image: purpleSerumImage,
      title: "Readable content DX22",
      price: 212.00,
      originalPrice: 250.00,
      category: "Serum",
      rating: 4.5,
      reviewCount: 150,
      isNew: true,
      colors: ["#8B5CF6", "#EC4899", "#F59E0B"]
    },
    {
      id: "2",
      image: orangeCreamImage,
      title: "Modern Eye Brush",
      price: 210.00,
      category: "Tools",
      rating: 4.8,
      reviewCount: 150,
      isNew: true,
      colors: ["#F97316", "#EF4444"]
    },
    {
      id: "3",
      image: redLipstickImage,
      title: "Voyage face cleaner",
      price: 200.00,
      category: "Cleanser",
      rating: 4.6,
      reviewCount: 150,
      isNew: true,
      colors: ["#DC2626", "#7C2D12"]
    },
    {
      id: "4",
      image: purpleSerumImage,
      title: "Hydrating Night Serum",
      price: 189.00,
      originalPrice: 220.00,
      category: "Serum",
      rating: 4.7,
      reviewCount: 203,
      colors: ["#8B5CF6", "#A855F7"]
    },
  ];

  // Hair Care Products
  const hairCareProducts = [
    {
      id: "h1",
      image: hairCare1,
      title: "Luxury Hair Care Collection",
      price: 89.99,
      originalPrice: 120.00,
      rating: 4.8,
      reviewCount: 324,
      isNew: true
    },
    {
      id: "h2",
      image: hairCare2,
      title: "Nourishing Hair Oil Treatment",
      price: 45.99,
      rating: 4.9,
      reviewCount: 198,
      isBestseller: true
    },
    {
      id: "h3",
      image: hairCare3,
      title: "Deep Repair Hair Mask",
      price: 35.99,
      originalPrice: 49.99,
      rating: 4.7,
      reviewCount: 256
    }
  ];

  // Skincare Products
  const skincareProducts = [
    {
      id: "s1",
      image: skincare1,
      title: "Complete Skincare Routine Set",
      price: 125.99,
      originalPrice: 165.00,
      rating: 4.9,
      reviewCount: 425,
      isBestseller: true
    },
    {
      id: "s2",
      image: skincare2,
      title: "Vitamin C Brightening Serum",
      price: 52.99,
      rating: 4.8,
      reviewCount: 312,
      isNew: true
    },
    {
      id: "s3",
      image: skincare3,
      title: "Hydrating Face Cream",
      price: 42.99,
      originalPrice: 58.00,
      rating: 4.6,
      reviewCount: 189
    }
  ];

  // Lipstick Products
  const lipstickProducts = [
    {
      id: "l1",
      image: lipstick1,
      title: "Signature Lipstick Collection",
      price: 68.99,
      originalPrice: 85.00,
      rating: 4.9,
      reviewCount: 567,
      isBestseller: true
    },
    {
      id: "l2",
      image: lipstick2,
      title: "Matte Liquid Lipstick",
      price: 24.99,
      rating: 4.7,
      reviewCount: 234,
      isNew: true
    },
    {
      id: "l3",
      image: lipstick3,
      title: "Glossy Lip Collection",
      price: 32.99,
      originalPrice: 42.00,
      rating: 4.8,
      reviewCount: 298
    }
  ];

  const blogPosts = [
    {
      id: "1",
      image: blogMakeupImage,
      title: "10 Essential Makeup Tips for Beginners",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      category: "Beauty",
      categoryColor: "#EC4899",
      author: "Sarah Johnson",
      date: "Mar 15, 2024",
      readTime: "5"
    },
    {
      id: "2",
      image: blogSkincareImage,
      title: "Natural Skincare Routine for Glowing Skin",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      category: "Beauty",
      categoryColor: "#8B5CF6",
      author: "Emma Wilson",
      date: "Mar 12, 2024",
      readTime: "7"
    },
    {
      id: "3",
      image: blogPerfumeImage,
      title: "Choosing the Perfect Fragrance for Every Season",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      category: "Beauty",
      categoryColor: "#06B6D4",
      author: "Lisa Chen",
      date: "Mar 10, 2024",
      readTime: "6"
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Luxurious formulations with the finest ingredients"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cruelty-Free",
      description: "Ethically made products, never tested on animals"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "Complimentary shipping on orders over $50"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tropicalImage})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-20 left-8 text-white z-10">
          <span className="text-2xl font-light">01 / 02</span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Button 
            variant="outline"
            className="mb-8 border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-300"
          >
            BUY NOW
          </Button>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            ut aliquam, purus sit amet luctus venenatis
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              ut aliquam, purus sit amet luctus venenatis
            </p>
          </div>
          
          <ProductSlider products={featuredProducts} autoplay={true} />
        </div>
      </section>

      {/* Hair Care Showcase */}
      <CategoryShowcase
        title="Hair Care Collection"
        description="Nourish and transform your hair with our premium hair care essentials"
        products={hairCareProducts}
        bgColor="bg-category-hair-bg/30"
        textColor="text-category-hair"
      />

      {/* Skincare Showcase */}
      <CategoryShowcase
        title="Skincare Essentials"
        description="Achieve radiant, healthy skin with our scientifically formulated skincare range"
        products={skincareProducts}
        bgColor="bg-category-skin-bg/30"
        textColor="text-category-skin"
      />

      {/* Lipstick Showcase */}
      <CategoryShowcase
        title="Lipstick Collection"
        description="Express yourself with our vibrant and long-lasting lip colors"
        products={lipstickProducts}
        bgColor="bg-category-lips-bg/30"
        textColor="text-category-lips"
      />

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Blog Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              ut aliquam, purus sit amet luctus venenatis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose BRANCY?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
