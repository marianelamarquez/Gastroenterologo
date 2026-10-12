import React from 'react';
import { Box, Container, Typography, Card, Button, Chip } from '@mui/material';
import { Clock, MapPin, ExternalLink } from 'lucide-react';
import { colors } from '../theme/colors';
import { doctorInfo } from '../data/doctorInfo';

export default function ScheduleAndLocation() {
  return (
    <Box
      id="ubicacion"
      sx={{
        py: { xs: 4.5, md: 6 },
        background: `linear-gradient(135deg, ${colors.primary.darker} 0%, #0369A1 60%, #0C4A6E 100%)`,
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Círculos de luz decorativos de fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -60,
          left: -60,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 3.5, md: 5 },
            alignItems: 'center',
          }}
        >
          {/* Lado Izquierdo: Horario de atención como texto estilizado sin card */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <Chip
                icon={<Clock size={14} color="#6EE7B7" />}
                label="Horario de Atención"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  px: 0.8,
                }}
              />
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.4rem' },
                lineHeight: 1.15,
                color: '#FFFFFF',
                mb: 0.8,
              }}
            >
              Lunes a Viernes
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.1rem' },
                lineHeight: 1.1,
                background: 'linear-gradient(90deg, #FFFFFF 0%, #6EE7B7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                mb: 1.5,
              }}
            >
              8:00 AM – 2:00 PM
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip
                label="Previa Cita"
                size="small"
                sx={{
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  color: '#6EE7B7',
                  border: '1px solid rgba(110, 231, 183, 0.35)',
                  fontWeight: 700,
                  fontSize: '0.74rem',
                  borderRadius: 1.5,
                }}
              />
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.8rem' }}>
                Atención puntual y personalizada
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.82)',
                lineHeight: 1.65,
                fontSize: { xs: '0.92rem', sm: '0.98rem' },
                maxWidth: 480,
              }}
            >
              Consultas y procedimientos digestivos programados con dedicación para garantizar tu confort, privacidad y bienestar sin tiempos de espera.
            </Typography>
          </Box>

          {/* Lado Derecho: Tarjeta de Dirección */}
          <Card
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: 3.5,
              backgroundColor: '#FFFFFF',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.22)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '12px',
                    backgroundColor: colors.primary.lighter,
                    color: colors.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.text.primary, lineHeight: 1.2 }}>
                    Dirección del Consultorio
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.text.muted }}>
                    {doctorInfo.location.city}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: colors.text.primary, mb: 0.5, fontSize: '1.05rem' }}>
                {doctorInfo.location.clinicName}
              </Typography>

              <Typography variant="body2" sx={{ color: colors.text.secondary, mb: 0.8, lineHeight: 1.5, fontSize: '0.88rem' }}>
                {doctorInfo.location.address}
              </Typography>

              <Typography variant="caption" sx={{ color: colors.text.muted, display: 'block', mb: 2.5 }}>
                {doctorInfo.location.reference}
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<MapPin size={18} />}
              endIcon={<ExternalLink size={15} />}
              component="a"
              href={doctorInfo.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                py: 1.2,
                fontWeight: 700,
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(2, 136, 209, 0.25)',
                '&:hover': {
                  boxShadow: '0 6px 18px rgba(2, 136, 209, 0.35)',
                },
              }}
            >
              Ver Ubicación en Google Maps
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
