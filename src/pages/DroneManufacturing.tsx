import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import { 
  Plane, 
  Settings, 
  Shield, 
  Zap, 
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const DroneManufacturing = () => {
  const features = [
    {
      title: "Custom Design",
      description: "Tailored drone solutions for specific industry requirements",
      icon: Settings
    },
    {
      title: "Durability",
      description: "Weather-resistant construction for harsh environments",
      icon: Shield
    },
    {
      title: "Performance",
      description: "High-payload capacity and extended flight times",
      icon: Zap
    }
  ];

  const services = [
    "Custom drone design and assembly",
    "High-payload capacity models",
    "Weather-resistant construction",
    "Advanced flight control systems",
    "Multi-rotor and fixed-wing designs",
    "Industrial-grade materials",
    "GPS and autonomous navigation",
    "Real-time telemetry systems"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Drone Manufacturing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom-built drones designed for commercial and industrial applications with precision engineering and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Drones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Manufacturing Services</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in creating custom drone solutions that meet the unique demands of various industries, 
                from agriculture to surveillance and everything in between.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Plane className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Custom Drone Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Custom Drone?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us to discuss your specific requirements and get a custom quote for your drone manufacturing project.
          </p>
          <Button variant="hero" size="lg">
            Get Quote
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Trivionix. All rights reserved. | Innovating the future of technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DroneManufacturing;