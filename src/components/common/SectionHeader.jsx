import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { colors } from '../../theme/colors';

/**
 * Encabezado de sección reutilizable con etiqueta de chip, título y descripción.
 */
export default function SectionHeader({
  chipLabel,
  title,
  highlightWord,
  subtitle,
  align = 'center',
  chipColor = 'primary', // 'primary' (azul), 'secondary' (rosado), 'success' (verde)
}) {
  const isCenter = align === 'center';

  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: 780,
        mx: isCenter ? 'auto' : 0,
        mb: { xs: 2.5, md: 3.5 },
      }}
    >
      {chipLabel && (
        <Chip
          label={chipLabel}
          color={chipColor}
          variant="outlined"
          size="small"
          sx={{
            mb: 1.5,
            px: 1,
            py: 0.5,
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderColor: 
              chipColor === 'primary' 
                ? colors.primary.light 
                : chipColor === 'secondary' 
                ? colors.secondary.light 
                : colors.accent.light,
            backgroundColor:
              chipColor === 'primary' 
                ? colors.primary.lighter 
                : chipColor === 'secondary' 
                ? colors.secondary.lighter 
                : colors.accent.lighter,
            color:
              chipColor === 'primary' 
                ? colors.primary.dark 
                : chipColor === 'secondary' 
                ? colors.secondary.dark 
                : colors.accent.dark,
          }}
        />
      )}

      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.65rem' },
          fontWeight: 800,
          color: colors.text.primary,
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        {title}{' '}
        {highlightWord && (
          <Box
            component="span"
            sx={{
              background: 
                chipColor === 'secondary'
                  ? colors.gradients.secondaryButton
                  : colors.gradients.primaryButton,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {highlightWord}
          </Box>
        )}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: colors.text.secondary,
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
