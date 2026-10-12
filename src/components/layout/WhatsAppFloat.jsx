import React, { useState } from 'react';
import { Box, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getWhatsAppLink } from '../../data/doctorInfo';

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 30 },
        right: { xs: 20, md: 30 },
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tooltip
        title="¿Dudas o deseas agendar? Escríbenos por WhatsApp"
        placement="left"
        arrow
        TransitionComponent={Zoom}
      >
        <Box
          component="a"
          href={getWhatsAppLink('Hola Dra. Nery Betancourt, deseo información sobre citas y procedimientos de gastroenterología.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar a la Dra. Nery Betancourt por WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            width: { xs: 58, md: 64 },
            height: { xs: 58, md: 64 },
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
            textDecoration: 'none',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transform: hovered ? 'scale(1.1) translateY(-4px)' : 'scale(1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px solid #25D366',
              animation: 'pulseWhatsApp 2s infinite',
              zIndex: -1,
            },
            '@keyframes pulseWhatsApp': {
              '0%': {
                transform: 'scale(0.95)',
                opacity: 0.8,
              },
              '70%': {
                transform: 'scale(1.4)',
                opacity: 0,
              },
              '100%': {
                transform: 'scale(1.4)',
                opacity: 0,
              },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 34, md: 38 } }} />
        </Box>
      </Tooltip>
    </Box>
  );
}
