import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import theme from './theme/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import AppointmentModal from './components/modals/AppointmentModal';

import Hero from './sections/Hero';
import About from './sections/About';
import Procedures from './sections/Procedures';
import Telemedicine from './sections/Telemedicine';
import Symptoms from './sections/Symptoms';
import ScheduleAndLocation from './sections/ScheduleAndLocation';
import FAQ from './sections/FAQ';
import AppointmentCTA from './sections/AppointmentCTA';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
        }}
      >
        {/* Barra de Navegación con Horarios y Enlaces */}
        <Navbar />

        {/* Contenido Principal de la Landing Page */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* 1. Portada Principal / Hero con Foto y Estadísticas */}
          <Hero />

          {/* 3. Procedimientos Endoscópicos y Servicios Especializados */}
          <Procedures />

          {/* 5. Telemedicina Especializada para Pacientes en el Exterior */}
          {/*   <Telemedicine onOpenAppointmentModal={handleOpenAppointmentModal} /> */}

          {/* 6. Guía de Síntomas Digestivos (¿Cuándo acudir?) */}
          <Symptoms />

          {/* 7. Horarios (8am a 2pm previa cita) y Ubicación del Consultorio */}
          <ScheduleAndLocation />

          {/* 8. Preguntas Frecuentes (FAQ sobre sedación, preparación, citas) */}
          <FAQ />
        </Box>

        {/* Pie de Página con Enlaces y Aviso Médico */}
        <Footer />

        {/* Botón Flotante de WhatsApp con Efecto Pulso */}
        {/*   <WhatsAppFloat />*/}

      </Box>
    </ThemeProvider>
  );
}
