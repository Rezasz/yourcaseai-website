import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0),rgba(24,24,27,0.9))]"></div>
      </div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(white,transparent_75%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Legal Intelligence
              </span>
              <br />
              Powered by AI
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-400 leading-relaxed">
              Transform your legal workflow with AI-powered insights, document analysis, and expert guidance available 24/7.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button 
              href="#demo" 
              primary 
              className="text-lg px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Experience AI Demo
            </Button>
            <Button 
              href="#early-access"
              className="text-lg px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border-0 backdrop-blur-sm transition-all duration-300"
            >
              Join Private Beta
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="font-bold text-2xl text-blue-400 mb-1">99%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="font-bold text-2xl text-blue-400 mb-1">24/7</div>
              <div className="text-gray-400">Instant Access</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="font-bold text-2xl text-blue-400 mb-1">50K+</div>
              <div className="text-gray-400">Legal Documents</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="font-bold text-2xl text-blue-400 mb-1">$0</div>
              <div className="text-gray-400">Starting Cost</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          onClick={scrollToNextSection}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;