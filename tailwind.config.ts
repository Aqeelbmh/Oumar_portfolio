import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#2563EB",
					foreground: "#FFFFFF"
				},
				secondary: {
					DEFAULT: "#1D4ED8",
					foreground: "#FFFFFF"
				},
				accent: {
					DEFAULT: "#1E40AF",
					foreground: "#FFFFFF"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				"light-blue": "#60A5FA",
				"dark-blue": "#1E3A8A",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(37, 99, 235, 0.8)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(30, 64, 175, 0.5)' },
					'50%': { boxShadow: '0 0 25px rgba(30, 64, 175, 0.8)' }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
			},
			fontFamily: {
				sans: ["JetBrains Mono", "monospace"],
				mono: ["JetBrains Mono", "monospace"]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
