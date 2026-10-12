import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, Chip } from '@mui/material';
import { Activity, Clock, MapPin, Phone, Mail, Heart } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { colors } from '../../theme/colors';
import { doctorInfo, getWhatsAppLink } from '../../data/doctorInfo';

export default function Footer({ onOpenAppointmentModal }) {
  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0B132B',
        color: '#E2E8F0',
        pt: { xs: 5, md: 7 },
        pb: 4,
        borderTop: `1px solid rgba(255, 255, 255, 0.08)`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Columna 1: Perfil y Especialidad */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  backgroundColor: colors.primary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Activity size={24} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    lineHeight: 1.2,
                  }}
                >
                  {doctorInfo.name}
                </Typography>
                <Typography variant="caption" sx={{ color: colors.primary.light }}>
                  {doctorInfo.specialty}
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: '#94A3B8', mb: 3, lineHeight: 1.7, fontSize: '0.9rem' }}
            >
              Atención médica de alta especialidad en gastroenterología y endoscopia digestiva.
              Compromiso, ética y calidez humana para el cuidado integral de tu salud digestiva.
            </Typography>

            <Chip
              icon={<Clock size={14} color="#6EE7B7" />}
              label={doctorInfo.schedule}
              size="small"
              sx={{
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                color: '#6EE7B7',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontWeight: 600,
                fontSize: '0.78rem',
                py: 0.5,
              }}
            />
          </Grid>

          {/* Columna 2: Procedimientos y Servicios */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography
              variant="subtitle1"
              sx={{ color: '#ffffff', fontWeight: 700, mb: 2.5, letterSpacing: '0.02em' }}
            >
              Procedimientos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                'Gastroscopia',
                'Colonoscopia Total',
                'Rectoscopia',
                'Polipectomías',
                'CPRE (Vías Biliares)',
                'Telemedicina Internacional',
              ].map((proc) => (
                <Link
                  key={proc}
                  component="button"
                  onClick={() => scrollTo('#procedimientos')}
                  sx={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: colors.primary.light },
                  }}
                >
                  {proc}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Columna 3: Enlaces de Navegación */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography
              variant="subtitle1"
              sx={{ color: '#ffffff', fontWeight: 700, mb: 2.5, letterSpacing: '0.02em' }}
            >
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Sobre la Doctora', href: '#sobre-mi' },
                { label: 'Servicios Clínicos', href: '#servicios' },
                { label: 'Guía de Síntomas', href: '#sintomas' },
                { label: 'Preguntas Frecuentes', href: '#faq' },
                { label: 'Consultorio y Horarios', href: '#ubicacion' },
              ].map((item) => (
                <Link
                  key={item.label}
                  component="button"
                  onClick={() => scrollTo(item.href)}
                  sx={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: colors.primary.light },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Columna 4: Contacto y Citas */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              sx={{ color: '#ffffff', fontWeight: 700, mb: 2.5, letterSpacing: '0.02em' }}
            >
              Contacto & Consultorio
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <MapPin size={18} color={colors.primary.light} style={{ marginTop: 3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                  {doctorInfo.location.clinicName}<br />
                  {doctorInfo.location.address}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Clock size={18} color={colors.accent.light} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                  8:00 AM – 2:00 PM (Previa Cita)
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <WhatsAppIcon sx={{ fontSize: 18, color: '#4ADE80' }} />
                <Link
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#4ADE80', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem' }}
                >
                  Consultar por WhatsApp
                </Link>
              </Box>

              <Box sx={{ mt: 1 }}>
                <Box
                  component="button"
                  onClick={onOpenAppointmentModal}
                  sx={{
                    width: '100%',
                    py: 1.2,
                    px: 2,
                    borderRadius: 30,
                    border: 'none',
                    background: colors.gradients.primaryButton,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(2, 136, 209, 0.3)',
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: 0.9 },
                  }}
                >
                  Solicitar Cita Médica
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

        {/* Disclaimer médico y derechos */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748B', maxWidth: 680, display: 'block' }}>
            <strong>Nota Médica Informativa:</strong> El contenido de esta página web tiene fines informativos y de divulgación sobre salud digestiva. Ninguna información aquí provista sustituye la evaluación clínica presencial, el examen físico o el criterio de un médico especialista.
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: '#94A3B8',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              whiteSpace: 'nowrap',
            }}
          >
            © {new Date().getFullYear()} {doctorInfo.name}. Hecho con{' '}
            <Heart size={14} color="#F472B6" fill="#F472B6" />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
