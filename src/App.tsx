import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SensorDashboard from "./pages/SensorDashboard";
import DroneManufacturing from "./pages/DroneManufacturing";
import DroneServices from "./pages/DroneServices";
import ThreeDModelling from "./pages/ThreeDModelling";
import ThreeDPrinting from "./pages/ThreeDPrinting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sensor-dashboard" element={<SensorDashboard />} />
          <Route path="/drone-manufacturing" element={<DroneManufacturing />} />
          <Route path="/drone-services" element={<DroneServices />} />
          <Route path="/3d-modelling" element={<ThreeDModelling />} />
          <Route path="/3d-printing" element={<ThreeDPrinting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
