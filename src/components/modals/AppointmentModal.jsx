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
  Grid,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Alert,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Clock, Video, Building2, CheckCircle2 } from 'lucide-react';
import { colors } from '../../theme/colors';
import { doctorInfo } from '../../data/doctorInfo';

const procedureOptions = [
  'Consulta Médica General (Digestiva)',
  'Gastroscopia (Endoscopia Superior)',
  'Colonoscopia Total',
  'Rectoscopia',
  'Polipectomía Endoscópica',
  'CPRE (Vías Biliares y Páncreas)',
  'Segunda Opinión Médica',
  'Otro motivo / Chequeo preventivo',
];

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
    email: '',
    modality: 'presencial', // 'presencial' o 'telemedicina'
    procedure: 'Consulta Médica General (Digestiva)',
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
*Modalidad:* ${formData.modality === 'presencial' ? '🏥 Presencial en Consultorio' : '💻 Telemedicina (Online)'}
*Servicio / Motivo:* ${formData.procedure}
*Fecha deseada:* ${formData.preferredDate || 'A coordinar'}
*Horario preferido:* ${formData.preferredTime} (Horario regular: 8am a 2pm)
*Síntomas o notas:* ${formData.notes || 'Ninguna'}
----------------------------------------
_Enviado desde la página web de la Dra. Nery Betancourt_`;

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
          p: { xs: 1, sm: 2 },
          background: '#ffffff',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: colors.text.primary, fontSize: { xs: '1.25rem', sm: '1.45rem' } }}>
            Solicitar Cita Médica
          </Typography>
          <Typography variant="caption" sx={{ color: colors.primary.main, fontWeight: 600 }}>
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

      <DialogContent dividers sx={{ borderColor: colors.border.light, py: 2.5 }}>
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
              sx={{ px: 4, py: 1.2 }}
            >
              Entendido
            </Button>
          </Box>
        ) : (
          <form id="appointment-form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Modalidad de atención */}
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel
                    component="legend"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: colors.text.primary,
                      mb: 1,
                    }}
                  >
                    ¿Qué tipo de atención necesitas?
                  </FormLabel>
                  <RadioGroup
                    row
                    name="modality"
                    value={formData.modality}
                    onChange={handleChange}
                    sx={{ gap: 1 }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        p: 1.2,
                        borderRadius: 3,
                        border: `1.5px solid ${formData.modality === 'presencial' ? colors.primary.main : colors.border.light}`,
                        backgroundColor: formData.modality === 'presencial' ? colors.primary.lighter : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => setFormData((p) => ({ ...p, modality: 'presencial' }))}
                    >
                      <FormControlLabel
                        value="presencial"
                        control={<Radio size="small" />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <Building2 size={16} color={colors.primary.main} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              Presencial (Consultorio)
                            </Typography>
                          </Box>
                        }
                      />
                    </Box>

                    <Box
                      sx={{
                        flex: 1,
                        p: 1.2,
                        borderRadius: 3,
                        border: `1.5px solid ${formData.modality === 'telemedicina' ? colors.secondary.main : colors.border.light}`,
                        backgroundColor: formData.modality === 'telemedicina' ? colors.secondary.lighter : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => setFormData((p) => ({ ...p, modality: 'telemedicina' }))}
                    >
                      <FormControlLabel
                        value="telemedicina"
                        control={<Radio size="small" color="secondary" />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <Video size={16} color={colors.secondary.main} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              Telemedicina (Exterior)
                            </Typography>
                          </Box>
                        }
                      />
                    </Box>
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Nombre Completo */}
              <Grid item xs={12} sm={6}>
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
              </Grid>

              {/* Teléfono / WhatsApp */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Teléfono o WhatsApp"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej. +58 412 1234567"
                  size="small"
                  helperText="Para confirmar horario de cita"
                />
              </Grid>

              {/* Procedimiento o Motivo */}
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Procedimiento o Consulta Solicitada"
                  name="procedure"
                  value={formData.procedure}
                  onChange={handleChange}
                  size="small"
                >
                  {procedureOptions.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Fecha Tentativa */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Fecha Tentativa"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  inputProps={{
                    min: new Date().toISOString().split('T')[0],
                  }}
                />
              </Grid>

              {/* Horario Preferido (8am a 2pm) */}
              <Grid item xs={12} sm={6}>
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
              </Grid>

              {/* Síntomas o notas adicionales */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2.5}
                  label="Motivo de consulta o síntomas principales (Opcional)"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ej. Siento ardor frecuente en la boca del estómago y deseo realizarme una gastroscopia..."
                  size="small"
                />
              </Grid>
            </Grid>
          </form>
        )}
      </DialogContent>

      {!submitted && (
        <DialogActions sx={{ p: 2.5, justifyContent: 'space-between' }}>
          <Button onClick={onClose} sx={{ color: colors.text.secondary }}>
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
              px: 3,
              py: 1,
              fontWeight: 700,
              '&:hover': {
                backgroundColor: '#1EBE5D',
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
