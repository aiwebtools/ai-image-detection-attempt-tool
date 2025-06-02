
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					blue: '#3b82f6',
					purple: '#8b5cf6',
					pink: '#ec4899',
					green: '#10b981',
					yellow: '#f59e0b',
					violet: '#7c3aed',
					indigo: '#6366f1',
					cyan: '#06b6d4'
				},
				cyberpunk: {
					dark: '#0B0B13',
					darker: '#070711',
					light: '#1F1F2C',
					accent: '#13131F'
				},
				divine: {
					violet: '#8b5cf6',
					purple: '#a855f7',
					blue: '#3b82f6',
					indigo: '#6366f1',
					pink: '#ec4899',
					rose: '#f43f5e',
					gold: '#f59e0b',
					emerald: '#10b981'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1) saturate(1)' },
					'50%': { opacity: '0.8', filter: 'brightness(1.4) saturate(1.3)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'smoke-drift': {
					'0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
					'15%': { opacity: '0.4' },
					'50%': { transform: 'translateX(30px) translateY(-30px)', opacity: '0.6' },
					'85%': { opacity: '0.3' },
					'100%': { transform: 'translateX(0) translateY(-60px)', opacity: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'divine-pulse': {
					'0%, 100%': { 
						opacity: '1', 
						filter: 'brightness(1) saturate(1)',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.9', 
						filter: 'brightness(1.3) saturate(1.2)',
						transform: 'scale(1.02)'
					}
				},
				'aurora': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%', 
						filter: 'hue-rotate(0deg)'
					},
					'25%': { 
						backgroundPosition: '100% 0%', 
						filter: 'hue-rotate(90deg)'
					},
					'50%': { 
						backgroundPosition: '100% 100%', 
						filter: 'hue-rotate(180deg)'
					},
					'75%': { 
						backgroundPosition: '0% 100%', 
						filter: 'hue-rotate(270deg)'
					}
				},
				'holy-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(139,92,246,0.3), 0 0 40px rgba(59,130,246,0.2), 0 0 60px rgba(147,51,234,0.1)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(59,130,246,0.3), 0 0 90px rgba(147,51,234,0.2)'
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 10s ease infinite',
				'smoke-drift': 'smoke-drift 12s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'rotate-slow': 'rotate-slow 25s linear infinite',
				'divine-pulse': 'divine-pulse 4s ease-in-out infinite',
				'aurora': 'aurora 15s linear infinite',
				'holy-glow': 'holy-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite'
			},
			backdropBlur: {
				xs: '2px',
			},
			backgroundImage: {
				'cyberpunk-grid': 'linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)',
				'neon-glow': 'linear-gradient(45deg, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.4) 100%)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'divine-aurora': 'conic-gradient(from 0deg, transparent, rgba(139,92,246,0.2), transparent, rgba(59,130,246,0.2), transparent)',
				'holy-shimmer': 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)'
			},
			backgroundSize: {
				'grid-lg': '60px 60px',
			},
			boxShadow: {
				'neon-blue': '0 0 15px rgba(59,130,246,0.7), 0 0 30px rgba(59,130,246,0.5), 0 0 45px rgba(59,130,246,0.3)',
				'neon-purple': '0 0 15px rgba(139,92,246,0.7), 0 0 30px rgba(139,92,246,0.5), 0 0 45px rgba(139,92,246,0.3)',
				'neon-pink': '0 0 15px rgba(236,72,153,0.7), 0 0 30px rgba(236,72,153,0.5), 0 0 45px rgba(236,72,153,0.3)',
				'divine-glow': '0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(59,130,246,0.3), 0 0 60px rgba(147,51,234,0.2)',
				'holy-aura': '0 0 30px rgba(139,92,246,0.6), 0 0 60px rgba(59,130,246,0.4), 0 0 90px rgba(147,51,234,0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
