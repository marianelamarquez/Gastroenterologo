import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CheckCircle } from 'lucide-react';
import { colors } from '../theme/colors';
import { doctorInfo } from '../data/doctorInfo';

export default function Hero({ onOpenAppointmentModal }) {
  const scrollToProcedures = () => {
    const el = document.querySelector('#procedimientos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="inicio"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(circle at 10% 20%, rgba(2, 136, 209, 0.08) 0%, transparent 40%),
                     radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.06) 0%, transparent 45%),
                     radial-gradient(circle at 50% 90%, rgba(16, 185, 129, 0.06) 0%, transparent 40%),
                     #FFFFFF`,
        pt: { xs: 3.5, md: 5.5 },
        pb: { xs: 4.5, md: 6.5 },
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Columna de Texto Principal */}
          <Grid item xs={12} md={7}>
            <Box>
              {/* Título Principal */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.1rem', md: '3.75rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.15, md: 1.1 },
                  color: colors.text.primary,
                  mb: 2.5,
                }}
              >
                Cuidado integral de tu salud digestiva con{' '}
                <Box
                  component="span"
                  sx={{
                    background: colors.gradients.primaryButton,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  precisión médica
                </Box>{' '}
                y{' '}
                <Box
                  component="span"
                  sx={{
                    background: colors.gradients.secondaryButton,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  calidez humana
                </Box>
                .
              </Typography>

              {/* Presentación de la Doctora */}
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: colors.primary.dark,
                  fontWeight: 700,
                  fontSize: { xs: '1.15rem', md: '1.3rem' },
                  mb: 1.5,
                }}
              >
                {doctorInfo.name} • Especialista en Gastroenterología
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: colors.text.secondary,
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  lineHeight: 1.8,
                  maxWidth: 720,
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Especialista en diagnóstico y tratamiento de trastornos digestivos, reflujo, gastritis,
                colonoscopias preventivas, gastroscopias, polipectomías y procedimientos biliares (CPRE).
                Atención presencial dedicada y telemedicina internacional para pacientes en el exterior.
              </Typography>

              {/* Botones de Llamada a la Acción (CTA) */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 4.5 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  onClick={onOpenAppointmentModal}
                  sx={{
                    px: 3.5,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 25px rgba(2, 136, 209, 0.3)',
                  }}
                >
                  Solicitar Cita Médica
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={scrollToProcedures}
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    borderColor: colors.border.hover,
                    color: colors.text.primary,
                    '&:hover': {
                      borderColor: colors.primary.main,
                      backgroundColor: colors.primary.lighter,
                    },
                  }}
                >
                  Explorar Procedimientos
                </Button>
              </Stack>

              {/* Píldoras de Confianza Rápidas en Grid Horizontal Centrado */}
              <Grid container spacing={1.5} justifyContent="center" sx={{ maxWidth: 840, mx: 'auto' }}>
                {[
                  'Gastroscopia y Colonoscopia Segura',
                  'Atención de 8:00 AM a 2:00 PM',
                  'Telemedicina para Pacientes en el Exterior',
                ].map((item, idx) => (
                  <Grid item xs={12} sm={4} key={idx}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        p: 1.2,
                        borderRadius: 2.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        border: `1px solid ${colors.border.light}`,
                        height: '100%',
                      }}
                    >
                      <CheckCircle size={17} color={colors.accent.main} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, color: colors.text.secondary, lineHeight: 1.3 }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* Barra de Estadísticas Rápidas */}
        <Box
          sx={{
            mt: { xs: 3.5, md: 4.5 },
            p: { xs: 2.5, md: 3 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
            border: `1px solid ${colors.border.light}`,
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 2, md: 3 },
              alignItems: 'center',
              width: '100%',
            }}
          >
            {doctorInfo.stats.map((stat, idx) => (
              <Box key={idx} sx={{ textAlign: 'center', px: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 800,
                    color:
                      idx === 0
                        ? colors.primary.main
                        : idx === 1
                          ? colors.secondary.main
                          : idx === 2
                            ? colors.accent.main
                            : colors.primary.dark,
                    lineHeight: 1.1,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.text.primary, fontSize: '0.9rem' }}>
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: colors.text.muted }}>
                  {stat.highlight}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container >
    </Box >
  );
}
