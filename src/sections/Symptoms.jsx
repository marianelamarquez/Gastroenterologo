import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import {
  Flame,
  Wind,
  Activity,
  AlertCircle,
  Clock,
  ShieldCheck,
  Stethoscope,
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

// Paleta temática personalizada por síntoma
const symptomThemes = {
  flame: {
    color: '#D97706',
    bg: '#FEF3C7',
    border: '#FDE68A',
    badge: 'Molestia Gástrica',
  },
  wind: {
    color: '#0284C7',
    bg: '#E0F2FE',
    border: '#BAE6FD',
    badge: 'Inflamación',
  },
  activity: {
    color: '#6366F1',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    badge: 'Tránsito Digestivo',
  },
  'alert-circle': {
    color: '#E11D48',
    bg: '#FFE4E6',
    border: '#FECDD3',
    badge: 'Alerta Prioritaria',
  },
  clock: {
    color: '#0D9488',
    bg: '#CCFBF1',
    border: '#99F6E4',
    badge: 'Dolor Recurrente',
  },
  'shield-check': {
    color: '#059669',
    bg: '#D1FAE5',
    border: '#A7F3D0',
    badge: 'Prevención Activa',
  },
};

export default function Symptoms() {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <Box
      id="sintomas"
      sx={{
        py: { xs: 3.5, md: 5 },
        position: 'relative',
        overflow: 'hidden',
        // Fondo con gradiente radial similar al Hero pero en paleta menta, índigo y cielo sobre blanco suave
        background: `radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
                     radial-gradient(circle at 15% 80%, rgba(99, 102, 241, 0.07) 0%, transparent 45%),
                     radial-gradient(circle at 50% 50%, rgba(2, 136, 209, 0.06) 0%, transparent 50%),
                     #F8FAFC`,
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionHeader
          chipLabel="Señales de Alerta"
          title="¿Cuándo deberías consultar con un"
          highlightWord="Gastroenterólogo?"
          subtitle="Identificar las señales a tiempo permite tratar los problemas estomacales e intestinales con mayor efectividad y evitar complicaciones."
          chipColor="primary"
        />

        {/* Cuadrícula compacta de 3 columnas (2 filas de 3) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 2, sm: 2.2 },
            width: '100%',
          }}
        >
          {symptomsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Activity;
            const theme = symptomThemes[item.icon] || symptomThemes.flame;
            const isActive = activeCardId === idx;
            const isAlert = item.icon === 'alert-circle';

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
                  minHeight: { xs: 195, sm: 210 },
                  display: 'flex',
                  flexDirection: 'column',
                  p: { xs: 1.8, sm: 2 },
                  borderRadius: 3,
                  border: `1.5px solid ${isAlert ? theme.border : '#E2E8F0'}`,
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover, &.card-active': {
                    borderColor: theme.color,
                    transform: 'translateY(-5px)',
                    boxShadow: `0 12px 26px ${theme.color}18`,
                  },
                  '&:hover .default-view, &.card-active .default-view': {
                    opacity: 0,
                    transform: 'translateY(-8px)',
                    pointerEvents: 'none',
                  },
                  '&:hover .hover-view, &.card-active .hover-view': {
                    opacity: 1,
                    transform: 'translateY(0)',
                    pointerEvents: 'auto',
                  },
                  '&:hover .symptom-icon-box, &.card-active .symptom-icon-box': {
                    transform: 'scale(1.08) rotate(3deg)',
                  },
                }}
              >
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Encabezado: Ícono temático + Badge */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 1.2,
                    }}
                  >
                    <Box
                      className="symptom-icon-box"
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '10px',
                        backgroundColor: theme.bg,
                        color: theme.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <IconComponent size={20} strokeWidth={2.2} />
                    </Box>

                    <Chip
                      label={theme.badge}
                      size="small"
                      sx={{
                        backgroundColor: theme.bg,
                        color: theme.color,
                        border: `1px solid ${theme.border}`,
                        fontWeight: 700,
                        fontSize: '0.68rem',
                        height: 22,
                        borderRadius: 1.5,
                      }}
                    />
                  </Box>

                  {/* Título del Síntoma */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: colors.text.primary,
                      fontSize: { xs: '0.98rem', sm: '1.03rem' },
                      lineHeight: 1.25,
                      mb: 1,
                      minHeight: { sm: '2.5rem' },
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Contenedor dinámico (Alterna Descripción e Indicación Médica) */}
                  <Box
                    sx={{
                      position: 'relative',
                      flexGrow: 1,
                      minHeight: { xs: 90, sm: 95 },
                    }}
                  >
                    {/* VISTA 1 (Sin Hover): Descripción de cómo se manifiesta */}
                    <Box
                      className="default-view"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: 1,
                        transform: 'translateY(0)',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.text.secondary,
                          fontSize: '0.82rem',
                          lineHeight: 1.5,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {item.description}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          mt: 'auto',
                          pt: 0.6,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.color,
                            fontWeight: 700,
                            fontSize: '0.7rem',
                          }}
                        >
                          Ver evaluación clínica sugerida →
                        </Typography>
                      </Box>
                    </Box>

                    {/* VISTA 2 (En Hover): Posible causa + Estudio recomendado */}
                    <Box
                      className="hover-view"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: 0,
                        transform: 'translateY(10px)',
                        pointerEvents: 'none',
                      }}
                    >
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            fontWeight: 800,
                            color: colors.text.muted,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            fontSize: '0.65rem',
                            mb: 0.3,
                          }}
                        >
                          Posible causa:
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.text.primary,
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            lineHeight: 1.35,
                          }}
                        >
                          {item.potentialCondition}
                        </Typography>
                      </Box>

                      {/* Servicio recomendado */}
                      <Box
                        sx={{
                          mt: 0.8,
                          p: 0.6,
                          px: 1,
                          borderRadius: 1.5,
                          backgroundColor: theme.bg,
                          border: `1px solid ${theme.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.6,
                        }}
                      >
                        <Stethoscope size={13} color={theme.color} style={{ flexShrink: 0 }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.color,
                            fontWeight: 700,
                            fontSize: '0.71rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {item.recommendedService}
                        </Typography>
                      </Box>
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
