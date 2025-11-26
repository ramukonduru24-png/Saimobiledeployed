import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import bridal1 from "@/assets/bridal-1.jpg";
import bridal2 from "@/assets/bridal-2.jpg";
import bridal3 from "@/assets/bridal-3.jpg";
import bridal4 from "@/assets/bridal-4.jpg";
import bridal5 from "@/assets/bridal-5.jpg";
import bridal6 from "@/assets/bridal-6.jpg";

const products = [
  { id: "bridal-1", image: bridal1, title: "Royal Bridal Set", description: "Complete Wedding Set", price: 450000 },
  { id: "bridal-2", image: bridal2, title: "Temple Bridal Collection", description: "South Indian Design", price: 380000 },
  { id: "bridal-3", image: bridal3, title: "Diamond Bridal Set", description: "Luxury Collection", price: 650000 },
  { id: "bridal-4", image: bridal4, title: "Traditional Bridal Set", description: "22K Gold Set", price: 420000 },
  { id: "bridal-5", image: bridal5, title: "Kundan Bridal Set", description: "Rajasthani Design", price: 520000 },
  { id: "bridal-6", image: bridal6, title: "Antique Bridal Set", description: "Heritage Collection", price: 480000 },
];

const BridalSets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gold-dark">
          Bridal Sets Collection
        </h1>
        <p className="text-center text-muted-foreground mb-12">Complete bridal jewelry sets for your special day</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BridalSets;
