
import React from 'react';
import { Scan, Eye } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl lg:text-4xl'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-neon-purple blur-sm opacity-50 rounded-full"></div>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue p-0.5">
          <div className="absolute inset-[2px] rounded-full bg-cyberpunk-dark flex items-center justify-center">
            <Eye className="w-5 h-5 text-neon-blue" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className={`font-bold tracking-tight ${sizeClasses[size]} text-gradient leading-none`}>
          Snoop Image AI
        </h1>
        <p className="text-xs text-gray-400 leading-tight">Presented by AiWebTools.Ai</p>
      </div>
    </div>
  );
};

export default Logo;
