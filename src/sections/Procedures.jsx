import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
} from '@mui/material';
import {
  Eye,
  HeartPulse,
  Activity,
  Scissors,
  Network,
  Stethoscope,
  Video,
  Clock,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { colors } from '../theme/colors';
import { servicesData } from '../data/servicesData';
import SectionHeader from '../components/common/SectionHeader';

// Íconos representativos para cada procedimiento / servicio
const serviceIcons = {
  gastroscopia: Eye,
  colonoscopia: HeartPulse,
  rectoscopia: Activity,
  polipectomias: Scissors,
  cpre: Network,
  'consulta-presencial': Stethoscope,
  telemedicina: Video,
};

// Subtítulos descriptivos fusionados de la sección de servicios
const serviceSubtitles = {
  gastroscopia: 'Gastroscopia con Sedación Confortable',
  colonoscopia: 'Prevención Activa del Cáncer de Colon',
  rectoscopia: 'Evaluación Dirigida y Mucosa Rectal',
  polipectomias: 'Tratamiento Ambulatorio Sin Cirugía',
  cpre: 'Alta Especialidad en Vías Biliares y Páncreas',
  'consulta-presencial': 'Diagnóstico Clínico Integral & Tratamiento',
  telemedicina: 'Atención Médica Especializada Sin Fronteras',
};

export default function Procedures() {
  const [activeCardId, setActiveCardId] = useState(null);

  // Servicios activos en cuadrícula de 3 columnas (2 filas de 3)
  const displayServices = servicesData.filter((service) => service.id !== 'telemedicina');

  return (
    <Box
      id="procedimientos"
      sx={{
        py: { xs: 3.5, md: 4.5 },
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${colors.border.light}`,
        position: 'relative',
      }}
    >
      {/* Ancla para enlaces que apunten a #servicios */}
      <Box id="servicios" sx={{ position: 'absolute', top: -70 }} />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionHeader
          title="Procedimientos Endoscópicos y"
          highlightWord="Servicios Clínicos"
          subtitle=" "
          chipColor="primary"
        />

        {/* Cuadrícula de 3 columnas en escritorio (filas de 3) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 2, sm: 2.2, md: 2.5 },
            mb: 2.5,
            width: '100%',
          }}
        >
          {displayServices.map((service) => {
            const Icon = serviceIcons[service.id] || Stethoscope;
            const subtitle = serviceSubtitles[service.id];

            const isRose = service.colorTheme === 'secondary';
            const isGreen = service.colorTheme === 'accent';

            const badgeBg = isRose
              ? colors.secondary.lighter
              : isGreen
                ? colors.accent.lighter
                : colors.primary.lighter;

            const badgeColor = isRose
              ? colors.secondary.dark
              : isGreen
                ? colors.accent.dark
                : colors.primary.dark;

            const iconColor = isRose
              ? colors.secondary.main
              : isGreen
                ? colors.accent.main
                : colors.primary.main;

            const isActive = activeCardId === service.id;

            return (
              <Card
                key={service.id}
                elevation={0}
                className={`procedure-card ${isActive ? 'card-active' : ''}`}
                onMouseEnter={() => setActiveCardId(service.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() =>
                  setActiveCardId((prev) => (prev === service.id ? null : service.id))
                }
                sx={{
                  position: 'relative',
                  height: '100%',
                  minHeight: { xs: 250, sm: 260 },
                  display: 'flex',
                  flexDirection: 'column',
                  p: { xs: 1.8, sm: 2 },
                  border: `1.5px solid ${colors.border.light}`,
                  borderRadius: 3,
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover, &.card-active': {
                    borderColor: iconColor,
                    transform: 'translateY(-5px)',
                    boxShadow: `0 12px 28px ${iconColor}18`,
                  },
                  '&:hover .default-view, &.card-active .default-view': {
                    opacity: 0,
                    transform: 'translateY(-10px)',
                    pointerEvents: 'none',
                  },
                  '&:hover .hover-view, &.card-active .hover-view': {
                    opacity: 1,
                    transform: 'translateY(0)',
                    pointerEvents: 'auto',
                  },
                  '&:hover .service-icon-box, &.card-active .service-icon-box': {
                    transform: 'scale(1.08) rotate(3deg)',
                  },
                }}
              >
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Encabezado compacto: Ícono a la izquierda, Tag y Duración apilados a la derecha */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.2,
                      mb: 1.2,
                    }}
                  >
                    <Box
                      className="service-icon-box"
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '10px',
                        backgroundColor: badgeBg,
                        color: iconColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.4, minWidth: 0, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Chip
                          label={service.tag}
                          size="small"
                          sx={{
                            backgroundColor: badgeBg,
                            color: badgeColor,
                            fontWeight: 700,
                            fontSize: '0.68rem',
                            height: 22,
                            borderRadius: 1.5,
                          }}
                        />
                      </Box>

                      {/* Duración debajo del tag para que no se corte */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        <Clock size={12} color={colors.text.muted} style={{ flexShrink: 0 }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.text.secondary,
                            fontWeight: 600,
                            fontSize: '0.71rem',
                            lineHeight: 1.2,
                          }}
                        >
                          {service.duration}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Título Principal */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: colors.text.primary,
                      fontSize: { xs: '1rem', sm: '1.05rem' },
                      lineHeight: 1.25,
                      minHeight: { sm: '2.5rem' },
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      mb: 0.3,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Subtítulo Clínico */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: iconColor,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      fontSize: '0.68rem',
                      mb: 1.2,
                    }}
                  >
                    {subtitle}
                  </Typography>

                  {/* Contenedor dinámico (Alterna Descripción por defecto e Indicaciones en Hover) */}
                  <Box
                    sx={{
                      position: 'relative',
                      flexGrow: 1,
                      minHeight: { xs: 135, sm: 140 },
                    }}
                  >
                    {/* VISTA 1: Por defecto (Sin hover) - Nombre y lo que es en general */}
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
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {service.shortDescription}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          mt: 'auto',
                          pt: 0.8,
                          color: iconColor,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: iconColor,
                            fontWeight: 700,
                            fontSize: '0.7rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.4,
                          }}
                        >
                          Ver indicaciones frecuentes →
                        </Typography>
                      </Box>
                    </Box>

                    {/* VISTA 2: En Hover - Indicaciones frecuentes y preparación */}
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
                        transform: 'translateY(12px)',
                        pointerEvents: 'none',
                      }}
                    >
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            fontWeight: 800,
                            color: colors.text.primary,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            fontSize: '0.68rem',
                            mb: 0.6,
                          }}
                        >
                          Indicaciones frecuentes:
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          {service.indications.slice(0, 3).map((ind, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.8 }}>
                              <Check
                                size={14}
                                color={iconColor}
                                strokeWidth={2.6}
                                style={{ flexShrink: 0, marginTop: 2 }}
                              />
                              <Typography
                                variant="caption"
                                sx={{
                                  color: colors.text.secondary,
                                  fontSize: '0.72rem',
                                  lineHeight: 1.3,
                                  fontWeight: 500,
                                }}
                              >
                                {ind}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Preparación Requerida */}
                      <Box
                        sx={{
                          mt: 0.8,
                          p: 0.6,
                          px: 0.9,
                          borderRadius: 1.5,
                          backgroundColor: colors.background.subtle,
                          border: `1px solid ${colors.border.light}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.8,
                        }}
                      >
                        <ShieldCheck size={14} color={colors.accent.dark} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.text.secondary,
                            fontWeight: 600,
                            fontSize: '0.69rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {service.preparationTime}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Banner informativo de sedación compacto */}
        <Box
          sx={{
            mt: 2.5,
            p: 1.5,
            px: 2,
            borderRadius: 2.5,
            background: colors.gradients.hero,
            border: `1.5px dashed ${colors.primary.light}`,
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              backgroundColor: colors.accent.main,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={20} />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: colors.text.primary, lineHeight: 1.2 }}>
              Sedación Supervisada y Monitoreada
            </Typography>
            <Typography variant="caption" sx={{ color: colors.text.secondary, fontSize: '0.78rem', display: 'block' }}>
              Todos los estudios de endoscopia y colonoscopia se efectúan con sedación indolora y confortable.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
