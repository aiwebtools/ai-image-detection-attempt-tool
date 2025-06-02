
import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-16 pb-6 border-t border-white/10">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-cyberpunk-dark z-10 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-20">
        {/* Small disclaimer banner */}
        <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-center text-amber-200 text-sm">
            <strong>Disclaimer:</strong> Snoop Image AI is provided for informational, educational, and research purposes only. 
            Results are not guaranteed to be 100% accurate and should not be used for critical decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Logo size="md" />
            <p className="text-gray-400">
              Advanced AI image analysis technology that helps you determine whether an image is authentic or AI-generated.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai"
                target="_blank"
                rel="noopener noreferrer" 
                className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(159,21,255,0.5)]"
              >
                <span className="relative z-10">Conduct Deep Image Python Scan Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-neon-blue transition-colors inline-block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-neon-blue transition-colors inline-block"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors inline-flex items-center gap-1"
                >
                  More AI Tools
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-blue transition-colors inline-flex items-center gap-1"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-neon-blue transition-colors inline-flex items-center gap-1"
                >
                  Terms of Service
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-neon-blue transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-neon-blue transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-full glass-dark hover:bg-white/10 transition-colors gap-2"
              >
                <span>More AI Tools</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            © {currentYear} AI WEB TOOLS LLC. All rights reserved.
          </a>
          
          <p className="text-gray-600 text-sm">
            Fo' shizzle my nizzle - Keep it real with Snoop Image AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
