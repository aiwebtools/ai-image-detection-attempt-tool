
import React from 'react';
import { motion } from "framer-motion";
import { Star, CheckCircle, AlertTriangle } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-lg"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.8, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl"
      >
        {/* Enhanced animated border */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-blue-500 via-purple-500 to-pink-500 opacity-80 animate-aurora rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        
        <div className="relative p-2">
          <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 w-2 h-2 bg-violet-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
              <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute top-6 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
            </div>
            
            {/* Floating star */}
            <div className="absolute -top-3 -right-3">
              <Star className="w-20 h-20 text-yellow-400 opacity-30 animate-pulse-glow" />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-amber-500/20 rounded-xl">
                <AlertTriangle className="w-10 h-10 text-amber-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-pink-400 bg-clip-text font-display">
                IMPORTANT DISCLAIMER
              </h2>
            </div>
            
            <div className="space-y-6 text-white/95 mb-8">
              <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-400/40 rounded-xl p-4 mb-6 backdrop-blur-sm">
                <p className="font-bold text-amber-200 text-center text-lg">
                  ⚠️ NOT 100% ACCURATE ⚠️
                </p>
              </div>
              
              <p className="font-medium text-lg leading-relaxed">
                Snoop Image AI is an <strong className="text-violet-400">experimental tool</strong> designed to help detect AI-generated images. 
                Due to the advanced realism of modern AI-generated visuals, <strong className="text-blue-400">results are not guaranteed to be 100% accurate</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                By using this tool, you acknowledge that the analysis provided is for <strong className="text-pink-400">informational, educational, and research purposes only</strong> 
                and should not be considered as definitive proof of an image's origin or used for critical decisions.
              </p>
            </div>
            
            <button
              onClick={handleAgree}
              className="group w-full py-4 px-6 bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600 rounded-xl font-bold text-white text-xl transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
              <span className="relative flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 group-hover:text-white" />
                I UNDERSTAND & AGREE
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DisclaimerPopup;
