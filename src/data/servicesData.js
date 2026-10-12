/**
 * SERVICIOS Y PROCEDIMIENTOS MÉDICOS
 * Incluye los procedimientos específicos solicitados:
 * Gastroscopia, Colonoscopia, Rectoscopia, Polipectomías, CPRE, Consulta Presencial y Telemedicina.
 */

export const servicesData = [ 
  {
    id: 'consulta-presencial',
    title: 'Consulta Médica de Gastroenterología',
    tag: 'Atención Clínica Personalizada',
    colorTheme: 'secondary',
    shortDescription: 'Evaluación integral, historia clínica detallada y plan de tratamiento médico para todo tipo de malestares digestivos.',
    detailedDescription: 'Diagnóstico y manejo clínico de reflujo gastroesofágico, gastritis crónica, síndrome de intestino irritable (colon irritable), hígado graso, dispepsia funcional e intolerancias alimentarias.',
    indications: [
      'Ardor, pesadez y distensión abdominal recurrente',
      'Estreñimiento crónico o diarreas frecuentes',
      'Control de hígado graso y esteatosis hepática',
      'Chequeo médico digestivo general y segunda opinión médica',
    ],
    preparationTime: 'Traer estudios previos y lista de medicamentos',
    duration: '30 – 45 minutos de consulta ',
  },
  {
    id: 'gastroscopia',
    title: 'Gastroscopia (Endoscopia Superior)',
    tag: 'Procedimiento Diagnóstico y Terapéutico',
    colorTheme: 'primary', // azul cielo
    shortDescription: 'Exploración visual minuciosa del esófago, estómago y duodeno mediante videoendoscopio de alta resolución.',
    detailedDescription: 'Permite diagnosticar con certeza causas de ardor, reflujo, dolor en la boca del estómago, úlceras, gastritis por Helicobacter pylori y lesiones gástricas tempranas. Se realiza bajo sedación confortable y supervisada.',
    indications: [
      'Reflujo persistente y acidez estomacal',
      'Dolor epigástrico o indigestión crónica',
      'Dificultad o dolor al tragar (disfagia)',
      'Detección de Helicobacter pylori con biopsia',
    ],
    preparationTime: 'Ayuno de 8 horas previas',
    duration: '15 – 20 minutos (ambulatorio)',
  },
  {
    id: 'colonoscopia',
    title: 'Colonoscopia Total',
    tag: 'Prevención & Detección Oportuna',
    colorTheme: 'accent', // verde menta
    shortDescription: 'Estudio preventivo y diagnóstico fundamental para examinar el colon y recto en toda su extensión.',
    detailedDescription: 'Es el estándar de oro mundial para la prevención del cáncer de colon. Permite identificar inflamación, divertículos, sangrados y extirpar pólipos antes de que se conviertan en tumores malignos.',
    indications: [
      'Tamizaje preventivo a partir de los 45 años',
      'Sangrado rectal o heces oscuras',
      'Cambios inexplicables en el ritmo evacuatorio',
      'Antecedentes familiares de pólipos o cáncer colorrectal',
    ],
    preparationTime: 'Dieta líquida y preparación intestinal previa',
    duration: '25 – 35 minutos con sedación suave',
  },
  {
    id: 'rectoscopia',
    title: 'Rectoscopia',
    tag: 'Evaluación Dirigida',
    colorTheme: 'secondary', // rosado
    shortDescription: 'Inspección directa de la mucosa del recto y canal anal para diagnóstico preciso de patologías orificiales.',
    detailedDescription: 'Procedimiento rápido y seguro para evaluar cuadros de proctitis, hemorroides internas, fisuras, pólipos rectales o sangrado fresco al evacuar.',
    indications: [
      'Sangrado rojo rutilante en la evacuación',
      'Sensación de cuerpo extraño o tenesmo rectal',
      'Seguimiento de lesiones rectales conocidas',
      'Sospecha de afecciones inflamatorias rectales',
    ],
    preparationTime: 'Enema evacuante previo según indicación',
    duration: '10 – 15 minutos',
  },
  {
    id: 'polipectomias',
    title: 'Polipectomías Endoscópicas',
    tag: 'Procedimiento Terapéutico',
    colorTheme: 'primary',
    shortDescription: 'Resección endoscópica segura de pólipos en estómago o colon durante el mismo estudio, sin cirugía abierta.',
    detailedDescription: 'Al remover los pólipos y enviarlos a análisis histopatológico, se corta de raíz la progresión a cáncer digestivo. Se realiza de forma ambulatoria con instrumental especializado y mínima molestia.',
    indications: [
      'Pólipos gástricos o colónicos hallados en endoscopia',
      'Prevención activa de malignidad',
      'Control y vigilancia de pólipos resecados previamente',
    ],
    preparationTime: 'Misma preparación que el estudio endoscópico',
    duration: 'Inmediata durante la endoscopia',
  },
  {
    id: 'cpre',
    title: 'CPRE (Colangiopancreatografía Retrógrada)',
    tag: 'Alta Especialidad Endoscópica',
    colorTheme: 'accent',
    shortDescription: 'Técnica avanzada que combina endoscopia y radiología para tratar enfermedades de vías biliares y páncreas.',
    detailedDescription: 'Especializada en resolver obstrucciones biliares causadas por cálculos (litiasis coledociana), estenosis o tumores, permitiendo drenar la bilis y evitar cirugías complejas de vesícula/hígado.',
    indications: [
      'Cálculos en el conducto biliar (coledocolitiasis)',
      'Ictericia obstructiva (coloración amarilla en piel/ojos)',
      'Estenosis de vías biliares o pancreatitis recurrente',
      'Colocación o recambio de prótesis/stent biliar',
    ],
    preparationTime: 'Ayuno estricto y valoración médica previa',
    duration: '30-60 minutos en sala de procedimientos',
  },

];
