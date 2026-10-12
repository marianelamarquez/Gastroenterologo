import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Stethoscope, Eye, Scissors, Network, Video, HeartPulse, ArrowRight } from 'lucide-react';
import { colors } from '../theme/colors';
import SectionHeader from '../components/common/SectionHeader';

const coreServices = [
  {
    icon: Stethoscope,
    title: 'Gastroenterología Clínica',
    subtitle: 'Diagnóstico & Tratamiento Médico',
    description: 'Atención experta para acidez estomacal, reflujo gastroesofágico, gastritis por Helicobacter pylori, colon irritable e intolerancias digestivas.',
    color: colors.primary.main,
    bg: colors.primary.lighter,
  },
  {
    icon: Eye,
    title: 'Endoscopia Digestiva Superior',
    subtitle: 'Gastroscopia con Sedación',
    description: 'Visualización detallada en video de alta definición de esófago, estómago y duodeno para detección precisa de úlceras y lesiones.',
    color: colors.secondary.main,
    bg: colors.secondary.lighter,
  },
  {
    icon: HeartPulse,
    title: 'Colonoscopia Total',
    subtitle: 'Prevención del Cáncer de Colon',
    description: 'Inspección completa de colon y recto. Es la herramienta preventiva número uno para extirpar pólipos a tiempo y salvar vidas.',
    color: colors.accent.dark,
    bg: colors.accent.lighter,
  },
  {
    icon: Scissors,
    title: 'Polipectomías Endoscópicas',
    subtitle: 'Tratamiento Ambulatorio',
    description: 'Extracción inmediata y segura de pólipos digestivos durante el mismo estudio, sin necesidad de incisiones quirúrgicas.',
    color: colors.primary.dark,
    bg: colors.primary.lighter,
  },
  {
    icon: Network,
    title: 'CPRE (Vías Biliares y Páncreas)',
    subtitle: 'Alta Especialidad Endoscópica',
    description: 'Solución no invasiva para cálculos atorados en conductos biliares, ictericia y descompresión biliar especializada.',
    color: colors.secondary.dark,
    bg: colors.secondary.lighter,
  },
  {
    icon: Video,
    title: 'Telemedicina Internacional',
    subtitle: 'Atención Médica Sin Fronteras',
    description: 'Videoconsulta dedicada para pacientes fuera del país, revisión de biopsias, exámenes de laboratorio y orientación continua.',
    color: colors.accent.main,
    bg: colors.accent.lighter,
  },
];

export default function Services({ onOpenAppointmentModal }) {
  const scrollToProcedures = () => {
    const el = document.querySelector('#procedimientos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="servicios"
      sx={{
        py: { xs: 4.5, md: 6.5 },
        backgroundColor: colors.background.default,
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <SectionHeader
          chipLabel="Servicios Integrales"
          title="Soluciones Médicas para cada Etapa de tu"
          highlightWord="Salud Digestiva"
          subtitle="Desde chequeos preventivos y consultas clínicas hasta procedimientos terapéuticos avanzados."
          chipColor="primary"
        />

        <Grid container spacing={3.5}>
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 2,
                    borderRadius: 4,
                    border: `1.5px solid ${colors.border.light}`,
                    backgroundColor: '#FFFFFF',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: service.color,
                      transform: 'translateY(-5px)',
                      boxShadow: '0 14px 30px rgba(15, 23, 42, 0.08)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '16px',
                        backgroundColor: service.bg,
                        color: service.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    >
                      <Icon size={26} strokeWidth={2.2} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: colors.text.primary,
                        fontSize: '1.2rem',
                        lineHeight: 1.25,
                        mb: 0.5,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        color: service.color,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        fontSize: '0.74rem',
                        mb: 1.8,
                      }}
                    >
                      {service.subtitle}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>

                  <Box sx={{ p: 2, pt: 0, display: 'flex', alignItems: 'center' }}>
                    <Button
                      variant="text"
                      color="primary"
                      onClick={scrollToProcedures}
                      endIcon={<ArrowRight size={15} />}
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.84rem',
                        p: 0,
                        color: colors.primary.main,
                        '&:hover': { background: 'transparent', textDecoration: 'underline' },
                      }}
                    >
                      Ver procedimiento relacionado
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
