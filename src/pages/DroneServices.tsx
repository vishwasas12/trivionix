import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import { 
  Camera, 
  Map, 
  Building, 
  Wheat, 
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const DroneServices = () => {
  const services = [
    {
      title: "Aerial Photography & Videography",
      description: "High-quality aerial content for marketing, events, and documentation",
      icon: Camera,
      features: [
        "4K video recording",
        "Professional photography",
        "Event coverage",
        "Real estate imagery"
      ]
    },
    {
      title: "Land Surveying & Mapping",
      description: "Precise topographical surveys and mapping services",
      icon: Map,
      features: [
        "Topographical mapping",
        "Volume calculations",
        "Progress monitoring",
        "GIS data collection"
      ]
    },
    {
      title: "Infrastructure Inspection",
      description: "Safe and efficient inspection of buildings, bridges, and towers",
      icon: Building,
      features: [
        "Bridge inspections",
        "Building surveys",
        "Power line monitoring",
        "Cell tower maintenance"
      ]
    },
    {
      title: "Agricultural Monitoring",
      description: "Crop health analysis and precision agriculture solutions",
      icon: Wheat,
      features: [
        "Crop health monitoring",
        "Pest detection",
        "Irrigation planning",
        "Yield estimation"
      ]
    }
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
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Drone Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional drone services for various industries including aerial photography, surveying, inspection, and agricultural monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Drone Services</h2>
              <div className="space-y-4">
                {[
                  "Licensed and insured operators",
                  "State-of-the-art equipment",
                  "Fast turnaround times",
                  "Competitive pricing",
                  "Detailed reporting and analysis",
                  "Safety-first approach"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Professional Drone Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Flight?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us to discuss your drone service needs and get a custom quote for your project.
          </p>
          <Button variant="hero" size="lg">
            Book Service
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

export default DroneServices;