import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { colors } from '../theme/colors';
import { faqData } from '../data/faqData';
import { getWhatsAppLink } from '../data/doctorInfo';
import SectionHeader from '../components/common/SectionHeader';

export default function FAQ() {
  const [expanded, setExpanded] = useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 4.5, md: 6.5 },
        backgroundColor: '#FFFFFF',
        borderBottom: `1px solid ${colors.border.light}`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <SectionHeader
          chipLabel="Claridad & Confianza"
          title="Preguntas Frecuentes sobre"
          highlightWord="Procedimientos y Citas"
          subtitle="Conoce detalles importantes sobre la sedación, preparación previa y cómo agendar tu consulta."
          chipColor="primary"
        />

        {/* Preguntas Frecuentes en Grid de 2 Columnas (6 y 6) */}
        <Grid container spacing={2.5} sx={{ mb: 4 }}>
          {/* Columna Izquierda (3 preguntas) */}
          <Grid item xs={12} md={6}>
            {faqData.slice(0, 3).map((faq, index) => {
              const panelId = `panel${index}`;
              const isCurrentExpanded = expanded === panelId;

              return (
                <Accordion
                  key={index}
                  expanded={isCurrentExpanded}
                  onChange={handleChange(panelId)}
                  sx={{
                    mb: 1.5,
                    borderRadius: '14px !important',
                    border: `1.5px solid ${isCurrentExpanded ? colors.primary.light : colors.border.light}`,
                    boxShadow: isCurrentExpanded ? '0 6px 20px rgba(2, 136, 209, 0.08)' : 'none',
                    '&::before': { display: 'none' },
                    transition: 'all 0.25s ease',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: isCurrentExpanded ? colors.primary.main : colors.text.secondary }} />}
                    sx={{
                      px: 2.5,
                      py: 0.8,
                      '& .MuiAccordionSummary-content': { my: 1 },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: isCurrentExpanded ? colors.primary.dark : colors.text.primary,
                        fontSize: '0.94rem',
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        lineHeight: 1.65,
                        fontSize: '0.88rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>

          {/* Columna Derecha (3 preguntas) */}
          <Grid item xs={12} md={6}>
            {faqData.slice(3, 6).map((faq, index) => {
              const actualIndex = index + 3;
              const panelId = `panel${actualIndex}`;
              const isCurrentExpanded = expanded === panelId;

              return (
                <Accordion
                  key={actualIndex}
                  expanded={isCurrentExpanded}
                  onChange={handleChange(panelId)}
                  sx={{
                    mb: 1.5,
                    borderRadius: '14px !important',
                    border: `1.5px solid ${isCurrentExpanded ? colors.primary.light : colors.border.light}`,
                    boxShadow: isCurrentExpanded ? '0 6px 20px rgba(2, 136, 209, 0.08)' : 'none',
                    '&::before': { display: 'none' },
                    transition: 'all 0.25s ease',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: isCurrentExpanded ? colors.primary.main : colors.text.secondary }} />}
                    sx={{
                      px: 2.5,
                      py: 0.8,
                      '& .MuiAccordionSummary-content': { my: 1 },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: isCurrentExpanded ? colors.primary.dark : colors.text.primary,
                        fontSize: '0.94rem',
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.text.secondary,
                        lineHeight: 1.65,
                        fontSize: '0.88rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>

        {/* Bloque de duda adicional */}
        <Box
          sx={{
            textAlign: 'center',
            p: 3.5,
            borderRadius: 4,
            backgroundColor: colors.primary.lighter,
            border: `1px solid ${colors.primary.light}`,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, color: colors.primary.darker, mb: 1 }}>
            ¿Tienes alguna otra duda o consulta especial?
          </Typography>
          <Typography variant="body2" sx={{ color: colors.text.secondary, mb: 2.5, maxWidth: 500, mx: 'auto' }}>
            Escríbenos con toda confianza. Te responderemos personalmente para brindarte toda la información que necesitas.
          </Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            component="a"
            href={getWhatsAppLink('Hola Dra. Nery, tengo una pregunta antes de agendar mi consulta')}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              px: 3.5,
              py: 1.2,
              fontWeight: 700,
              '&:hover': { backgroundColor: '#1EBE5D' },
            }}
          >
            Hacer una Pregunta por WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
