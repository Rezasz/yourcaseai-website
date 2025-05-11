import React from 'react';
import { Scale } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Scale className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-white font-bold text-xl">YourCase.ai</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="hover:text-white transition-colors">
              Benefits
            </a>
            <a href="#use-cases" className="hover:text-white transition-colors">
              Use Cases
            </a>
            <a href="#early-access" className="hover:text-white transition-colors">
              Early Access
            </a>
          </nav>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} YourCase.ai. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <p className="text-center text-xs mt-6 text-gray-600">
          YourCase.ai provides information and self-help services, not legal advice.
          YourCase.ai is not a law firm and is not a substitute for an attorney's advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;