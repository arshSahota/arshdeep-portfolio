export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f19",
        surface: "#111827",
        surfaceBorder: "#1f2937",
        primary: "#6366f1",   // indigo-500
        primarySoft: "#818cf8",
        textMuted: "#9ca3af",
      },
      boxShadow: {
        glow: "0 0 0 0 rgba(99,102,241,0.4)",
        glowHover: "0 0 25px rgba(99,102,241,0.35)",
      },
    },
  },
  plugins: [],
}