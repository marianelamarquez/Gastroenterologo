import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Clock } from 'lucide-react';
import { colors } from '../theme/colors';
import { doctorInfo, getWhatsAppLink } from '../data/doctorInfo';

export default function AppointmentCTA({ onOpenAppointmentModal }) {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 6.5 },
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
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -60,
          left: -60,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Chip
          icon={<Clock size={14} color="#6EE7B7" />}
          label={`Horario: ${doctorInfo.schedule}`}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontWeight: 700,
            fontSize: '0.82rem',
            mb: 3,
            px: 1,
            py: 0.5,
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.6rem', md: '3.1rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Tu bienestar digestivo no puede esperar. Recupera tu tranquilidad hoy.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: colors.primary.light,
            fontSize: { xs: '1.05rem', md: '1.2rem' },
            lineHeight: 1.7,
            maxWidth: 680,
            mx: 'auto',
            mb: 4.5,
          }}
        >
          Agenda tu consulta presencial o videoconsulta de telemedicina con la <strong>{doctorInfo.name}</strong>.
          Atención ética, cálida y con los más altos estándares médicos.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<CalendarMonthIcon />}
            onClick={onOpenAppointmentModal}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.05rem',
              fontWeight: 800,
              boxShadow: '0 8px 25px rgba(236, 72, 153, 0.4)',
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Solicitar Cita Médica
          </Button>

          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<WhatsAppIcon />}
            component="a"
            href={getWhatsAppLink('Hola Dra. Nery, deseo agendar una consulta médica')}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              px: 3.5,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 700,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#1EBE5D',
              },
            }}
          >
            Escribir por WhatsApp
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
