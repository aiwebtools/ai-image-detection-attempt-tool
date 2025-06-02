
import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/20 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 inset-x-0 h-60 bg-gradient-to-b from-transparent via-violet-500/5 to-cyberpunk-dark z-10 pointer-events-none"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-violet-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div className="container px-6 md:px-8 relative z-20">
        {/* Enhanced disclaimer banner */}
        <div className="mb-12 p-6 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-400/40 rounded-2xl backdrop-blur-sm shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"></div>
          <p className="text-center text-amber-100 text-sm md:text-base relative z-10 leading-relaxed">
            <strong className="text-amber-200 text-lg">⚠️ Important Disclaimer:</strong><br/>
            Snoop Image AI is provided for <span className="text-amber-300 font-semibold">informational, educational, and research purposes only</span>. 
            Results are not guaranteed to be 100% accurate and should not be used for critical decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
            <div className="transform hover:scale-105 transition-all duration-300">
              <Logo size="md" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Advanced AI image analysis technology that helps you determine whether an image is authentic or AI-generated.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai"
                target="_blank"
                rel="noopener noreferrer" 
                className="relative overflow-hidden group px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600 text-white font-bold transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] transform hover:scale-110 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 text-lg">Conduct Deep Image Python Scan Now</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-300 hover:text-violet-400 transition-all duration-300 inline-block text-lg hover:translate-x-2 hover:scale-105"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 inline-block text-lg hover:translate-x-2 hover:scale-105"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-400 transition-all duration-300 inline-flex items-center gap-2 text-lg hover:translate-x-2 hover:scale-105"
                >
                  More AI Tools
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-green-400 transition-all duration-300 inline-flex items-center gap-2 text-lg hover:translate-x-2 hover:scale-105"
                >
                  Privacy Policy
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 inline-flex items-center gap-2 text-lg hover:translate-x-2 hover:scale-105"
                >
                  Terms of Service
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-300 hover:text-violet-400 transition-all duration-300 inline-flex items-center gap-3 text-lg hover:translate-x-2 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-3 text-lg hover:translate-x-2 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-10">
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-2xl glass-dark hover:bg-white/20 transition-all duration-500 gap-3 text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:scale-110"
              >
                <span>More AI Tools</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 text-lg hover:scale-105"
          >
            © {currentYear} AI WEB TOOLS LLC. All rights reserved.
          </a>
          
          <p className="text-gray-500 text-base font-medium">
            Fo' shizzle my nizzle - Keep it real with Snoop Image AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
