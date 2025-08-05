import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  onButtonClick?: () => void;
  buttonText?: string;
  isSpecial?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  onButtonClick, 
  buttonText = "Learn More",
  isSpecial = false 
}: ServiceCardProps) => {
  return (
    <Card className={`group hover:shadow-card hover:scale-105 transition-all duration-300 ${isSpecial ? 'border-primary shadow-glow' : ''}`}>
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant={isSpecial ? "hero" : "tech"} 
          className="w-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;