import { Phone, MapPin, Smartphone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "iPhones", href: "/iphones" },
    { name: "Android Mobiles", href: "/android" },
    { name: "Cases & Pouches", href: "/cases" },
    { name: "Chargers", href: "/chargers" },
    { name: "Earphones", href: "/audio" },
    { name: "Accessories", href: "/accessories" },
  ];

  return (
    <header className="bg-card shadow-elegant sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <Smartphone className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  Siva Sai Cellpoint
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Your Trusted Mobile Store</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-primary focus:bg-white focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/#arrivals"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-primary focus:bg-white focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    New Arrivals
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white hover:text-primary focus:bg-white focus:text-primary data-[state=open]:bg-white data-[state=open]:text-primary">Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/#testimonials"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-primary focus:bg-white focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Reviews
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/#contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-primary focus:bg-white focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:09110723175" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">09110 723175</span>
              </a>
              <a href="#contact" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4" />
                <span className="hidden xl:inline">Ayinamukkala, AP</span>
              </a>
            </div>
            <CartDrawer />

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#arrivals"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <div className="py-2">
                <p className="font-semibold text-foreground mb-2">Categories</p>
                <div className="pl-4 flex flex-col gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/#testimonials"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                to="/#contact"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
