import React, { useEffect } from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Set page title
    document.title = "Snoop Image AI - Detect AI Generated Images";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Snoop Image AI uses advanced Python analysis to detect AI-generated images with detailed scores and analysis. Perfect for creators, journalists, and professionals.');
    }
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
          const href = this.getAttribute('href');
          if (!href) return;
          
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white relative">
      <BackgroundEffect />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          
          {/* Featured Image Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="w-full max-w-3xl mx-auto glass rounded-xl p-4 overflow-hidden">
              <h2 className="text-2xl font-bold text-center mb-6 text-gradient">"Fo' shizzle my nizzle, peep what Snoop's AI can dizzle - spottin' them fake pics like they ain't even trizzle!"</h2>
              <div className="mx-auto w-4/5 md:w-3/4 lg:w-2/3 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink rounded-lg blur-md opacity-70 animate-pulse-glow"></div>
                <div className="relative rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(159,21,255,0.7)]">
                  <Link 
                    to="/tool"
                    className="block w-full h-full p-[2px] bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink rounded-lg"
                  >
                    <div className="relative aspect-video">
                      <img 
                        src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true" 
                        alt="Snoop Image AI Advertisement" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <p className="text-white font-medium">Try the Snoop Image AI tool now</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          <Features />
          <Testimonials />
          <FAQ />
          <Disclaimer />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
