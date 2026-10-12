import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Stethoscope, UserRound } from 'lucide-react';
import { colors } from '../../theme/colors';

/**
 * Componente de imagen médica con manejo de carga y respaldo visual estilizado.
 * Si la foto real no existe aún, muestra un avatar médico prémium con su correspondiente 'alt'.
 */
export default function MedicalImage({
  src,
  alt,
  width = '100%',
  height = 'auto',
  maxHeight = 520,
  borderRadius = 24,
  aspectRatio = '4/3',
  placeholderTitle = 'Dra. Nery Betancourt',
  placeholderSubtitle = 'Gastroenterólogo y Endoscopista',
  sx = {},
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        height: height,
        maxHeight: maxHeight,
        aspectRatio: aspectRatio,
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        boxShadow: '0 20px 40px -15px rgba(2, 136, 209, 0.18)',
        border: `2px solid ${colors.border.light}`,
        backgroundColor: colors.primary.lighter,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {!hasError && src ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      ) : (
        // Respaldo visual médico en caso de que aún no se haya subido la foto física
        <Box
          role="img"
          aria-label={alt}
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: colors.gradients.hero,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: colors.primary.main,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(2, 136, 209, 0.35)',
              mb: 2.5,
            }}
          >
            <Stethoscope size={52} strokeWidth={2} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              color: colors.primary.darker,
              fontWeight: 800,
              fontSize: { xs: '1.25rem', md: '1.45rem' },
              mb: 0.5,
            }}
          >
            {placeholderTitle}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: colors.secondary.dark,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontSize: '0.78rem',
              mb: 2,
            }}
          >
            {placeholderSubtitle}
          </Typography>

          <Box
            sx={{
              px: 2,
              py: 0.8,
              borderRadius: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: `1px dashed ${colors.primary.light}`,
              maxWidth: '90%',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: colors.text.muted,
                display: 'block',
                fontSize: '0.75rem',
              }}
            >
              <strong>Alt:</strong> {alt}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
