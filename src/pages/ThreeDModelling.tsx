import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import { 
  Box, 
  Eye, 
  Home, 
  RotateCcw, 
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const ThreeDModelling = () => {
  const services = [
    {
      title: "CAD Design & Modeling",
      description: "Professional CAD modeling for engineering and manufacturing",
      icon: Box,
      features: [
        "Parametric modeling",
        "Assembly design",
        "Technical drawings",
        "Design optimization"
      ]
    },
    {
      title: "Product Visualization",
      description: "Photorealistic 3D visualizations for marketing and presentation",
      icon: Eye,
      features: [
        "Photorealistic rendering",
        "Marketing visuals",
        "Interactive presentations",
        "Animation sequences"
      ]
    },
    {
      title: "Architectural Modeling",
      description: "Detailed architectural 3D models and visualizations",
      icon: Home,
      features: [
        "Building information modeling",
        "Interior design",
        "Landscape modeling",
        "Virtual walkthroughs"
      ]
    },
    {
      title: "Reverse Engineering",
      description: "Convert physical objects into precise 3D digital models",
      icon: RotateCcw,
      features: [
        "3D scanning integration",
        "Legacy part recreation",
        "Design analysis",
        "Quality inspection"
      ]
    }
  ];

  const software = [
    "SolidWorks",
    "AutoCAD",
    "Fusion 360",
    "Blender",
    "3ds Max",
    "SketchUp",
    "Rhino 3D",
    "KeyShot"
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
              <Box className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">3D Modelling</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision 3D modeling and design services for engineering, architecture, and product visualization needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our 3D Modeling Services</h2>
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

      {/* Software & Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Software & Capabilities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We use industry-leading software and advanced techniques to create precise, detailed 3D models 
                that meet the highest professional standards.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {software.map((tool, index) => (
                  <div key={index} className="bg-background rounded-lg p-3 text-center text-sm font-medium">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Box className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Professional 3D Modeling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your requirements and project scope" },
              { step: "02", title: "Design", desc: "Create initial 3D models and concepts" },
              { step: "03", title: "Refinement", desc: "Iterate and refine based on your feedback" },
              { step: "04", title: "Delivery", desc: "Final models delivered in your preferred format" }
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bring Your Ideas to Life</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your concepts into detailed 3D models? Contact us to discuss your project requirements.
          </p>
          <Button variant="hero" size="lg">
            Start Project
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

export default ThreeDModelling;