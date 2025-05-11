import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import TrustBadges from './components/TrustBadges';
import Demo from './components/Demo';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the title
    document.title = 'YourCase.ai - AI-powered Legal Support';
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <TrustBadges />
      <UseCases />
      <Demo />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;