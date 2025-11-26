import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import chain1 from "@/assets/chain-1.jpg";
import chain2 from "@/assets/chain-2.jpg";
import chain3 from "@/assets/chain-3.jpg";
import chain4 from "@/assets/chain-4.jpg";
import chain5 from "@/assets/chain-5.jpg";
import chain6 from "@/assets/chain-6.jpg";

const products = [
  { id: "chain-1", image: chain1, title: "Classic Gold Chain", description: "22K Gold 24 inches", price: 55000 },
  { id: "chain-2", image: chain2, title: "Fancy Link Chain", description: "Designer Pattern", price: 68000 },
  { id: "chain-3", image: chain3, title: "Thick Gold Chain", description: "Bold Statement Piece", price: 95000 },
  { id: "chain-4", image: chain4, title: "Delicate Chain", description: "Elegant Thin Design", price: 42000 },
  { id: "chain-5", image: chain5, title: "Rope Design Chain", description: "Traditional Rope Pattern", price: 72000 },
  { id: "chain-6", image: chain6, title: "Box Chain", description: "Modern Design", price: 58000 },
];

const Chains = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-gold-dark">
          Chains Collection
        </h1>
        <p className="text-center text-muted-foreground mb-12">Premium gold chains for men and women</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Chains;
