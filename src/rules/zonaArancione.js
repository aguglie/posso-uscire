import { ALL_REGIONS } from './Constants'

const zonaArancione = {
  name: '🟧 Zona Arancione',
  details: [
    '🚫 Bar, Ristoranti e negozi chiusi tranne che per asporto.',
    '🛍 Negozi aperti.',
    '❌ Centri commerciali chiusi.',
    '🌎 Puoi andare nella seconda casa ma solo se nella tua regione.',
    '👭 Si può uscire dal proprio comune per raggiungere amici e parenti una volta al giorno.',
    "📝 Serve l'autocertificazione per gli spostamenti.",
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
