
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center z-20"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai"
            target="_blank"
            rel="noopener noreferrer" 
            className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(159,21,255,0.5)]"
          >
            <span className="relative z-10">Conduct Deep Image Python Scan Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <button 
            className="text-white hover:text-neon-blue transition-colors"
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </button>
          <button
            className="text-white hover:text-neon-blue transition-colors"
            onClick={() => scrollToSection('disclaimer')}
          >
            Disclaimer
          </button>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-blue transition-colors"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20 text-white" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-cyberpunk-darker/95 backdrop-blur-sm flex flex-col justify-center z-10 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
          <nav className="flex flex-col items-center space-y-6 p-8">
            <a 
              href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs relative overflow-hidden group px-5 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium text-center transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Conduct Deep Image Python Scan Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <button 
              className="text-white text-xl"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </button>
            <button 
              className="text-white text-xl"
              onClick={() => scrollToSection('disclaimer')}
            >
              Disclaimer
            </button>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
