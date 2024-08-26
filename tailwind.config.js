/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Azul oscuro
        secondary: '#1E40AF', // Azul más claro
        accent: '#EF4444', // Rojo para los botones
        background: '#1E293B', // Color de fondo
        textPrimary: '#FFFFFF', // Texto blanco
        textSecondary: '#CBD5E1', // Texto gris claro
      }
    },
  },
  plugins: [],
};
