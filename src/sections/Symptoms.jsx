import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import {
  Flame,
  Wind,
  Activity,
  AlertCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react';
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

// Paleta temática personalizada y badges por síntoma
const symptomThemes = {
  flame: {
    color: '#EA580C',
    bg: '#FFF7ED',
    border: '#FFEDD5',
    badge: 'Gástrico',
  },
  wind: {
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    badge: 'Digestivo',
  },
  activity: {
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    badge: 'Intestinal',
  },
  'alert-circle': {
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FECDD3',
    badge: 'Prioritario',
  },
  clock: {
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#99F6E4',
    badge: 'Crónico',
  },
  'shield-check': {
    color: '#059669',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    badge: 'Prevención',
  },
};

export default function Symptoms() {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <Box
      id="sintomas"
      sx={{
        py: { xs: 2.5, md: 3.5 },
        position: 'relative',
        overflow: 'hidden',
        // Fondo con gradiente radial similar al Hero pero en paleta menta, índigo y cielo sobre blanco suave
        background: `radial-gradient(circle at 12% 18%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
                     radial-gradient(circle at 88% 30%, rgba(99, 102, 241, 0.07) 0%, transparent 45%),
                     radial-gradient(circle at 50% 85%, rgba(2, 136, 209, 0.06) 0%, transparent 40%),
                     #F8FAFC`,
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mb: -1.5 }}>
          <SectionHeader
            chipLabel="Señales de Alerta"
            title="¿Cuándo deberías consultar con un"
            highlightWord="Gastroenterólogo?"
            subtitle="Identifica las señales a tiempo para tratar malestares digestivos con precisión y prevenir complicaciones."
            chipColor="primary"
          />
        </Box>

        {/* Las 6 cards en la misma fila en escritorio (altura ajustada sin espacio muerto) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(6, 1fr)',
            },
            gap: { xs: 1, sm: 1.2, md: 1.2 },
            width: '100%',
          }}
        >
          {symptomsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Activity;
            const theme = symptomThemes[item.icon] || symptomThemes.flame;
            const isAlert = item.icon === 'alert-circle';
            const isActive = activeCardId === idx;

            return (
              <Card
                key={idx}
                elevation={0}
                className={isActive ? 'card-active' : ''}
                onMouseEnter={() => setActiveCardId(idx)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() => setActiveCardId((prev) => (prev === idx ? null : idx))}
                sx={{
                  position: 'relative',
                  height: '100%',
                  minHeight: { xs: 115, sm: 118, md: 122 },
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1.2,
                  borderRadius: 2.5,
                  border: `1.5px solid ${isAlert ? theme.border : '#E2E8F0'}`,
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover, &.card-active': {
                    borderColor: theme.color,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 8px 18px ${theme.color}18`,
                    '& .symptom-icon-box': {
                      transform: 'scale(1.06)',
                    },
                  },
                  '&:hover .symptom-title-view, &.card-active .symptom-title-view': {
                    opacity: 0,
                    transform: 'translateY(-6px)',
                    pointerEvents: 'none',
                  },
                  '&:hover .symptom-desc-view, &.card-active .symptom-desc-view': {
                    opacity: 1,
                    transform: 'translateY(0)',
                    pointerEvents: 'auto',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Encabezado: Ícono compacto + Badge */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 0.8,
                    }}
                  >
                    <Box
                      className="symptom-icon-box"
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '8px',
                        backgroundColor: theme.bg,
                        color: theme.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <IconComponent size={17} strokeWidth={2.2} />
                    </Box>

                    <Chip
                      label={theme.badge}
                      size="small"
                      sx={{
                        backgroundColor: theme.bg,
                        color: theme.color,
                        border: `1px solid ${theme.border}`,
                        fontWeight: 700,
                        fontSize: '0.62rem',
                        height: 19,
                        px: 0.3,
                        borderRadius: 1,
                      }}
                    />
                  </Box>

                  {/* Contenedor interactivo ajustado: Título por defecto, Descripción en hover */}
                  <Box
                    sx={{
                      position: 'relative',
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      minHeight: { xs: 52, sm: 54, md: 56 },
                    }}
                  >
                    {/* VISTA 1: Sin hover (Título) */}
                    <Box
                      className="symptom-title-view"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: 1,
                        transform: 'translateY(0)',
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 800,
                          color: colors.text.primary,
                          fontSize: { xs: '0.82rem', sm: '0.85rem', md: '0.88rem' },
                          lineHeight: 1.2,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>

                    {/* VISTA 2: En hover (Descripción) */}
                    <Box
                      className="symptom-desc-view"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: 0,
                        transform: 'translateY(6px)',
                        pointerEvents: 'none',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.text.secondary,
                          fontSize: { xs: '0.71rem', sm: '0.73rem', md: '0.75rem' },
                          lineHeight: 1.35,
                          fontWeight: 500,
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
