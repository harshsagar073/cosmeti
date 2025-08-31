import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Beautiful with Cosscent
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive offers, and beauty tips from our experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-white border-0 text-foreground"
            />
            <Button variant="secondary" className="font-semibold">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Cosscent
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Premium cosmetics that enhance your natural beauty. Crafted with love and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/60 hover:text-accent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Face Makeup</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Eye Makeup</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Lip Products</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Skincare</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Tools & Brushes</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 Cosscent Cosmetics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-secondary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-accent text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;