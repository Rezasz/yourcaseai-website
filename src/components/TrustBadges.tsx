import React from 'react';
import { Shield, Star, Award, Users } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">
            Trusted by early adopters across Europe
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full shadow mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <p className="font-semibold">Bank-Level Security</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full shadow mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <p className="font-semibold">4.9/5 User Rating</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full shadow mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <p className="font-semibold">Legal Tech Award</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-full shadow mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="font-semibold">500+ Beta Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;