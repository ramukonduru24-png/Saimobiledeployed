import { useState, useEffect } from "react";
import temple1 from "@/assets/temple-1.jpg";
import temple2 from "@/assets/temple-2.jpg";

const slides = [
  {
    image: temple1,
    quote: "Experience the latest in mobile technology",
  },
  {
    image: temple2,
    quote: "Professional repairs by certified technicians",
  },
];

const TechShowcaseCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Premium Tech & Repair Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-elegant">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt="Tech Showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl px-6 text-center">
                  <p className="text-2xl md:text-4xl font-heading italic text-white drop-shadow-lg animate-fade-in">
                    "{slide.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-12 bg-primary" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcaseCarousel;
