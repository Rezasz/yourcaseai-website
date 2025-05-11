import React, { useState } from 'react';
import Button from './Button';

const EarlyAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // In a real application, you would send this to a server
    // For now, we'll just simulate success
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };
  
  return (
    <section id="early-access" className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Among the First</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Join our waiting list to be among the first to try YourCase.ai. 
            Early adopters get 3 free document drafts!
          </p>
          
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-500 text-white mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-blue-100 mb-6">
                  You're on the list! We'll notify you as soon as YourCase.ai is ready for you to try.
                </p>
                <p className="text-sm text-blue-200">
                  Keep an eye on your inbox — we'll be in touch soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="email" className="block text-blue-100 mb-2 text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md bg-white/95 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="text-red-300 text-sm mt-2 text-left">{error}</p>}
              </div>
              
              <Button primary fullWidth>
                Join the Waiting List
              </Button>
              
              <p className="text-xs text-blue-200 mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy.
                We'll never share your information with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;