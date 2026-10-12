import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Clock, Heart, CheckCircle2 } from 'lucide-react';
import { colors } from '../theme/colors';
import { doctorInfo } from '../data/doctorInfo';
import SectionHeader from '../components/common/SectionHeader';
import MedicalImage from '../components/common/MedicalImage';

export default function About({ onOpenAppointmentModal }) {
  return (
    <Box
      id="sobre-mi"
      sx={{
        py: { xs: 4.5, md: 6.5 },
        backgroundColor: colors.background.default,
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <SectionHeader
          chipLabel="Perfil Profesional & Calidez"
          title="Compromiso médico con la salud de tu"
          highlightWord="sistema digestivo"
          subtitle="Una visión médica fundamentada en la empatía, el diagnóstico oportuno y el tratamiento más adecuado para cada paciente."
          chipColor="secondary"
        />

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Imagen de la Doctora / Consultorio */}
          <Grid item xs={12} md={4.5}>
            <Box sx={{ position: 'relative', maxWidth: 420, mx: 'auto' }}>
              <MedicalImage
                src="/images/dra-nery-consultorio.jpg"
                alt="Dra. Nery Betancourt atendiendo en consulta médica de gastroenterología"
                placeholderTitle="Dra. Nery Betancourt"
                placeholderSubtitle="Trayectoria y Vocación Médica"
                aspectRatio="3/4"
                maxHeight={430}
              />

              {/* Tarjeta Flotante Superior: Horario de Atención */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: { xs: -10, sm: -20 },
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: `1.5px solid ${colors.accent.light}`,
                  borderRadius: 3,
                  p: 1.5,
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '10px',
                    backgroundColor: colors.accent.lighter,
                    color: colors.accent.dark,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Clock size={20} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ display: 'block', color: colors.text.muted, fontWeight: 600 }}>
                    Horario de Atención
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: colors.text.primary, lineHeight: 1.2 }}>
                    8:00 AM – 2:00 PM
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.accent.dark, fontWeight: 700, fontSize: '0.7rem' }}>
                    Previa Cita
                  </Typography>
                </Box>
              </Box>

              {/* Tarjeta Flotante Inferior: Experiencia y Calidez */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -15,
                  right: { xs: -10, sm: -20 },
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: `1.5px solid ${colors.secondary.light}`,
                  borderRadius: 3,
                  p: 1.5,
                  boxShadow: '0 10px 25px rgba(236, 72, 153, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '10px',
                    backgroundColor: colors.secondary.lighter,
                    color: colors.secondary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Heart size={20} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ display: 'block', color: colors.text.muted, fontWeight: 600 }}>
                    Vocación Médica
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: colors.text.primary, lineHeight: 1.2 }}>
                    Atención Calurosa
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.secondary.dark, fontWeight: 700, fontSize: '0.7rem' }}>
                    Y Personalizada
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Biografía y Pilares de Atención */}
          <Grid item xs={12} md={7.5}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.95rem' },
                  fontWeight: 800,
                  color: colors.text.primary,
                  mb: 1.5,
                }}
              >
                Hola, soy la Dra. Nery Betancourt
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: colors.text.secondary,
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                Mi objetivo es brindarte tranquilidad, resolver tus dudas y devolverte el bienestar digestivo.
                Sé que los síntomas estomacales o intestinales afectan directamente tu calidad de vida, tu energía y tu estado de ánimo.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: colors.text.secondary,
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Por ello, en cada consulta dedico el tiempo necesario para escucharte con atención, evaluar tus hábitos y antecedentes,
                y proponerte el camino de diagnóstico más seguro, rápido y confortable con procedimientos de vanguardia
                como gastroscopia, colonoscopia y manejo de vías biliares.
              </Typography>

              {/* Pilares en Grid Horizontal (3 columnas) */}
              <Grid container spacing={2} sx={{ mb: 3.5 }}>
                {doctorInfo.pillars.map((pillar, idx) => (
                  <Grid item xs={12} sm={4} key={idx}>
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        border: `1px solid ${colors.border.light}`,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: colors.primary.light,
                          boxShadow: '0 6px 18px rgba(2, 136, 209, 0.08)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: '8px',
                          backgroundColor:
                            idx === 0
                              ? colors.primary.lighter
                              : idx === 1
                                ? colors.secondary.lighter
                                : colors.accent.lighter,
                          color:
                            idx === 0
                              ? colors.primary.main
                              : idx === 1
                                ? colors.secondary.main
                                : colors.accent.dark,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 1.2,
                        }}
                      >
                        <CheckCircle2 size={18} />
                      </Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.text.primary, mb: 0.5, fontSize: '0.88rem' }}>
                        {pillar.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: colors.text.secondary, fontSize: '0.78rem', lineHeight: 1.5 }}>
                        {pillar.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Botón de agendamiento */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<CalendarMonthIcon />}
                  onClick={onOpenAppointmentModal}
                  sx={{ px: 3, py: 1.1 }}
                >
                  Agendar Consulta con la Doctora
                </Button>
                <Typography variant="caption" sx={{ color: colors.text.muted, fontWeight: 600 }}>
                  Horario regular: 8:00 AM a 2:00 PM (Previa Cita)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
