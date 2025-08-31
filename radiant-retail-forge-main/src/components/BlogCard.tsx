import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, User } from "lucide-react";

interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  readTime: string;
}

const BlogCard = ({
  image,
  title,
  excerpt,
  category,
  categoryColor,
  author,
  date,
  readTime
}: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-card cursor-pointer">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <Badge 
            className={`absolute bottom-4 left-4 text-white font-semibold text-sm px-4 py-2 border-0`}
            style={{ backgroundColor: categoryColor }}
          >
            {category.toUpperCase()}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <span>{readTime} min read</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;