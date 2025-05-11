import React, { useState } from 'react';
import { FileText, Home, Mail, AlertTriangle } from 'lucide-react';
import Button from './Button';

type UseCaseProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  active: boolean;
  onClick: () => void;
};

const UseCase: React.FC<UseCaseProps> = ({ 
  icon, 
  title, 
  description,
  example,
  active,
  onClick
}) => {
  return (
    <div 
      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
        active 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-white hover:bg-blue-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start mb-3">
        <div className={`mr-4 ${active ? 'text-white' : 'text-blue-600'}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className={active ? 'text-blue-100' : 'text-gray-600'}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  
  const cases = [
    {
      icon: <FileText size={24} />,
      title: "Document Review",
      description: "I need to write a complaint letter",
      example: "\"I need to write a complaint to my internet service provider about billing errors and poor service.\""
    },
    {
      icon: <Home size={24} />,
      title: "Tenant Rights",
      description: "I want to understand my tenant rights",
      example: "\"My landlord is refusing to fix my heating. What are my rights as a tenant in Massachusetts?\""
    },
    {
      icon: <Mail size={24} />,
      title: "Legal Correspondence",
      description: "I need to respond to an official letter",
      example: "\"I received a cease and desist letter regarding my small business name. How should I respond?\""
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Legal Notice",
      description: "I received a legal notice — what now?",
      example: "\"I received a notice of eviction even though I've paid my rent. What are my next steps?\""
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can YourCase.ai Help You?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our AI assistant can help with common legal situations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cases.map((useCase, index) => (
              <UseCase
                key={index}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                example={useCase.example}
                active={activeCase === index}
                onClick={() => setActiveCase(index)}
              />
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Assistant Demo</h3>
            <div className="bg-gray-100 rounded-lg p-4 mb-6 min-h-[200px]">
              <p className="text-gray-800 font-medium mb-3">User Query:</p>
              <p className="bg-blue-100 text-blue-800 p-3 rounded-md">
                {cases[activeCase].example}
              </p>
              
              <p className="text-gray-800 font-medium mt-6 mb-3">YourCase.ai:</p>
              <div className="bg-white text-gray-800 p-3 rounded-md shadow-sm">
                <p className="mb-2">I can help you with that. Here's what I need to know:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-600">
                  <li>More specific details about your situation</li>
                  <li>Your location (as laws vary by jurisdiction)</li>
                  <li>Any prior communication related to this issue</li>
                </ul>
                <p className="text-blue-600">Click "Try the AI Demo" to continue this conversation...</p>
              </div>
            </div>
            <div className="text-center">
              <Button href="#demo" primary>
                Try the AI Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;