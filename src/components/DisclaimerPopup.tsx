
import React from 'react';
import { motion } from "framer-motion";
import { Star, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleAgree = () => {
    onClose();
    toast({
      title: "Welcome to Snoop Image AI!",
      description: "Thanks for agreeing to our terms",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="relative w-full max-w-md overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple via-neon-blue to-neon-pink opacity-50 animate-gradient-shift"></div>
        <div className="relative p-1">
          <div className="bg-cyberpunk-dark rounded-xl p-6 md:p-8 shadow-xl">
            <div className="absolute -top-2 -right-2">
              <Star className="w-16 h-16 text-neon-yellow opacity-20 animate-pulse-glow" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient font-display">
              DISCLAIMER
            </h2>
            
            <div className="space-y-4 text-white/90 mb-6">
              <p className="font-medium">
                The Snoop Image AI tool is designed to help detect AI-generated images, but the results are not guaranteed to be 100% accurate.
              </p>
              <p>
                By using this tool, you acknowledge that the analysis provided is for informational purposes only and should not be considered as definitive proof of an image's origin.
              </p>
            </div>
            
            <button
              onClick={handleAgree}
              className="group w-full py-3 px-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg font-bold text-white transition-all relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              <span className="relative flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 group-hover:text-white" />
                I AGREE
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DisclaimerPopup;
