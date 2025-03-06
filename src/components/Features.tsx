
import React, { useEffect, useRef } from 'react';
import { Scan, BarChart3, Camera, EyeOff, FileCode, ShieldCheck, Binary, CircleCheck } from 'lucide-react';

const Features: React.FC = () => {
  const featureRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    featureRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      featureRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyberpunk-dark to-transparent z-10"></div>
      
      <div className="container px-4 md:px-6 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">How Snoop Image AI Works</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Our advanced Python-powered analysis breaks down images with precision,
            identifying the telltale signs of AI generation through multiple metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            ref={featureRefs[0]} 
            className="glass rounded-xl p-6 relative group opacity-0 translate-y-10"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-5 bg-neon-purple/10">
                <Scan className="text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Deep Visual Analysis</h3>
              <p className="text-gray-300">
                Our AI conducts a comprehensive image scan, detecting anomalies, lighting inconsistencies, 
                physics violations, and other signs of artificial generation.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Pixel pattern detection</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Noise distribution analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Edge and gradient evaluation</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            ref={featureRefs[1]} 
            className="glass rounded-xl p-6 relative group opacity-0 translate-y-10"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-5 bg-neon-blue/10">
                <BarChart3 className="text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Comprehensive Scoring</h3>
              <p className="text-gray-300">
                Each image receives detailed scores across multiple metrics, providing an overall probability 
                rating of whether the image was AI-generated.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Statistical analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Visual anomaly detection</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Weighted probability scoring</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            ref={featureRefs[2]} 
            className="glass rounded-xl p-6 relative group opacity-0 translate-y-10"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green to-neon-pink rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-5 bg-neon-pink/10">
                <FileCode className="text-neon-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Python-Powered Processing</h3>
              <p className="text-gray-300">
                Advanced algorithms assess everything from texture patterns to perspective consistency,
                providing scientific evidence for the authenticity assessment.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Advanced algorithms</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Texture & pattern analysis</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CircleCheck className="w-4 h-4 text-neon-green" />
                  <span>Metadata examination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block">
            <a 
              href="https://chatgpt.com/g/g-9XgXMNID1-snoop-image-ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(159,21,255,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                <span>Try Snoop Image AI Now</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
