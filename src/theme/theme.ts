export const theme = {
  colors: {
    bg: "#0a1628",
    bgAlt: "#0f1e36",
    bgElevated: "#152846",
    primary: "#f97316",
    primaryHover: "#ea6a0a",
    primaryGlow: "rgba(249, 115, 22, 0.35)",
    text: "#f1f5f9",
    textMuted: "#94a3b8",
    border: "rgba(255,255,255,0.08)",
  },
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    full: "999px",
  },
  shadows: {
    glow: "0 10px 40px -10px rgba(249, 115, 22, 0.4)",
    card: "0 8px 32px -8px rgba(0, 0, 0, 0.5)",
  },
  breakpoints: {
    md: "768px",
    lg: "1024px",
  },
  maxWidth: "1200px",
} as const;

export type Theme = typeof theme;
