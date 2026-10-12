import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Clock, MapPin, Video, Building2 } from 'lucide-react';
import { colors } from '../theme/colors';
import { doctorInfo, getWhatsAppLink } from '../data/doctorInfo';
import SectionHeader from '../components/common/SectionHeader';
import MedicalImage from '../components/common/MedicalImage';

export default function ScheduleAndLocation({ onOpenAppointmentModal }) {
  return (
    <Box
      id="ubicacion"
      sx={{
        py: { xs: 4.5, md: 6.5 },
        backgroundColor: colors.background.default,
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <SectionHeader
          chipLabel="Horarios & Consultorio"
          title="Atención Médica Presencial y"
          highlightWord="Ubicación"
          subtitle="Consultas y procedimientos programados bajo previa cita para garantizar puntualidad y privacidad."
          chipColor="primary"
        />

        <Grid container spacing={{ xs: 4, md: 4.5 }} alignItems="stretch">
          {/* Tarjeta de Horario y Modalidades */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: 4,
                backgroundColor: '#ffffff',
                border: `1.5px solid ${colors.border.light}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                {/* Horario de Atención Destacado */}
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    background: colors.gradients.hero,
                    border: `1px solid ${colors.primary.light}`,
                    mb: 2.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.8 }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '10px',
                        backgroundColor: colors.primary.main,
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Clock size={20} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: colors.primary.dark, fontWeight: 700, textTransform: 'uppercase' }}>
                        Jornada de Consultas y Procedimientos
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: colors.text.primary, lineHeight: 1.2 }}>
                        8:00 AM – 2:00 PM
                      </Typography>
                    </Box>
                  </Box>
                  <Chip
                    label="Atención Exclusiva Previa Cita"
                    size="small"
                    sx={{
                      backgroundColor: colors.accent.lighter,
                      color: colors.accent.dark,
                      fontWeight: 700,
                      borderRadius: 1.5,
                    }}
                  />
                </Box>

                {/* Dos Modalidades en Grid 6 y 6 (Lado a Lado) */}
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.text.primary, mb: 1.5 }}>
                  Modalidades Disponibles:
                </Typography>

                <Grid container spacing={1.5} sx={{ mb: 3 }}>
                  {/* Presencial (6 cols) */}
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 3,
                        border: `1px solid ${colors.border.light}`,
                        backgroundColor: colors.background.default,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Building2 size={20} color={colors.primary.main} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.text.primary }}>
                          Presencial
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: colors.text.secondary, fontSize: '0.8rem', lineHeight: 1.5 }}>
                        Consultas y estudios endoscópicos con equipamiento esterilizado y sala de recuperación.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Telemedicina (6 cols) */}
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 3,
                        border: `1px solid ${colors.secondary.light}`,
                        backgroundColor: colors.secondary.lighter,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Video size={20} color={colors.secondary.main} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.secondary.darker }}>
                          Telemedicina
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: colors.secondary.dark, fontSize: '0.8rem', lineHeight: 1.5 }}>
                        Videoconsulta de alta calidad y revisión de exámenes para quienes residen en el exterior.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Botón de agendamiento directo */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  onClick={onOpenAppointmentModal}
                  sx={{ py: 1.3 }}
                >
                  Solicitar Cita en Horario de 8am a 2pm
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Imagen de Instalaciones y Ubicación */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 2.5, sm: 4 },
                borderRadius: 4,
                backgroundColor: '#ffffff',
                border: `1.5px solid ${colors.border.light}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: colors.text.primary, mb: 1 }}>
                  Instalaciones Clínicas
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary, mb: 2.5 }}>
                  Ambiente seguro, higiénico y climatizado para tu mayor comodidad y tranquilidad.
                </Typography>

                <MedicalImage
                  src="/images/consultorio.jpg"
                  alt="Instalaciones del consultorio y sala de procedimientos de la Dra. Nery Betancourt"
                  placeholderTitle="Consultorio de Gastroenterología"
                  placeholderSubtitle="Dra. Nery Betancourt"
                  aspectRatio="16/9"
                  maxHeight={260}
                  sx={{ mb: 3 }}
                />

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                  <MapPin size={22} color={colors.primary.main} style={{ marginTop: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.text.primary }}>
                      {doctorInfo.location.clinicName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                      {doctorInfo.location.address}
                    </Typography>
                    <Typography variant="caption" sx={{ color: colors.text.muted, display: 'block' }}>
                      {doctorInfo.location.reference}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ pt: 2, borderTop: `1px solid ${colors.border.light}`, display: 'flex', gap: 1.5 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="success"
                  startIcon={<WhatsAppIcon />}
                  component="a"
                  href={getWhatsAppLink('Hola Dra. Nery, deseo conocer la dirección exacta y cómo llegar al consultorio')}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ borderColor: '#25D366', color: '#16A34A', py: 1.2 }}
                >
                  Pedir Ubicación por WhatsApp
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
