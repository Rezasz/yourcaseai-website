import React from 'react';
import { MessageSquare, Brain, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

type StepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  delay: number;
};

const Step: React.FC<StepProps> = ({ icon, title, description, number, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        <div className="relative">
          <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400">
            {icon}
          </div>
          <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">
            {number}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0),rgba(24,24,27,0.9))]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            How YourCase.ai Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the future of legal assistance with our AI-powered platform that simplifies complex legal processes in three simple steps.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Step 
            icon={<MessageSquare size={32} />}
            title="Ask Your Question"
            description="Simply describe your legal situation or upload relevant documents for analysis."
            number={1}
            delay={0.2}
          />
          
          <Step 
            icon={<Brain size={32} />}
            title="AI Analysis"
            description="Our advanced AI processes your case, providing tailored guidance and document drafts."
            number={2}
            delay={0.4}
          />
          
          <Step 
            icon={<Clock size={32} />}
            title="Instant Results"
            description="Receive immediate, actionable insights or connect with a specialist for complex cases."
            number={3}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;