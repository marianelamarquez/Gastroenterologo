import React from 'react';
import { Box, Container, Grid, Typography, Card, Button, Stack, Chip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Globe, Video, FileText, Send, Clock, CheckCircle } from 'lucide-react';
import { colors } from '../theme/colors';
import { getWhatsAppLink } from '../data/doctorInfo';
import SectionHeader from '../components/common/SectionHeader';
import MedicalImage from '../components/common/MedicalImage';

const steps = [
  {
    step: '01',
    title: 'Solicitud y Coordinación',
    description: 'Solicitas tu cita indicando tu país y horario disponible entre 8:00 AM y 2:00 PM (hora de Venezuela).',
    icon: Globe,
  },
  {
    step: '02',
    title: 'Envío de Informes Médicos',
    description: 'Envías de forma confidencial tus analíticas, biopsias o informes de estudios realizados en tu país de residencia.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Videoconsulta Dedicada',
    description: 'Conexión privada cara a cara con la Dra. Nery Betancourt para análisis clínico minucioso y resolución de inquietudes.',
    icon: Video,
  },
  {
    step: '04',
    title: 'Informe & Plan de Acción',
    description: 'Recibes tu informe médico formal con orientación diagnóstica, pautas alimenticias y tratamiento farmacológico.',
    icon: Send,
  },
];

export default function Telemedicine({ onOpenAppointmentModal }) {
  return (
    <Box
      id="telemedicina"
      sx={{
        py: { xs: 4.5, md: 6.5 },
        backgroundColor: colors.background.default,
        borderBottom: `1px solid ${colors.border.light}`,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <SectionHeader
          chipLabel="Atención Internacional & Nacional"
          title="Telemedicina Especializada para Pacientes"
          highlightWord="en el Exterior"
          subtitle="Accede a la experiencia clínica de la Dra. Nery Betancourt sin importar en qué país te encuentres."
          chipColor="secondary"
        />

        <Grid container spacing={{ xs: 4, lg: 5 }} alignItems="stretch">
          {/* Columna Izquierda (6 cols en pantallas grandes): Imagen, Descripción y Beneficios */}
          <Grid item xs={12} lg={5.5}>
            <Box
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: 4,
                backgroundColor: '#ffffff',
                border: `1.5px solid ${colors.border.light}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Box sx={{ position: 'relative', mb: 2.5 }}>
                  <MedicalImage
                    src="/images/telemedicina.jpg"
                    alt="Consulta médica de telemedicina internacional con la Dra. Nery Betancourt"
                    placeholderTitle="Telemedicina Internacional"
                    placeholderSubtitle="Consulta Médica a Distancia"
                    aspectRatio="16/9"
                    maxHeight={260}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      top: 15,
                      right: 15,
                      backgroundColor: '#ffffff',
                      borderRadius: 3,
                      px: 1.5,
                      py: 0.8,
                      boxShadow: '0 8px 20px rgba(236, 72, 153, 0.15)',
                      border: `1.5px solid ${colors.secondary.light}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                    }}
                  >
                    <Globe size={18} color={colors.secondary.main} />
                    <Typography variant="caption" sx={{ fontWeight: 800, color: colors.secondary.darker }}>
                      USA, Europa & LATAM
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.55rem' },
                    fontWeight: 800,
                    color: colors.text.primary,
                    mb: 1.5,
                    lineHeight: 1.25,
                  }}
                >
                  ¿Vives fuera del país o tienes dificultad de traslado?
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: colors.text.secondary,
                    lineHeight: 1.7,
                    mb: 2.5,
                  }}
                >
                  A través de videoconsulta privada, la Dra. Nery evalúa tus síntomas de reflujo, gastritis o colon irritable,
                  revisa los informes de tus biopsias o análisis previos y te brinda una segunda opinión médica con plan de tratamiento.
                </Typography>

                {/* Beneficios en Grid 6 y 6 */}
                <Grid container spacing={1.2} sx={{ mb: 3 }}>
                  {[
                    'Atención en tu idioma con calidez familiar',
                    'Revisión de informes y análisis del exterior',
                    'Pautas alimenticias y tratamiento guiado',
                    'Horarios de 8:00 AM a 2:00 PM (hora Caracas)',
                  ].map((benefit, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                        <CheckCircle size={16} color={colors.secondary.main} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                        <Typography variant="caption" sx={{ fontWeight: 700, color: colors.text.primary, lineHeight: 1.3 }}>
                          {benefit}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<CalendarMonthIcon />}
                  onClick={onOpenAppointmentModal}
                  sx={{ py: 1.1, fontSize: '0.9rem' }}
                >
                  Agendar Telemedicina
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  component="a"
                  href={getWhatsAppLink('Hola Dra. Nery, resido fuera del país y deseo solicitar una consulta de telemedicina')}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                  sx={{ py: 1.1, fontSize: '0.88rem', whiteSpace: 'nowrap' }}
                >
                  WhatsApp
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Columna Derecha (6 cols en pantallas grandes): 4 Pasos en Grid 2x2 */}
          <Grid item xs={12} lg={6.5}>
            <Box
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: 4,
                backgroundColor: '#ffffff',
                border: `1.5px solid ${colors.border.light}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ mb: 2.5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: colors.text.primary,
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                    mb: 0.5,
                  }}
                >
                  Proceso de tu Consulta Online
                </Typography>
                <Typography variant="caption" sx={{ color: colors.text.muted, display: 'block' }}>
                  4 sencillos pasos para recibir atención médica especializada desde cualquier país.
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {steps.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Card
                        sx={{
                          height: '100%',
                          p: 2,
                          borderRadius: 3,
                          backgroundColor: colors.background.default,
                          border: `1px solid ${colors.border.light}`,
                          transition: 'all 0.25s ease',
                          '&:hover': {
                            borderColor: colors.secondary.light,
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(236, 72, 153, 0.08)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.2 }}>
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
                            <IconComp size={20} />
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 900,
                              color: colors.secondary.light,
                              fontSize: '1.2rem',
                            }}
                          >
                            {item.step}
                          </Typography>
                        </Box>

                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.text.primary, mb: 0.5 }}>
                          {item.title}
                        </Typography>

                        <Typography variant="caption" sx={{ color: colors.text.secondary, lineHeight: 1.5, display: 'block' }}>
                          {item.description}
                        </Typography>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid ${colors.border.light}` }}>
                <Typography variant="caption" sx={{ color: colors.text.muted }}>
                  🔒 Videoconsultas médicas 100% confidenciales a través de plataformas encriptadas seguras.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
