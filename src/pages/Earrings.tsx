import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import earring1 from "@/assets/earring-1.jpg";
import earring2 from "@/assets/earring-2.jpg";
import earring3 from "@/assets/earring-3.jpg";
import earring4 from "@/assets/earring-4.jpg";
import earring5 from "@/assets/earring-5.jpg";
import earring6 from "@/assets/earring-6.jpg";

const products = [
  { id: "ear-1", image: earring1, title: "Jhumka Earrings", description: "Traditional South Indian", price: 25000 },
  { id: "ear-2", image: earring2, title: "Diamond Studs", description: "18K Gold with Diamonds", price: 45000 },
  { id: "ear-3", image: earring3, title: "Temple Design Earrings", description: "Goddess Lakshmi Design", price: 32000 },
  { id: "ear-4", image: earring4, title: "Chandbali Earrings", description: "Crescent Moon Design", price: 38000 },
  { id: "ear-5", image: earring5, title: "Pearl Drop Earrings", description: "Elegant Pearl Design", price: 28000 },
  { id: "ear-6", image: earring6, title: "Antique Jhumkas", description: "Heritage Collection", price: 35000 },
];

const Earrings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gold-dark">
          Earrings Collection
        </h1>
        <p className="text-center text-muted-foreground mb-12">Beautiful gold earrings to complement your style</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Earrings;
