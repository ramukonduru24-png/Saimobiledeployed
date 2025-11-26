import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import TechShowcaseCarousel from "@/components/TempleCarousel";
import TestimonialCard from "@/components/TestimonialCard";
import ContactSection from "@/components/ContactSection";

import arrival1 from "@/assets/arrival-1.jpg";
import arrival2 from "@/assets/arrival-2.jpg";
import arrival3 from "@/assets/arrival-3.jpg";
import arrival4 from "@/assets/arrival-4.jpg";
import arrival5 from "@/assets/arrival-5.jpg";
import arrival6 from "@/assets/arrival-6.jpg";
import arrival7 from "@/assets/arrival-7.jpg";
import arrival8 from "@/assets/arrival-8.jpg";

import catIphones from "@/assets/cat-necklaces.jpg";
import catAndroid from "@/assets/cat-earrings.jpg";
import catPouches from "@/assets/cat-bangles.jpg";
import catChargers from "@/assets/cat-rings.jpg";
import catEarphones from "@/assets/cat-bridal.jpg";
import catAccessories from "@/assets/cat-chains.jpg";

import trendFlagship from "@/assets/trend-classic.jpg";
import trendBudget from "@/assets/trend-steel.jpg";
import trendFoldable from "@/assets/trend-emerald.jpg";
import trendEarbuds from "@/assets/trend-demi.jpg";
import trendWatches from "@/assets/trend-choker.jpg";
import trendPowerbanks from "@/assets/trend-temple.jpg";



import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  const arrivals = [
    { id: "arr1", image: arrival1, title: "iPhone 15 Pro Max", description: "Space Black, 256GB", price: 134900 },
    { id: "arr2", image: arrival2, title: "iPhone 15 Pro", description: "Blue Titanium, 128GB", price: 119900 },
    { id: "arr3", image: arrival3, title: "iPhone 15", description: "Pink, 128GB", price: 79900 },
    { id: "arr4", image: arrival4, title: "iPhone 14 Pro", description: "Deep Purple, 128GB", price: 99900 },
    { id: "arr5", image: arrival5, title: "Samsung Galaxy S24 Ultra", description: "Titanium Gray, 256GB", price: 129999 },
    { id: "arr6", image: arrival6, title: "Google Pixel 8 Pro", description: "Obsidian, 128GB", price: 106999 },
    { id: "arr7", image: arrival7, title: "OnePlus 12", description: "Silky Black, 256GB", price: 64999 },
    { id: "arr8", image: arrival8, title: "Xiaomi 14", description: "Jade Green, 256GB", price: 59999 },
  ];

  const categories = [
    { image: catIphones, title: "iPhones", href: "/iphones" },
    { image: catAndroid, title: "Android Mobiles", href: "/android" },
    { image: catPouches, title: "Cases & Pouches", href: "/cases" },
    { image: catChargers, title: "Chargers", href: "/chargers" },
    { image: catEarphones, title: "Earphones", href: "/audio" },
    { image: catAccessories, title: "Accessories", href: "/accessories" },
  ];

  const trends = [
    { image: trendFlagship, title: "Flagship 2024", href: "/iphones" },
    { image: trendBudget, title: "Budget Phones", href: "/android" },
    { image: trendFoldable, title: "Foldable Phones", href: "/android" },
    { image: trendEarbuds, title: "Wireless Earbuds", href: "/audio" },
    { image: trendWatches, title: "Smartwatches", href: "/accessories" },
    { image: trendPowerbanks, title: "Power Banks", href: "/chargers" },
  ];

  const testimonials = [
    { name: "Priya Sharma", text: "Amazing service! Got my iPhone screen fixed in just 30 minutes." },
    { name: "Rajesh Kumar", text: "Best mobile shop in Kakinada. Great prices and genuine products!" },
    { name: "Anitha Reddy", text: "Bought my Samsung Galaxy here. Excellent after-sales support." },
    { name: "Venkat Rao", text: "Quick battery replacement for my phone. Very professional team!" },
    { name: "Lakshmi Devi", text: "Wide range of accessories at affordable prices. Love it!" },
    { name: "Suresh Babu", text: "Trusted store for all mobile needs. Never disappoints." },
    { name: "Kavitha M", text: "Got genuine AirPods at the best price. Highly recommended!" },
    { name: "Ramesh N", text: "Expert technicians fixed my water-damaged phone. Thank you!" },
    { name: "Sneha P", text: "The staff is very knowledgeable and helpful with recommendations." },
    { name: "Arun K", text: "Fast delivery and genuine products. My go-to mobile store!" },
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroCarousel />

        {/* New Arrivals */}
        <section id="arrivals" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">New Arrivals</h2>
              <p className="text-lg text-muted-foreground">Discover the latest smartphones and gadgets</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {arrivals.map((item, i) => (
                <ProductCard key={i} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Shop by Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, i) => (
                <CategoryCard key={i} {...cat} />
              ))}
            </div>
          </div>
        </section>

        <TechShowcaseCarousel />

        {/* Trends */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Shop by Device Type</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {trends.map((trend, i) => (
                <CategoryCard key={i} {...trend} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-secondary/10 overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center">What Our Customers Say</h2>
          </div>
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </section>

        <ContactSection />

        {/* Footer */}
        <footer className="bg-card py-8 border-t border-border/50">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© 2025 Siva Sai Cellpoint - Your Trusted Mobile Store. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
