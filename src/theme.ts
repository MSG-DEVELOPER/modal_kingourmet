// theme.ts

export const theme = {
    colors: {
      // Fondo principal del modal/app
      background: "#121212",        // negro suave
      surface: "#1E1E1E",           // superficie de tarjetas, modales, paneles
      overlay: "rgba(0, 0, 0, 0.6)", // overlay semitransparente
      // Escala de grises para textos y bordes
      gray100: "#F5F5F5",  // texto claro
      gray200: "#E0E0E0",
      gray300: "#B3B3B3",
      gray400: "#808080",
      gray500: "#4D4D4D",  // texto secundario, bordes suaves
      gray600: "#333333",  // separadores, hover leve
      gray700: "#1F1F1F",  // background oscuro de secciones
      // Colores de acento
      primary: "#4F46E5",   // azul-violeta moderno
      secondary: "#10B981", // verde profesional
      danger: "#EF4444",    // rojo para alertas
      warning: "#F59E0B",   // naranja
    },
    fonts: {
      main: "'Inter', sans-serif",
      code: "'Fira Code', monospace",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "12px",
    },
    shadows: {
      light: "0 1px 3px rgba(0,0,0,0.2)",
      medium: "0 4px 6px rgba(0,0,0,0.4)",
      heavy: "0 8px 12px rgba(0,0,0,0.6)",
    },
    transitions: {
      fast: "all 0.2s ease-in-out",
      medium: "all 0.4s ease-in-out",
      slow: "all 0.6s ease-in-out",
    },
  };
  