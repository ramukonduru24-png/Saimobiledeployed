import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ring1 from "@/assets/ring-1.jpg";
import ring2 from "@/assets/ring-2.jpg";
import ring3 from "@/assets/ring-3.jpg";
import ring4 from "@/assets/ring-4.jpg";
import ring5 from "@/assets/ring-5.jpg";
import ring6 from "@/assets/ring-6.jpg";

const products = [
  { id: "ring-1", image: ring1, title: "Diamond Solitaire Ring", description: "18K Gold with Solitaire", price: 65000 },
  { id: "ring-2", image: ring2, title: "Traditional Gold Ring", description: "22K Gold Band", price: 35000 },
  { id: "ring-3", image: ring3, title: "Engagement Ring", description: "Diamond Cluster Design", price: 85000 },
  { id: "ring-4", image: ring4, title: "Temple Design Ring", description: "South Indian Pattern", price: 42000 },
  { id: "ring-5", image: ring5, title: "Stone Studded Ring", description: "Ruby and Emerald", price: 55000 },
  { id: "ring-6", image: ring6, title: "Antique Ring", description: "Heritage Collection", price: 48000 },
];

const Rings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gold-dark">
          Rings Collection
        </h1>
        <p className="text-center text-muted-foreground mb-12">Elegant gold rings for every finger</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Rings;
