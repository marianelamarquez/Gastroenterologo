/**
 * SÍNTOMAS DE ALERTA DIGESTIVA
 * Guía educativa para que el paciente identifique cuándo acudir al gastroenterólogo
 */

export const symptomsData = [
  {
    icon: 'flame',
    title: 'Acidez y Ardor Frecuente',
    description: 'Sensación de fuego que sube por el pecho, regurgitación ácida o dolor persistente tras comer.',
    potentialCondition: 'Reflujo gastroesofágico, esofagitis o gastritis.',
    recommendedService: 'Gastroscopia / Consulta clínica',
  },
  {
    icon: 'wind',
    title: 'Distensión y Gases Excesivos',
    description: 'Abdomen hinchado con frecuencia, sensación de pesadez que no cede y digestión lenta.',
    potentialCondition: 'Dispepsia funcional, colon irritable o intolerancias.',
    recommendedService: 'Consulta de Gastroenterología',
  },
  {
    icon: 'activity',
    title: 'Cambios en el Tránsito Intestinal',
    description: 'Alternancia entre diarrea y estreñimiento, o dificultad prolongada para evacuar con dolor cólico.',
    potentialCondition: 'Síndrome de intestino irritable o trastornos de motilidad.',
    recommendedService: 'Consulta médica & Colonoscopia si aplica',
  },
  {
    icon: 'alert-circle',
    title: 'Sangrado Digestivo o Heces Oscuras',
    description: 'Presencia de sangre roja visible al evacuar o heces de color negro alquitrán (melena).',
    potentialCondition: 'Pólipos, hemorroides internas, úlceras o lesiones del tubo digestivo.',
    recommendedService: 'Colonoscopia / Rectoscopia urgente',
  },
  {
    icon: 'clock',
    title: 'Dolor Abdominal Persistente',
    description: 'Molestia punzante o sorda en la boca del estómago, debajo de las costillas o en el bajo vientre.',
    potentialCondition: 'Gastritis, cálculos biliares, divertículos o inflamación.',
    recommendedService: 'Evaluación ecográfica y endoscópica',
  },
  {
    icon: 'shield-check',
    title: 'Chequeo Preventivo Mayor de 45 Años',
    description: 'Incluso sin síntomas, el tamizaje temprano salva vidas al detectar y remover pólipos a tiempo.',
    potentialCondition: 'Prevención activa de cáncer colorrectal.',
    recommendedService: 'Colonoscopia preventiva',
  },
];
