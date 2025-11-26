import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

const TestimonialCard = ({ name, text, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-gold transition-all duration-300 border border-border/50 min-w-[300px] md:min-w-[350px]">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground mb-4 italic">"{text}"</p>
      <p className="font-heading font-semibold text-primary">— {name}</p>
    </div>
  );
};

export default TestimonialCard;