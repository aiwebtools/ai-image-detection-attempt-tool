
import React, { useEffect } from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

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
          <Features />
          <Testimonials />
          <FAQ />
          <Disclaimer />
        </main>
        <Footer />
      </div>
      
      {/* Hidden link to the requested image */}
      <a 
        href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-snoop-image-ai-presented-.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden"
      >
        AI Web Tools
      </a>
    </div>
  );
};

export default Index;
