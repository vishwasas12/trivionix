import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import { 
  Printer, 
  Zap, 
  Wrench, 
  Layers, 
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const ThreeDPrinting = () => {
  const services = [
    {
      title: "Rapid Prototyping",
      description: "Fast and accurate prototypes for product development",
      icon: Zap,
      features: [
        "Quick turnaround times",
        "Multiple iterations",
        "Design validation",
        "Functional testing"
      ]
    },
    {
      title: "Custom Manufacturing",
      description: "Low-volume production and custom part manufacturing",
      icon: Wrench,
      features: [
        "Custom parts on demand",
        "Small batch production",
        "Complex geometries",
        "Cost-effective solutions"
      ]
    },
    {
      title: "Material Options",
      description: "Wide range of materials for different applications",
      icon: Layers,
      features: [
        "PLA, ABS, PETG",
        "Engineering plastics",
        "Flexible materials",
        "Metal printing"
      ]
    },
    {
      title: "Industrial Grade",
      description: "High-quality prints for professional applications",
      icon: Printer,
      features: [
        "Precision manufacturing",
        "Quality assurance",
        "Post-processing",
        "Surface finishing"
      ]
    }
  ];

  const materials = [
    { name: "PLA", desc: "Biodegradable, easy to print" },
    { name: "ABS", desc: "Durable, impact resistant" },
    { name: "PETG", desc: "Chemical resistant, food safe" },
    { name: "TPU", desc: "Flexible, rubber-like" },
    { name: "Nylon", desc: "Strong, wear resistant" },
    { name: "Carbon Fiber", desc: "Lightweight, strong" }
  ];

  const applications = [
    "Prototyping and product development",
    "Custom tooling and fixtures",
    "Replacement parts",
    "Educational models",
    "Architectural models",
    "Medical devices",
    "Automotive components",
    "Aerospace parts"
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
              <Printer className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">3D Printing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-quality 3D printing solutions for prototyping, manufacturing, and custom parts production.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our 3D Printing Services</h2>
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

      {/* Materials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Available Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-background rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{material.name}</h3>
                <p className="text-muted-foreground text-sm">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Applications</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our 3D printing services cater to a wide range of industries and applications, 
                from rapid prototyping to end-use parts manufacturing.
              </p>
              <div className="space-y-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Printer className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Advanced 3D Printing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "File Review", desc: "Analyze your 3D model and requirements" },
              { step: "02", title: "Material Selection", desc: "Choose the best material for your application" },
              { step: "03", title: "Printing", desc: "High-precision printing with quality control" },
              { step: "04", title: "Finishing", desc: "Post-processing and quality assurance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Print Your Ideas?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Upload your 3D model or contact us to discuss your printing requirements and get a quote.
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

export default ThreeDPrinting;