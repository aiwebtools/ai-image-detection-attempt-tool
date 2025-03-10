
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
					blue: '#00f3ff',
					purple: '#9f15ff',
					pink: '#ff3cf0',
					green: '#0aff9d',
					yellow: '#ffcc00'
				},
				cyberpunk: {
					dark: '#0B0B13',
					darker: '#070711',
					light: '#1F1F2C',
					accent: '#13131F'
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
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'50%': { opacity: '0.8', filter: 'brightness(1.3)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'smoke-drift': {
					'0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
					'15%': { opacity: '0.3' },
					'50%': { transform: 'translateX(20px) translateY(-20px)', opacity: '0.5' },
					'85%': { opacity: '0.3' },
					'100%': { transform: 'translateX(0) translateY(-40px)', opacity: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'smoke-drift': 'smoke-drift 10s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'rotate-slow': 'rotate-slow 20s linear infinite'
			},
			backdropBlur: {
				xs: '2px',
			},
			backgroundImage: {
				'cyberpunk-grid': 'linear-gradient(rgba(9, 9, 15, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 9, 15, 0.5) 1px, transparent 1px)',
				'neon-glow': 'linear-gradient(45deg, rgba(159, 21, 255, 0.3) 0%, rgba(0, 243, 255, 0.3) 100%)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
			},
			backgroundSize: {
				'grid-lg': '50px 50px',
			},
			boxShadow: {
				'neon-blue': '0 0 10px rgba(0, 243, 255, 0.7), 0 0 20px rgba(0, 243, 255, 0.5), 0 0 30px rgba(0, 243, 255, 0.3)',
				'neon-purple': '0 0 10px rgba(159, 21, 255, 0.7), 0 0 20px rgba(159, 21, 255, 0.5), 0 0 30px rgba(159, 21, 255, 0.3)',
				'neon-pink': '0 0 10px rgba(255, 60, 240, 0.7), 0 0 20px rgba(255, 60, 240, 0.5), 0 0 30px rgba(255, 60, 240, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
