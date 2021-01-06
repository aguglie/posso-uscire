import { ALL_REGIONS } from './Constants'

const zonaRossa = {
  name: '🟥 Zona Rossa',
  details: [
    '🚫 Bar, ristoranti e negozi chiusi tranne che per asporto.',
    '👭 Si può uscire (in coppia) dal proprio comune per raggiungere amici e parenti una volta al giorno. Senza cambiare regione.',
    '🛏 Coprifuoco dalle 22.00 alle 05.00.',
    "📝 Serve l'autocertificazione per qualsiasi spostamento.",
  ],
}

export default [
  {
    name: '🟥 Epifania',
    details: zonaRossa.details,
    from: '2021/01/05 00:00:00',
    to: '2021/01/06 23:59:59',
    regions: ALL_REGIONS,
  },
]
