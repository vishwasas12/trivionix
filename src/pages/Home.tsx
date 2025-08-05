import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";
import Navbar from "@/components/ui/navbar";
import { 
  Plane, 
  Camera, 
  Box, 
  Printer, 
  Cpu, 
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Drone Manufacturing",
      description: "Custom-built drones for commercial and industrial applications",
      icon: Plane,
      features: [
        "Custom drone design and assembly",
        "High-payload capacity models",
        "Weather-resistant construction",
        "Advanced flight control systems"
      ],
      onButtonClick: () => navigate("/drone-manufacturing")
    },
    {
      title: "Drone Services",
      description: "Professional drone services for various industries",
      icon: Camera,
      features: [
        "Aerial videography and photography",
        "Land surveying and mapping",
        "Infrastructure inspection",
        "Agricultural monitoring"
      ],
      onButtonClick: () => navigate("/drone-services")
    },
    {
      title: "3D Modelling",
      description: "Precision 3D modeling and design services",
      icon: Box,
      features: [
        "CAD design and modeling",
        "Product visualization",
        "Architectural modeling",
        "Reverse engineering"
      ],
      onButtonClick: () => navigate("/3d-modelling")
    },
    {
      title: "3D Printing",
      description: "High-quality 3D printing solutions",
      icon: Printer,
      features: [
        "Rapid prototyping",
        "Custom part manufacturing",
        "Multiple material options",
        "Industrial-grade printing"
      ],
      onButtonClick: () => navigate("/3d-printing")
    },
    {
      title: "IoT Sensor Modules",
      description: "Advanced IoT sensor development and integration",
      icon: Cpu,
      features: [
        "Custom sensor development",
        "Real-time data monitoring",
        "Wireless connectivity",
        "Cloud integration"
      ],
      isSpecial: true,
      buttonText: "View Live Data",
      onButtonClick: () => navigate("/sensor-dashboard")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse">
            TRIVIONIX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Pioneering the future with cutting-edge drone technology, 3D innovation, and IoT solutions
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            Dream, Design, Deliver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="tech" size="lg" onClick={scrollToContact}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From drone manufacturing to IoT sensors, we deliver comprehensive technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Trivionix</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a cutting-edge technology company specializing in drone manufacturing, 
                3D modeling, printing, and IoT sensor development. Our mission is to push the 
                boundaries of innovation and deliver solutions that transform industries.
              </p>
              <div className="space-y-4">
                {[
                  "Industry-leading drone technology",
                  "Advanced 3D modeling capabilities",
                  "State-of-the-art IoT solutions",
                  "Custom manufacturing services"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Box className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Innovation in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to innovate with us? Let's discuss your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">vishwas12vs@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 8431129973</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">NITK Surathkal, Mangalore, Karnataka, 575025</p>
            </div>
          </div>
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

export default Home;