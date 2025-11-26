import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Necklaces from "./pages/Necklaces";
import Earrings from "./pages/Earrings";
import Bangles from "./pages/Bangles";
import Rings from "./pages/Rings";
import BridalSets from "./pages/BridalSets";
import Chains from "./pages/Chains";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/necklaces" element={<Necklaces />} />
            <Route path="/earrings" element={<Earrings />} />
            <Route path="/bangles" element={<Bangles />} />
            <Route path="/rings" element={<Rings />} />
            <Route path="/bridal-sets" element={<BridalSets />} />
            <Route path="/chains" element={<Chains />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
