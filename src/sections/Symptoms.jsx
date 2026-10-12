import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import { Flame, Wind, Activity, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { colors } from '../theme/colors';
import { symptomsData } from '../data/symptomsData';
import SectionHeader from '../components/common/SectionHeader';

const iconMap = {
  flame: Flame,
  wind: Wind,
  activity: Activity,
  'alert-circle': AlertCircle,
  clock: Clock,
  'shield-check': ShieldCheck,
};

export default function Symptoms({ onOpenAppointmentModal }) {
  return (
    <Box
      id="sintomas"
      sx={{
        py: { xs: 4.5, md: 6.5 },
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <SectionHeader
          chipLabel="Guía Médica Educativa"
          title="¿Cuándo deberías consultar con un"
          highlightWord="Gastroenterólogo?"
          subtitle="Identificar las señales a tiempo permite tratar los problemas estomacales e intestinales con mayor efectividad y evitar complicaciones."
          chipColor="primary"
        />

        <Grid container spacing={2.5}>
          {symptomsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Activity;
            const isAlert = item.icon === 'alert-circle';

            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 1,
                    borderRadius: 3.5,
                    border: `1.5px solid ${isAlert ? colors.secondary.light : colors.border.light}`,
                    backgroundColor: isAlert ? colors.secondary.lighter : '#ffffff',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: colors.primary.main,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 24px rgba(2, 136, 209, 0.09)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 1.5 }}>
                    {/* Encabezado Horizontal: Icono + Título al lado */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '10px',
                          backgroundColor: isAlert ? colors.secondary.main : colors.primary.lighter,
                          color: isAlert ? '#ffffff' : colors.primary.main,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={20} />
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 800,
                          color: colors.text.primary,
                          fontSize: '1.02rem',
                          lineHeight: 1.25,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        lineHeight: 1.55,
                        mb: 1.8,
                        fontSize: '0.86rem',
                        minHeight: 40,
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: isAlert ? '#ffffff' : colors.background.subtle,
                        mb: 1.2,
                      }}
                    >
                      <Typography variant="caption" sx={{ display: 'block', color: colors.text.muted, fontSize: '0.72rem' }}>
                        Posible causa: <strong>{item.potentialCondition}</strong>
                      </Typography>
                    </Box>

                    <Chip
                      label={item.recommendedService}
                      size="small"
                      sx={{
                        backgroundColor: colors.primary.lighter,
                        color: colors.primary.dark,
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        borderRadius: 1.5,
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
