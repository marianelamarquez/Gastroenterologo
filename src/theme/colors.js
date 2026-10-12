/**
 * ============================================================================
 * GUÍA DE COLORES Y PALETA - DRA. NERY BETANCOURT (GASTROENTEROLOGÍA)
 * ============================================================================
 * Puedes modificar libremente los códigos HEX de este archivo para cambiar
 * toda la identidad visual de la web en un solo lugar.
 */

export const colors = {
  // 1. AZUL CIELO (Color Primario - Transmite confianza, serenidad y medicina moderna)
  primary: {
    lighter: '#F0F9FF',   // Fondos muy suaves y banners destacados
    light: '#BAE6FD',     // Bordes suaves y detalles sutiles
    main: '#0288D1',      // Color principal de botones, acentos y llamadas a la acción (#0288D1 o #0EA5E9)
    dark: '#0369A1',      // Hover de botones y encabezados de alta jerarquía
    darker: '#0C4A6E',    // Textos de alto contraste
    contrastText: '#FFFFFF',
  },

  // 2. ROSADO (Color Secundario - Calidez humana, empatía, tacto y amabilidad)
  secondary: {
    lighter: '#FDF2F8',   // Fondos de tarjetas especiales y badges
    light: '#FBCFE8',     // Bordes destacados
    main: '#EC4899',      // Tono rosado moderno y equilibrado
    dark: '#BE185D',      // Hover secundario y textos de énfasis
    darker: '#831843',
    contrastText: '#FFFFFF',
  },

  // 3. VERDE CLARO / MENTA (Color de Acento y Salud - Bienestar digestivo y recuperación)
  accent: {
    lighter: '#ECFDF5',   // Fondos de éxito y beneficios de salud
    light: '#A7F3D0',     // Bordes de tarjetas de procedimientos
    main: '#10B981',      // Verde menta / esmeralda fresco
    dark: '#047857',      // Textos de confirmación
    darker: '#064E3B',
    contrastText: '#FFFFFF',
  },

  // Colores de estado estándar de Material UI
  status: {
    success: '#10B981',
    info: '#0288D1',
    warning: '#F59E0B',
    error: '#EF4444',
  },

  // Fondos y superficies
  background: {
    default: '#F8FAFC',   // Fondo general de la página (gris/azul blanquecino premium)
    paper: '#FFFFFF',     // Fondo de tarjetas y modales
    subtle: '#F1F5F9',    // Secciones alternadas
    glass: 'rgba(255, 255, 255, 0.85)', // Efecto translúcido / glassmorphism
  },

  // Textos y legibilidad
  text: {
    primary: '#0F172A',   // Título principal y textos clave (Slate 900)
    secondary: '#475569', // Párrafos y descripciones (Slate 600)
    disabled: '#94A3B8',  // Textos secundarios o deshabilitados
    muted: '#64748B',     // Notas al pie o metadatos
  },

  // Bordes y divisores
  border: {
    light: '#E2E8F0',
    hover: '#CBD5E1',
    focus: '#0288D1',
  },

  // Gradientes predefinidos para banners, hero y tarjetas destacadas
  gradients: {
    hero: 'linear-gradient(135deg, #F0F9FF 0%, #FDF2F8 50%, #ECFDF5 100%)',
    primaryButton: 'linear-gradient(135deg, #0288D1 0%, #0369A1 100%)',
    secondaryButton: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
    badge: 'linear-gradient(135deg, #E0F2FE 0%, #FCE7F3 100%)',
    cardGlow: 'linear-gradient(180deg, rgba(2, 136, 209, 0.04) 0%, rgba(236, 72, 153, 0.02) 100%)',
  },
};
