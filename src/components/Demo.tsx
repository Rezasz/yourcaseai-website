import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const Demo: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m YourCase.ai, your AI legal assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Simulate response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      
      // This is a demo, so we're using a canned response
      const responses = [
        "To help you with this legal question, I'll need to know which state or jurisdiction you're in, as laws vary by location. Could you please provide that information?",
        "Thanks for sharing your situation. Based on what you've told me, you might want to consider the following options: 1) Filing a formal complaint, 2) Sending a demand letter, or 3) Consulting with a small claims specialist. Would you like me to explain any of these options in more detail?",
        "From what you've described, this appears to be a potential breach of contract. I can help you draft a response letter that outlines your position and requests resolution. Would you like me to start drafting this for you?",
        "This seems like a complex situation with several legal considerations. While I can provide general information, this specific case might benefit from specialized legal advice. Would you like me to explain the key legal concepts involved while you consider consulting an attorney?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 1500);
  };
  
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try YourCase.ai Demo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience how our AI legal assistant works with this interactive demo. 
            Ask a legal question and see how YourCase.ai can help.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4 flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            <h3 className="font-medium">YourCase.ai Assistant</h3>
          </div>
          
          <div className="h-96 overflow-y-auto px-6 py-4 bg-white">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${
                  message.role === 'user' 
                    ? 'flex justify-end' 
                    : 'flex justify-start'
                }`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 text-gray-500 rounded-lg px-4 py-2 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-200 px-4 py-3">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                className="flex-1 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-md"
                placeholder="Type your legal question here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 flex items-center"
                disabled={isTyping || !input.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Note: This is a demonstration. In the full version, responses are more comprehensive and legally vetted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;