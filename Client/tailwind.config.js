import Navbare from './src/Components/layaut/Navbare';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        /* ✅ MAIN BACKGROUND
           👉 Utilise pour le fond général du site (body)
           Exemple: className="bg-bg-main"
        */
        "bg-main": "#eef2ff",

        /* ✅ SURFACES / CARDS / NAVBAR
           👉 Utilise pour les blocs, cards voiture, navbar, sections
           Exemple: bg-surface
           Hover: bg-surface-hover (quand souris passe sur une card)
        */
        surface: {
          DEFAULT: "#f9fbfff3",
          avbare:"#F3F6FF",
          hover: "#f2f6ff",
        },

        /* ✅ BORDERS
           👉 Bordures des cards, navbar bottom, inputs
           Exemple: border-border-custom
        */
        "border-custom": "#d9e2f2",

        /* ✅ TEXT COLORS
           👉 text-text = titres
           👉 text-text-muted = description, meta (année, km, ville...)
        */
        text: {
          DEFAULT: "#0f172a",
          muted: "#475569",
        },

        /* ✅ MUTED (light text)
           👉 placeholder, icons light, small labels
           Exemple: text-muted
        */
        muted: "#94a3b8",

        /* ✅ PRIMARY (CTA / buttons)
           👉 Boutons principaux: bg-primary
           👉 Hover: hover:bg-primary-hover
           👉 Soft: badges, highlights, background léger
        */
        primary: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          soft: "#dcebff",
        },
      },
    },
  },
  plugins: [],
};
