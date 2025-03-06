
import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Chen",
    role: "Digital Content Creator",
    quote: "Snoop Image AI has been a game-changer for verifying images before I share them. The detailed analysis gives me confidence in what I'm posting."
  },
  {
    name: "Marcus Johnson",
    role: "Journalist",
    quote: "In today's era of fake news, this tool is essential. The Python-powered analysis provides the scientific evidence I need to verify image authenticity."
  },
  {
    name: "Sarah Williams",
    role: "Social Media Manager",
    quote: "The detailed scores and visual analysis help me quickly determine if content is authentic. It's become an indispensable part of my workflow."
  },
  {
    name: "David Rodriguez",
    role: "Photography Editor",
    quote: "As someone who works with images daily, Snoop Image AI helps me identify AI-generated content with remarkable accuracy. The comprehensive reports are impressive."
  }
];

const Testimonials: React.FC = () => {
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    testimonialRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });
    
    return () => {
      testimonialRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cyberpunk-dark to-transparent z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cyberpunk-dark to-transparent z-10"></div>
      
      <div className="container px-4 md:px-6 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">What Users Are Saying</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Professionals across various industries trust Snoop Image AI
            for reliable image verification and analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={el => testimonialRefs.current[index] = el}
              className="glass rounded-xl p-6 relative group opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative">
                <Quote className="text-neon-purple opacity-30 w-10 h-10 mb-4" />
                <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
