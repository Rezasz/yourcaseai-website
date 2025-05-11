import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-blue-600 mr-2" />
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              YourCase.ai
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              How It Works
            </a>
            <a href="#benefits" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              Benefits
            </a>
            <a href="#use-cases" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              Use Cases
            </a>
            <Button href="#early-access" primary>
              Get Early Access
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#use-cases" 
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <Button 
              href="#early-access" 
              primary 
              fullWidth
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;