import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description?: string;
  price: number;
}

const ProductCard = ({ id, image, title, description, price }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id, image, title, price });
    }
    toast({
      title: "Added to cart",
      description: `${quantity} × ${title} added to your cart`,
    });
    setQuantity(1);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-all duration-500 bg-card">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        <p className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</p>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-md">
            <Button
              size="icon"
              variant="ghost"
              className="h-9 w-9"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-semibold">{quantity}</span>
            <Button
              size="icon"
              variant="ghost"
              className="h-9 w-9"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <Button 
            className="flex-1" 
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;