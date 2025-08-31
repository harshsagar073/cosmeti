import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  bgColorClass: string;
  isNew?: boolean;
  isSale?: boolean;
}

const CategoryCard = ({ 
  title, 
  icon, 
  colorClass, 
  bgColorClass, 
  isNew = false, 
  isSale = false 
}: CategoryCardProps) => {
  return (
    <div className={cn(
      "relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group",
      bgColorClass
    )}>
      {/* Badge */}
      {(isNew || isSale) && (
        <Badge 
          className={cn(
            "absolute -top-2 -right-2 px-3 py-1 text-xs font-semibold text-white border-0 z-10",
            isNew ? "bg-primary" : "bg-category-lips"
          )}
        >
          {isNew ? "new" : "sale"}
        </Badge>
      )}
      
      {/* Icon */}
      <div className={cn(
        "w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
        colorClass
      )}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;