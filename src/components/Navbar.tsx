
import { ExternalLink } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-dark-light/80 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            Enzonic
          </a>
          <div className="flex items-center space-x-8">
            <a 
              href="https://panel.enzonic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-primary transition-colors"
            >
              Panel <ExternalLink className="ml-1 w-4 h-4" />
            </a>
            <a 
              href="https://billing.enzonic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-primary transition-colors"
            >
              Billing <ExternalLink className="ml-1 w-4 h-4" />
            </a>
            <button className="bg-primary hover:bg-primary-hover text-dark font-semibold px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
