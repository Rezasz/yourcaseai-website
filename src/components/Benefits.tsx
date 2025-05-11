import React from 'react';
import { Zap, Lock, DollarSign, ShieldCheck } from 'lucide-react';

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            YourCase.ai is designed to make legal support accessible, affordable, and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <BenefitCard 
            icon={<Zap size={24} />}
            title="Instant Guidance"
            description="Get immediate answers to your legal questions without waiting for appointments."
          />
          
          <BenefitCard 
            icon={<Lock size={24} />}
            title="100% Secure"
            description="Your information is encrypted and protected with industry-leading security standards."
          />
          
          <BenefitCard 
            icon={<DollarSign size={24} />}
            title="Affordable Help"
            description="Save thousands compared to traditional legal services and consultations."
          />
          
          <BenefitCard 
            icon={<ShieldCheck size={24} />}
            title="Peace of Mind"
            description="Rest easy knowing your legal matters are being handled professionally."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;