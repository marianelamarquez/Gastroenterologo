import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Activity, Clock, MapPin, Sparkles } from 'lucide-react';
import { colors } from '../../theme/colors';
import { doctorInfo, getWhatsAppLink } from '../../data/doctorInfo';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Procedimientos', href: '#procedimientos' },
  { label: 'Síntomas', href: '#sintomas' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Preguntas', href: '#faq' },
];

export default function Navbar({ onOpenAppointmentModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const scrollToSection = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Barra de Navegación Principal */}
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${colors.border.light}`,
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
          <Toolbar disableGutters sx={{ py: { xs: 1, md: 1.2 }, justifyContent: 'space-between' }}>
            {/* Logotipo / Marca Médica */}
            <Box
              component="a"
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: colors.gradients.hero,
                  border: `1.5px solid ${colors.primary.light}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.primary.main,
                  boxShadow: '0 4px 10px rgba(2, 136, 209, 0.15)',
                }}
              >
                <Activity size={24} color={colors.primary.main} strokeWidth={2.5} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '1.05rem', md: '1.25rem' },
                    lineHeight: 1.1,
                    color: colors.text.primary,
                  }}
                >
                  Dra. Nery Betancourt
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    fontSize: '0.74rem',
                    color: colors.primary.main,
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  Gastroenterólogo • Endoscopia Digestiva
                </Typography>
              </Box>
            </Box>

            {/* Enlaces de Escritorio */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: colors.text.primary,
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    px: 1.5,
                    py: 0.8,
                    borderRadius: 20,
                    '&:hover': {
                      backgroundColor: colors.primary.lighter,
                      color: colors.primary.main,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Botón de Acción Principal y Menú Móvil */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CalendarMonthIcon />}
                onClick={onOpenAppointmentModal}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  px: { sm: 2, md: 3 },
                  py: 1,
                  fontSize: '0.9rem',
                }}
              >
                Agendar Cita
              </Button>

              {/* Botón Hamburguesa Móvil */}
              <IconButton
                color="inherit"
                aria-label="Abrir menú de navegación"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { lg: 'none' },
                  color: colors.primary.dark,
                  border: `1px solid ${colors.border.light}`,
                  borderRadius: '10px',
                  p: 1,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Cajón de Navegación Móvil (Drawer) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 290,
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Activity size={22} color={colors.primary.main} />
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                Dra. Nery Betancourt
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerToggle} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Chip
            icon={<Clock size={14} />}
            label="8:00 AM – 2:00 PM (Previa Cita)"
            size="small"
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              mb: 2,
              backgroundColor: colors.primary.lighter,
              color: colors.primary.dark,
              fontWeight: 600,
            }}
          />

          <List sx={{ pt: 1 }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    '&:hover': {
                      backgroundColor: colors.primary.lighter,
                      color: colors.primary.main,
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ pt: 2, borderTop: `1px solid ${colors.border.light}` }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<CalendarMonthIcon />}
            onClick={() => {
              setMobileOpen(false);
              onOpenAppointmentModal();
            }}
            sx={{ mb: 1.5, py: 1.2 }}
          >
            Solicitar Cita
          </Button>

          <Button
            fullWidth
            variant="outlined"
            color="success"
            startIcon={<WhatsAppIcon />}
            component="a"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ py: 1.2, borderColor: colors.accent.main, color: colors.accent.dark }}
          >
            Chat por WhatsApp
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
