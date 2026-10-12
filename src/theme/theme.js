import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors } from './colors';

/**
 * Tema principal de Material UI configurado para la Dra. Nery Betancourt.
 * Diseñado con tipografía moderna, bordes redondeados suaves y elevaciones elegantes.
 */
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    success: {
      light: colors.accent.light,
      main: colors.accent.main,
      dark: colors.accent.dark,
      contrastText: colors.accent.contrastText,
    },
    info: {
      main: colors.status.info,
    },
    warning: {
      main: colors.status.warning,
    },
    error: {
      main: colors.status.error,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    divider: colors.border.light,
    // Atajos de diseño personalizados accesibles vía theme.palette.custom
    custom: {
      colors,
      gradients: colors.gradients,
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      lineHeight: 1.7,
      fontSize: '1rem',
    },
    body2: {
      lineHeight: 1.6,
      fontSize: '0.885rem',
    },
    button: {
      textTransform: 'none', // Estilo moderno sin mayúsculas forzadas
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 14, // Bordes redondeados elegantes y amigables
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(15, 23, 42, 0.05)',
    '0px 3px 6px -1px rgba(15, 23, 42, 0.06), 0px 2px 4px -2px rgba(15, 23, 42, 0.04)',
    '0px 6px 12px -2px rgba(15, 23, 42, 0.07), 0px 3px 6px -3px rgba(15, 23, 42, 0.05)',
    '0px 10px 18px -3px rgba(15, 23, 42, 0.08), 0px 4px 8px -4px rgba(15, 23, 42, 0.04)',
    '0px 14px 24px -4px rgba(15, 23, 42, 0.09), 0px 6px 12px -6px rgba(15, 23, 42, 0.05)',
    ...Array(19).fill('0px 16px 32px -4px rgba(15, 23, 42, 0.1)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Botones estilo píldora médicos
          padding: '10px 24px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(2, 136, 209, 0.25)',
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          background: colors.gradients.primaryButton,
          color: '#ffffff',
          '&:hover': {
            background: colors.primary.dark,
          },
        },
        containedSecondary: {
          background: colors.gradients.secondaryButton,
          color: '#ffffff',
          '&:hover': {
            background: colors.secondary.dark,
          },
        },
        outlinedPrimary: {
          borderWidth: '1.5px',
          borderColor: colors.primary.main,
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: colors.primary.lighter,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: `1px solid ${colors.border.light}`,
          boxShadow: '0px 4px 20px rgba(15, 23, 42, 0.04)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 14px 30px rgba(2, 136, 209, 0.1)',
            borderColor: colors.primary.light,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 20,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          color: colors.text.primary,
          boxShadow: '0 1px 10px rgba(15, 23, 42, 0.06)',
          borderBottom: `1px solid ${colors.border.light}`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 24,
          padding: '8px',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
