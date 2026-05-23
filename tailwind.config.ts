import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        limonar: {
          terracotta: "#8B4513",
          terracottaDark: "#6B340F",
          terracottaLight: "#C26020",
          lime: "#00DE00",
          limeDark: "#00B300",
          limeLight: "#5CF55C",
          sand: "#EBEBEB",
          sandDark: "#CCCCCC",
          sandLight: "#F7F7F7",
          charcoal: "#0A0A0A",
          charcoalLight: "#1F1F1F",
          cream: "#F5F5F5",
          gold: "#00DE00",
          goldLight: "#5CF55C",
          mortar: "#777777",
          clay: "#8B4513",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brick-pattern": "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,222,0,0.06) 19px, rgba(0,222,0,0.06) 20px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,222,0,0.06) 39px, rgba(0,222,0,0.06) 40px)",
        "hero-gradient": "linear-gradient(135deg, #000000 0%, #0A0A0A 60%, #111111 100%)",
        "terracotta-gradient": "linear-gradient(135deg, #8B4513 0%, #6B340F 100%)",
        "lime-gradient": "linear-gradient(135deg, #00DE00 0%, #00B300 100%)",
        "sand-gradient": "linear-gradient(180deg, #EBEBEB 0%, #F7F7F7 100%)",
        "warm-gradient": "linear-gradient(180deg, #F5F5F5 0%, #EBEBEB 100%)",
      },
      animation: {
        "brick-drop": "brickDrop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "farol-glow": "farolGlow 3s ease-in-out infinite",
        "float-particle": "floatParticle 8s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "mortar-spread": "mortarSpread 0.6s ease-out forwards",
        "count-up": "countUp 1s ease-out forwards",
        "pulse-warm": "pulseWarm 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        brickDrop: {
          "0%": { transform: "translateY(-20px) rotate(-2deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
        },
        farolGlow: {
          "0%, 100%": { filter: "drop-shadow(0 0 8px #00DE0066) brightness(1)" },
          "50%": { filter: "drop-shadow(0 0 24px #00DE00BB) brightness(1.15)" },
        },
        floatParticle: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.4" },
          "33%": { transform: "translateY(-30px) translateX(10px) scale(1.1)", opacity: "0.7" },
          "66%": { transform: "translateY(-15px) translateX(-8px) scale(0.9)", opacity: "0.5" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        mortarSpread: {
          "0%": { scaleX: "0", transformOrigin: "left" },
          "100%": { scaleX: "1", transformOrigin: "left" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseWarm: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        "brick": "4px 4px 0px rgba(0,0,0,0.3), 2px 2px 0px rgba(0,0,0,0.15)",
        "farol": "0 0 30px rgba(0,222,0,0.35), 0 0 60px rgba(0,222,0,0.15)",
        "warm": "0 8px 32px rgba(0,0,0,0.12)",
        "warm-lg": "0 20px 60px rgba(0,0,0,0.18)",
        "card-hover": "0 20px 40px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
