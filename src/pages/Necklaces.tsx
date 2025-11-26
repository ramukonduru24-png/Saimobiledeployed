import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import necklace1 from "@/assets/necklace-1.jpg";
import necklace2 from "@/assets/necklace-2.jpg";
import necklace3 from "@/assets/necklace-3.jpg";
import necklace4 from "@/assets/necklace-4.jpg";
import necklace5 from "@/assets/necklace-5.jpg";
import necklace6 from "@/assets/necklace-6.jpg";

const products = [
  { id: "neck-1", image: necklace1, title: "Traditional Gold Necklace", description: "22K Pure Gold", price: 85000 },
  { id: "neck-2", image: necklace2, title: "Diamond Studded Necklace", description: "18K Gold with Diamonds", price: 125000 },
  { id: "neck-3", image: necklace3, title: "Temple Design Necklace", description: "Traditional South Indian", price: 95000 },
  { id: "neck-4", image: necklace4, title: "Kundan Necklace Set", description: "Royal Rajasthani Design", price: 110000 },
  { id: "neck-5", image: necklace5, title: "Pearl Gold Necklace", description: "Elegant Pearl Design", price: 75000 },
  { id: "neck-6", image: necklace6, title: "Antique Finish Necklace", description: "Heritage Collection", price: 98000 },
];

const Necklaces = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gold-dark">
          Necklaces Collection
        </h1>
        <p className="text-center text-muted-foreground mb-12">Exquisite gold necklaces for every occasion</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Necklaces;
