/**
 * INFORMACIÓN GENERAL DE LA DOCTORA Y CONSULTORIO
 * Puedes editar los teléfonos, dirección, redes y biografía aquí directamente.
 */

export const doctorInfo = {
  name: 'Dra. Nery Betancourt',
  specialty: 'Especialista en Gastroenterología y Endoscopia Digestiva',
  title: 'Médico Gastroenterólogo',
  shortBio: 'Especialista con amplia trayectoria dedicada al diagnóstico, tratamiento y prevención de enfermedades del aparato digestivo. Brinda una atención humana, ética y de excelencia tecnológica tanto en consulta presencial como en telemedicina internacional.',
  
  // Horarios de atención especificados por el usuario
  schedule: 'Lunes a Viernes: 8:00 AM – 2:00 PM (Previa Cita)',
  scheduleShort: '8:00 AM – 2:00 PM',
  
  // Ubicación del consultorio (editable fácilmente)
  location: {
    clinicName: 'Centro de Especialidades Anzoátegui',
    address: 'Av. Principal, Planta Baja, Nucleo A, Consultorio 1',
    city: 'Lecheria 6010, Anzoátegui, Venezuela',
    reference: 'Fácil acceso y estacionamiento disponible',
    plusCode: '58G8+7C6, Lechería 6010, Anzoátegui',
    googleMapsUrl: 'https://maps.google.com/?q=58G8%2B7C6,+Lecher%C3%ADa+6010,+Anzo%C3%A1tegui',
  },

  // Contacto y Canales de Atención
  contact: {
    phone: '+58 424-8416096',
    whatsapp: '584248416096', // Sin signos ni espacios para enlace directo api.whatsapp.com
    email: 'contacto@dranerybetancourt.com',
    instagram: '@dra.nerybetancourt',
  },

  // Puntos destacados de confianza
  stats: [
    { value: '+20', label: 'Años de Trayectoria', highlight: 'Experiencia' },
    { value: '+5,000', label: 'Procedimientos Realizados', highlight: 'Seguridad' },
    { value: '100%', label: 'Atención Personalizada', highlight: 'Calidez humana' },
    { value: '8am - 2pm', label: 'Previa Cita', highlight: 'Puntualidad' },
  ],

  // Credenciales y Pilares
  pillars: [
    {
      title: 'Diagnóstico de Alta Precisión',
      description: 'Procedimientos endoscópicos modernos con estándares rigurosos de bioseguridad y bienestar para el paciente.',
    },
    {
      title: 'Trato Cercano y Empático',
      description: 'Escucha activa para entender no solo los síntomas, sino el estilo de vida e inquietudes de cada persona.',
    },
    {
      title: 'Telemedicina sin Fronteras',
      description: 'Consultas especializadas online para personas que residen fuera del país o tienen dificultad de traslado.',
    },
  ],
};

/**
 * Función utilitaria para generar enlace de WhatsApp con mensaje personalizado
 */
export const getWhatsAppLink = (customText = '') => {
  const defaultText = `Hola Dra. Nery Betancourt, me gustaría solicitar información y agendar una cita médica de gastroenterología.`;
  const text = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${doctorInfo.contact.whatsapp}?text=${text}`;
};
