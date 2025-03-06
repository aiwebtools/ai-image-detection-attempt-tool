
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white flex flex-col items-center justify-center relative p-4">
      <div className="absolute inset-0 bg-cyberpunk-grid bg-grid-lg opacity-20"></div>
      
      <div className="glass rounded-2xl p-8 max-w-md w-full text-center relative z-10">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        
        <div className="mt-10 mb-6">
          <h1 className="text-6xl font-bold mb-2 text-gradient">404</h1>
          <p className="text-xl text-gray-300 mb-8">This page doesn't exist in our reality</p>
          
          <div className="w-full h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full my-8"></div>
          
          <p className="text-gray-400 mb-8">
            The page you're looking for may have been moved, deleted, or perhaps was never created.
          </p>
          
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(159,21,255,0.5)]"
          >
            <Home className="w-5 h-5" />
            <span>Return to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
