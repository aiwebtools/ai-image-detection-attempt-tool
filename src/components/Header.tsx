
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  
  const scrollToSection = useCallback((id: string) => {
    setIsMenuOpen(false);
    // Small delay to let menu close animation start
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center z-20 shrink-0"
          onClick={(e) => {
            e.preventDefault();
            setIsMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a 
            href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai"
            target="_blank"
            rel="noopener noreferrer" 
            className="relative overflow-hidden group px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(159,21,255,0.5)] text-sm lg:text-base whitespace-nowrap"
          >
            <span className="relative z-10">Conduct Deep Image Python Scan Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
          <button 
            className="text-white hover:text-neon-blue transition-colors text-sm lg:text-base"
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </button>
          <button
            className="text-white hover:text-neon-blue transition-colors text-sm lg:text-base"
            onClick={() => scrollToSection('disclaimer')}
          >
            Disclaimer
          </button>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-blue transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20 text-white p-2 -mr-2 touch-manipulation" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-cyberpunk-darker/98 backdrop-blur-md flex flex-col justify-center z-10 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden`}
        >
          <nav className="flex flex-col items-center space-y-8 p-8">
            <a 
              href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs relative overflow-hidden group px-5 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium text-center transition-all active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10 text-base">Conduct Deep Image Python Scan Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <button 
              className="text-white text-xl py-2 active:text-neon-blue transition-colors touch-manipulation"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </button>
            <button 
              className="text-white text-xl py-2 active:text-neon-blue transition-colors touch-manipulation"
              onClick={() => scrollToSection('disclaimer')}
            >
              Disclaimer
            </button>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl py-2 active:text-neon-blue transition-colors touch-manipulation"
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
