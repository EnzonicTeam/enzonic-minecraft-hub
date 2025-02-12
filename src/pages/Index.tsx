
import Navbar from "@/components/Navbar";
import PricingPlans from "@/components/PricingPlans";
import { ArrowRight, Server, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get your Minecraft server up and running in less than 60 seconds",
  },
  {
    icon: Server,
    title: "High Performance",
    description: "Powered by latest gen AMD processors and NVMe SSDs",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection against DDoS attacks",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Premium Minecraft
            <span className="text-primary"> Server Hosting</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Launch your Minecraft server in seconds. Enjoy high performance and unbeatable prices.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#pricing"
              className="bg-primary hover:bg-primary-hover text-dark px-8 py-3 rounded-lg font-semibold flex items-center transition-colors"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-dark-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/20 text-primary font-semibold px-4 py-2 rounded-full mb-6">
              Cheapest Hosting
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-dark/50 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <PricingPlans />

      {/* Footer */}
      <footer className="bg-dark-light border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Enzonic. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
