import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import bangle1 from "@/assets/bangle-1.jpg";
import bangle2 from "@/assets/bangle-2.jpg";
import bangle3 from "@/assets/bangle-3.jpg";
import bangle4 from "@/assets/bangle-4.jpg";
import bangle5 from "@/assets/bangle-5.jpg";
import bangle6 from "@/assets/bangle-6.jpg";

const products = [
  { id: "ban-1", image: bangle1, title: "Traditional Gold Bangles", description: "22K Gold Set of 4", price: 120000 },
  { id: "ban-2", image: bangle2, title: "Diamond Bangles", description: "18K Gold with Diamonds", price: 180000 },
  { id: "ban-3", image: bangle3, title: "Temple Design Bangles", description: "South Indian Design", price: 95000 },
  { id: "ban-4", image: bangle4, title: "Kada Bangles", description: "Broad Design Set", price: 110000 },
  { id: "ban-5", image: bangle5, title: "Stone Studded Bangles", description: "Colorful Stones", price: 85000 },
  { id: "ban-6", image: bangle6, title: "Antique Finish Bangles", description: "Heritage Collection", price: 98000 },
];

const Bangles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gold-dark">
          Bangles Collection
        </h1>
        <p className="text-center text-muted-foreground mb-12">Stunning gold bangles for every celebration</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Bangles;
