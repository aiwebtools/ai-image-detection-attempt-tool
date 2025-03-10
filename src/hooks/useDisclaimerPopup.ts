
import { useState, useEffect } from 'react';

export const useDisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closeDisclaimer = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenDisclaimer', 'true');
  };

  return {
    isDisclaimerOpen: isOpen,
    closeDisclaimer
  };
};
