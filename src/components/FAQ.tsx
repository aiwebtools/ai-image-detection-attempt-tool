
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How accurate is Snoop Image AI in detecting AI-generated images?",
    answer: "Snoop Image AI provides a probability score based on multiple analytical factors. While it achieves high accuracy in many cases, no detection system is 100% perfect. The tool gives detailed breakdowns of its analysis to help you make informed judgments."
  },
  {
    question: "What types of AI-generated images can Snoop Image AI detect?",
    answer: "Our tool is designed to detect images created by various AI platforms including DALL-E, Midjourney, Stable Diffusion, and other popular generative AI systems. It analyzes multiple aspects of images to identify artificially generated content."
  },
  {
    question: "Can Snoop Image AI analyze any image format?",
    answer: "Snoop Image AI primarily works with common image formats like JPEG and PNG. If an image is in another format, the system will attempt to convert it to a compatible format before analysis."
  },
  {
    question: "What specific features does Snoop Image AI analyze?",
    answer: "The system examines various elements including pixel patterns, noise distribution, lighting consistency, texture uniformity, perspective accuracy, edge detection, and numerous visual anomalies that typically appear in AI-generated images."
  },
  {
    question: "Is my data secure when I use Snoop Image AI?",
    answer: "Yes, we prioritize data privacy and security. Images uploaded for analysis are not stored permanently and are processed securely. We do not use your images for training purposes without explicit consent."
  },
  {
    question: "Can Snoop Image AI be fooled by highly refined AI-generated images?",
    answer: "As AI generation technology improves, detection becomes more challenging. While Snoop Image AI uses advanced techniques to identify even sophisticated AI-generated images, there's an ongoing evolution in both generation and detection capabilities."
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Get answers to common questions about Snoop Image AI and how it works.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass rounded-xl mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors inline-flex items-center gap-2"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
