import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

const TestimonialCard = ({ name, text, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 border border-white/20 min-w-[300px] md:min-w-[350px] hover:-translate-y-1 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
        ))}
      </div>
      <p className="text-gray-900 mb-4 italic relative z-10">"{text}"</p>
      <p className="font-heading font-semibold text-primary relative z-10">— {name}</p>
    </div>
  );
};

export default TestimonialCard;