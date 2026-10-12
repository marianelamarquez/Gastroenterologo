import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  SlidersHorizontal,
  Moon,
  Shield,
  Bell,
  HelpCircle,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import { colors } from '../theme/colors';
import { faqData } from '../data/faqData';
import { getWhatsAppLink } from '../data/doctorInfo';

// Estilos de colores para las etiquetas según la referencia visual
const themeStyles = {
  green: {
    bg: '#ECFDF5',
    text: '#059669',
    border: '#A7F3D0',
  },
  blue: {
    bg: '#F0F9FF',
    text: '#0284C7',
    border: '#BAE6FD',
  },
  sky: {
    bg: '#EFF6FF',
    text: '#2563EB',
    border: '#BFDBFE',
  },
  pink: {
    bg: '#FDF2F8',
    text: '#DB2777',
    border: '#FBCFE8',
  },
  neutral: {
    bg: '#F8FAFC',
    text: '#64748B',
    border: '#E2E8F0',
  },
};

// Ícono temático para cada categoría
const getCategoryIcon = (type) => {
  switch (type) {
    case 'sliders':
      return <SlidersHorizontal size={13} strokeWidth={2.4} />;
    case 'moon':
      return <Moon size={13} strokeWidth={2.4} />;
    case 'shield':
      return <Shield size={13} strokeWidth={2.4} />;
    case 'bell':
      return <Bell size={13} strokeWidth={2.4} />;
    default:
      return <HelpCircle size={13} strokeWidth={2.4} />;
  }
};

export default function FAQ() {
  const [expanded, setExpanded] = useState('colonoscopia-preparacion');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '360px 1fr', lg: '400px 1fr' },
            gap: { xs: 3.5, md: 5, lg: 6 },
            alignItems: 'start',
          }}
        >
          {/* Columna Izquierda: Título y texto explicativo a un lado */}
          <Box sx={{ position: { md: 'sticky' }, top: 90 }}>
            <Chip
              label="Claridad & Confianza"
              size="small"
              sx={{
                mb: 1.5,
                px: 1,
                py: 0.3,
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderColor: colors.primary.light,
                backgroundColor: colors.primary.lighter,
                color: colors.primary.dark,
                border: `1px solid ${colors.primary.light}`,
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.85rem', sm: '2.1rem', md: '2.4rem' },
                fontWeight: 800,
                lineHeight: 1.2,
                color: colors.text.primary,
                mb: 1.5,
              }}
            >
              Preguntas Frecuentes sobre{' '}
              <Box
                component="span"
                sx={{
                  color: colors.primary.main,
                  display: 'inline',
                }}
              >
                Procedimientos y Citas
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                lineHeight: 1.7,
                fontSize: '0.95rem',
                mb: 3,
              }}
            >
              Resolvemos tus principales dudas sobre la preparación, sedación sin dolor y cómo coordinar tu atención médica con tranquilidad.
            </Typography>
          </Box>

          {/* Columna Derecha: Lista de las 4 preguntas estilizadas como en la imagen */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
            {faqData.map((faq) => {
              const panelId = faq.id;
              const isCurrentExpanded = expanded === panelId;
              const chipStyle = themeStyles[faq.categoryTheme] || themeStyles.blue;
              const subtagStyle = themeStyles[faq.subtagTheme] || themeStyles.neutral;

              return (
                <Accordion
                  key={faq.id}
                  expanded={isCurrentExpanded}
                  onChange={handleChange(panelId)}
                  elevation={0}
                  sx={{
                    borderRadius: '18px !important',
                    border: `1.5px solid ${isCurrentExpanded ? colors.primary.light : '#E2E8F0'}`,
                    boxShadow: isCurrentExpanded
                      ? '0 8px 25px rgba(2, 136, 209, 0.08)'
                      : '0 2px 10px rgba(15, 23, 42, 0.02)',
                    backgroundColor: '#FFFFFF',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    '&::before': { display: 'none' },
                    '&:hover': {
                      borderColor: isCurrentExpanded ? colors.primary.light : '#CBD5E1',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: '50%',
                          backgroundColor: '#F1F5F9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background-color 0.2s',
                          '&:hover': { backgroundColor: '#E2E8F0' },
                        }}
                      >
                        <ChevronDown size={18} color="#475569" strokeWidth={2.2} />
                      </Box>
                    }
                    sx={{
                      p: { xs: 2, sm: 2.5 },
                      '& .MuiAccordionSummary-content': {
                        my: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.2,
                        pr: 1,
                      },
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        transition: 'transform 0.25s ease',
                      },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(180deg)',
                      },
                    }}
                  >
                    {/* Fila superior: Badges como en la imagen */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      {/* Badge Principal */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.6,
                          px: 1.2,
                          py: 0.35,
                          borderRadius: '8px',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          backgroundColor: chipStyle.bg,
                          color: chipStyle.text,
                          border: `1px solid ${chipStyle.border}`,
                        }}
                      >
                        {getCategoryIcon(faq.iconType)}
                        <span>{faq.category}</span>
                      </Box>

                      {/* Badge Secundario */}
                      {faq.subtag && (
                        <Box
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            px: 1,
                            py: 0.35,
                            borderRadius: '8px',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            backgroundColor: subtagStyle.bg,
                            color: subtagStyle.text,
                            border: `1px solid ${subtagStyle.border}`,
                          }}
                        >
                          <span>{faq.subtag}</span>
                        </Box>
                      )}
                    </Box>

                    {/* Pregunta */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: colors.text.primary,
                        fontSize: { xs: '0.98rem', sm: '1.04rem' },
                        lineHeight: 1.35,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: { xs: 2, sm: 2.5 }, pb: 2.5, pt: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        lineHeight: 1.65,
                        fontSize: '0.9rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
