import { ALL_REGIONS } from './Constants'

const zonaArancione = {
  name: '🟧 Zona Arancione',
  details: [
    '🚫 Bar e ristoranti chiusi tranne che per asporto.',
    '🛍 Negozi aperti.',
    '❌ Centri commerciali chiusi.',
    '👭 Si può uscire dal proprio comune per raggiungere amici e parenti una volta al giorno.',
    "📝 Serve l'autocertificazione per gli spostamenti al di fuori del comune.",
    '🌎 Puoi andare nella seconda casa ma solo se nella tua regione.',
    '🚫 Non si possono superare i confini della regione.',
  ],
}

export default [
  {
    ...zonaArancione,
    from: '2021/01/09 00:00:00',
    to: '2021/01/10 23:59:59',
    regions: ALL_REGIONS,
  },
]
