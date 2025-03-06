import React from 'react';
import { CircleCheck, Scan, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
            <div className="inline-block px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20">
              <p className="text-neon-purple text-sm font-medium">AI Image Detection Tool</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gradient">Detect AI-Generated Images</span>
              <span className="block mt-2 text-white">With Precision & Style</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Fo' shizzle my nizzle! Snoop Image AI be droppin' the realest image analysis 
              in the game. We detect AI fakery with python-powered precision and 
              give you the 411 with detailed scores and analysis.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group px-7 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(159,21,255,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Scan className="w-5 h-5" />
                  <span>Analyze Your Image Now</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors"
              >
                Learn More
              </button>
            </div>
            
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <CircleCheck className="w-5 h-5 text-neon-green" />
                <span className="text-gray-300">Python Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="w-5 h-5 text-neon-green" />
                <span className="text-gray-300">Detailed Scores</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="w-5 h-5 text-neon-green" />
                <span className="text-gray-300">Visual Analysis</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up [animation-delay:400ms]">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 via-neon-blue/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative glass rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-blue/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl"></div>
              
              <div className="p-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-neon-pink rounded-full animate-pulse-glow"></div>
                      <h3 className="text-lg font-medium text-white">AI Detection Results</h3>
                    </div>
                    <BarChart3 className="text-neon-blue animate-pulse" />
                  </div>
                  
                  <div className="space-y-4 py-2">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Artifact Analysis</span>
                        <span className="text-white">82%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-purple to-neon-blue w-[82%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Noise Distribution</span>
                        <span className="text-white">68%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-purple to-neon-blue w-[68%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Edge Detection</span>
                        <span className="text-white">91%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-purple to-neon-blue w-[91%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="w-full mt-4 py-4 border-t border-white/10">
                      <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-neon-blue neon-text-blue mb-1">87%</div>
                        <p className="text-white text-sm">Probability of AI Generation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-purple/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
