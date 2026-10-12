import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { Activity, Clock, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';
import { colors } from '../theme/colors';
import { servicesData } from '../data/servicesData';
import SectionHeader from '../components/common/SectionHeader';

export default function Procedures({ onOpenAppointmentModal }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'Todos los Procedimientos' },
    { id: 'endoscopia', label: 'Endoscopia & Colonoscopia' },
    { id: 'avanzados', label: 'Polipectomías & CPRE' },
    { id: 'consultas', label: 'Consultas & Telemedicina' },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'endoscopia') {
      return ['gastroscopia', 'colonoscopia', 'rectoscopia'].includes(service.id);
    }
    if (selectedFilter === 'avanzados') {
      return ['polipectomias', 'cpre'].includes(service.id);
    }
    if (selectedFilter === 'consultas') {
      return ['consulta-presencial', 'telemedicina'].includes(service.id);
    }
    return true;
  });

  return (
    <Box
      id="procedimientos"
      sx={{
        py: { xs: 4.5, md: 6.5 },
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <SectionHeader
          chipLabel="Especialidades & Estudios"
          title="Procedimientos Endoscópicos y"
          highlightWord="Clínicos Especializados"
          subtitle="Equipamiento de alta resolución y sedación supervisada para estudios seguros, precisos y sin dolor."
          chipColor="primary"
        />

        {/* Filtros rápidos de procedimientos */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            flexWrap: 'wrap',
            mb: 4,
          }}
        >
          {filterOptions.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setSelectedFilter(filter.id)}
              sx={{
                px: 2.5,
                py: 0.6,
                fontSize: '0.85rem',
                borderRadius: 30,
                ...(selectedFilter !== filter.id && {
                  borderColor: colors.border.light,
                  color: colors.text.secondary,
                  '&:hover': {
                    borderColor: colors.primary.main,
                    backgroundColor: colors.primary.lighter,
                  },
                }),
              }}
            >
              {filter.label}
            </Button>
          ))}
        </Box>

        {/* Listado de Tarjetas en Grid 6 y 6 (2 columnas en pantallas medianas y grandes) */}
        <Grid container spacing={3}>
          {filteredServices.map((service) => {
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

            return (
              <Grid item xs={12} md={6} key={service.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 1.2,
                    border: `1.5px solid ${colors.border.light}`,
                    borderRadius: 3.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: isRose
                        ? colors.secondary.light
                        : isGreen
                        ? colors.accent.light
                        : colors.primary.light,
                      boxShadow: '0 10px 25px rgba(2, 136, 209, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    {/* Etiqueta de la categoría */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Chip
                        label={service.tag}
                        size="small"
                        sx={{
                          backgroundColor: badgeBg,
                          color: badgeColor,
                          fontWeight: 700,
                          fontSize: '0.74rem',
                          borderRadius: 2,
                        }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Clock size={14} color={colors.text.muted} />
                        <Typography variant="caption" sx={{ color: colors.text.muted, fontSize: '0.75rem' }}>
                          {service.duration}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Título */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: colors.text.primary,
                        fontSize: '1.25rem',
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Descripción corta */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        lineHeight: 1.7,
                        mb: 2.5,
                        minHeight: 48,
                      }}
                    >
                      {service.shortDescription}
                    </Typography>

                    <Divider sx={{ my: 1.5, borderColor: colors.border.light }} />

                    {/* Indicaciones Clave */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        fontWeight: 700,
                        color: colors.text.primary,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        mb: 1,
                      }}
                    >
                      Indicaciones frecuentes:
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, mb: 2 }}>
                      {service.indications.slice(0, 3).map((ind, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Check
                            size={16}
                            color={isRose ? colors.secondary.main : isGreen ? colors.accent.main : colors.primary.main}
                            style={{ flexShrink: 0, marginTop: 2 }}
                          />
                          <Typography variant="caption" sx={{ color: colors.text.secondary, lineHeight: 1.4 }}>
                            {ind}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Preparación requerida */}
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 2,
                        backgroundColor: colors.background.subtle,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <ShieldCheck size={16} color={colors.accent.dark} />
                      <Typography variant="caption" sx={{ color: colors.text.secondary, fontWeight: 600 }}>
                        {service.preparationTime}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Banner informativo de sedación */}
        <Box
          sx={{
            mt: 3.5,
            p: 2.2,
            borderRadius: 3.5,
            background: colors.gradients.hero,
            border: `1.5px dashed ${colors.primary.light}`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                backgroundColor: colors.accent.main,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={28} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: colors.text.primary, lineHeight: 1.2 }}>
                Sedación Supervisada y Monitoreada
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text.secondary, fontSize: '0.9rem' }}>
                Todos los estudios de endoscopia y colonoscopia se efectúan con sedación indolora y confortable.
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={onOpenAppointmentModal}
            sx={{ whiteSpace: 'nowrap', px: 3, py: 1 }}
          >
            Consultar Disponibilidad
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
