import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  MenuItem,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CheckCircle2 } from 'lucide-react';
import { colors } from '../../theme/colors';
import { doctorInfo } from '../../data/doctorInfo';

const timeSlots = [
  '08:30 AM',
  '09:15 AM',
  '10:00 AM',
  '10:45 AM',
  '11:30 AM',
  '12:15 PM',
  '01:00 PM',
  '01:30 PM',
];

export default function AppointmentModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: '09:15 AM',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * ENVÍO POR WHATSAPP (FASE 1) & CONEXIÓN A BASE DE DATOS (FASE 2)
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // =========================================================================
    // GANCHO PARA FASE 2 (BASE DE DATOS / BACKEND MONGODB O POSTGRESQL):
    // Aquí es donde conectarás tu API / backend cuando esté listo:
    // await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(formData) });
    // =========================================================================
    console.log('📌 [Payload para Base de Datos]:', formData);

    // Formatear mensaje profesional de WhatsApp
    const message = `*SOLICITUD DE CITA MÉDICA - DRA. NERY BETANCOURT*
----------------------------------------
*Paciente:* ${formData.fullName}
*Teléfono:* ${formData.phone}
*Fecha deseada:* ${formData.preferredDate || 'A coordinar'}
*Horario preferido:* ${formData.preferredTime} (Horario regular: 8:00 AM a 2:00 PM)
*Motivo o síntomas:* ${formData.notes.trim() || 'Consulta digestiva'}
----------------------------------------
_Enviado desde el portal web de la Dra. Nery Betancourt_`;

    const whatsappUrl = `https://wa.me/${doctorInfo.contact.whatsapp}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Abrir WhatsApp en pestaña nueva
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: { xs: 1, sm: 1.5 },
          background: '#ffffff',
          boxShadow: '0 20px 45px rgba(15, 30, 54, 0.15)',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, color: colors.text.primary, fontSize: { xs: '1.25rem', sm: '1.45rem' } }}
          >
            Solicitar Cita Médica
          </Typography>
          <Typography variant="caption" sx={{ color: colors.primary.main, fontWeight: 600, display: 'block', mt: 0.3 }}>
            Dra. Nery Betancourt • Horarios de 8:00 AM a 2:00 PM
          </Typography>
        </Box>
        <IconButton
          aria-label="Cerrar ventana de agendamiento"
          onClick={onClose}
          sx={{ color: colors.text.secondary }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ borderColor: colors.border.light, py: 3, px: { xs: 2, sm: 3 } }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 4, px: 2 }}>
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                backgroundColor: colors.accent.lighter,
                color: colors.accent.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              <CheckCircle2 size={44} strokeWidth={2.2} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: colors.text.primary }}>
              ¡Solicitud Generada con Éxito!
            </Typography>
            <Typography variant="body1" sx={{ color: colors.text.secondary, mb: 3 }}>
              Se ha abierto WhatsApp con los datos de tu cita para coordinar la confirmación con el consultorio de la <strong>Dra. Nery Betancourt</strong>.
            </Typography>

            <Alert severity="info" sx={{ mb: 3, textAlign: 'left', borderRadius: 3 }}>
              <Typography variant="caption" sx={{ display: 'block', fontWeight: 600 }}>
                Recordatorio importante:
              </Typography>
              <Typography variant="caption">
                Las citas se atienden de Lunes a Viernes entre 8:00 AM y 2:00 PM previa confirmación. Si requieres endoscopia o colonoscopia, te enviaremos por chat las pautas de preparación médica.
              </Typography>
            </Alert>

            <Button
              variant="contained"
              color="primary"
              onClick={handleReset}
              sx={{ px: 4, py: 1.2, borderRadius: 2.5, fontWeight: 700 }}
            >
              Entendido
            </Button>
          </Box>
        ) : (
          <form id="appointment-form" onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {/* FILA 1: Nombre y Teléfono (Juntos y centrados en 2 columnas) */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                  alignItems: 'start',
                }}
              >
                <TextField
                  fullWidth
                  required
                  label="Nombre y Apellido del Paciente"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ej. Carmen Rodríguez"
                  size="small"
                />

                <TextField
                  fullWidth
                  required
                  label="Teléfono o WhatsApp"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej. +58 412 1234567"
                  size="small"
                />
              </Box>

              {/* FILA 2: Fecha y Horario Preferido (Juntos en otra fila) */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                  alignItems: 'start',
                }}
              >
                <TextField
                  fullWidth
                  required
                  type="date"
                  label="Fecha Tentativa"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  slotProps={{
                    inputLabel: { shrink: true },
                    htmlInput: {
                      min: new Date().toISOString().split('T')[0],
                    },
                  }}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    min: new Date().toISOString().split('T')[0],
                  }}
                  size="small"
                />

                <TextField
                  select
                  fullWidth
                  label="Horario Preferido (8am - 2pm)"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  size="small"
                >
                  {timeSlots.map((slot) => (
                    <MenuItem key={slot} value={slot}>
                      {slot}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              {/* FILA 3: Motivo / Mensaje (Completo en otra fila) */}
              <Box sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Motivo de consulta o síntomas principales (Opcional)"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ej. Siento acidez o dolor en la boca del estómago y deseo realizarme una consulta o evaluación preventiva..."
                  size="small"
                />
              </Box>
            </Box>
          </form>
        )}
      </DialogContent>

      {!submitted && (
        <DialogActions sx={{ p: 2.5, pt: 2, justifyContent: 'space-between' }}>
          <Button onClick={onClose} sx={{ color: colors.text.secondary, fontWeight: 600 }}>
            Cancelar
          </Button>

          <Button
            type="submit"
            form="appointment-form"
            variant="contained"
            color="success"
            disabled={isSubmitting}
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              px: { xs: 2.5, sm: 3.5 },
              py: 1.1,
              fontWeight: 700,
              fontSize: '0.92rem',
              borderRadius: 2.5,
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
              '&:hover': {
                backgroundColor: '#1EBE5D',
                boxShadow: '0 6px 18px rgba(37, 211, 102, 0.45)',
              },
            }}
          >
            {isSubmitting ? 'Preparando...' : 'Enviar Solicitud por WhatsApp'}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

