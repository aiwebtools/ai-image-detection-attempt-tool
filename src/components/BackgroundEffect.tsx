
import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    setCanvasSize();

    // Update canvas size when window is resized
    window.addEventListener('resize', setCanvasSize);

    // Particle parameters
    const particleCount = 100;
    const particles: Particle[] = [];
    const colors = ['#00f3ff', '#9f15ff', '#ff3cf0'];

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Loop the particles when they reach the edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid pattern
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = 'rgba(60, 60, 80, 0.2)';
      
      // Vertical lines
      const gridSize = 40;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw particles
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      // Draw smoke effect
      drawSmoke();
      
      requestAnimationFrame(animate);
    };

    // Smoke particles
    const smokeParticles: SmokeParticle[] = [];
    
    class SmokeParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      lifespan: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.size = Math.random() * 100 + 50;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = -Math.random() * 0.3 - 0.2;
        this.opacity = Math.random() * 0.05 + 0.02;
        this.lifespan = 200 + Math.random() * 100;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.lifespan--;
        if (this.lifespan < 100) {
          this.opacity *= 0.98;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        gradient.addColorStop(0, `rgba(50, 20, 80, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(20, 10, 30, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 1;
        ctx.fill();
      }
    }
    
    // Add smoke periodically
    setInterval(() => {
      if (smokeParticles.length < 15) {
        smokeParticles.push(new SmokeParticle());
      }
    }, 1000);
    
    const drawSmoke = () => {
      for (let i = smokeParticles.length - 1; i >= 0; i--) {
        smokeParticles[i].update();
        smokeParticles[i].draw();
        
        // Remove dead particles
        if (smokeParticles[i].lifespan <= 0 || smokeParticles[i].opacity <= 0.01) {
          smokeParticles.splice(i, 1);
        }
      }
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-80"
    />
  );
};

export default BackgroundEffect;
