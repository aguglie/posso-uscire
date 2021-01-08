import {
  ABRUZZO,
  ALL_REGIONS,
  BASILICATA,
  CAMPANIA,
  FRIULI_VENEZIA_GIULIA,
  LAZIO,
  LIGURIA,
  MARCHE,
  MOLISE,
  PIEMONTE,
  PUGLIA,
  SARDEGNA,
  TOSCANA,
  TRENTINO_ALTO_ADIGE, UMBRIA, VALLE_D_AOSTA,
} from './Constants'

const commonDetails = [
  '🍻 Bar e ristoranti aperti fino alle 18. Asporto fino alle 22.',
  '🛍 Negozi e centri commerciali aperti.',
  '🛏 Coprifuoco dalle 22.00 alle 05.00.',
  '📝 Ci si può muovere liberamente, senza autocertificazione.',
]
const moreDetails = [
  '🏚 Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.',
  '⛪ Consentito l\' accesso ai luoghi di culto e funzioni religiose.',
  '🏃 Consentito svolgere attività sportiva e motoria all\'aperto.',
]

// eslint-disable-next-line no-unused-vars
const zonaGialla = {
  name: '🟨 Zona Gialla',
  details: [
    ...commonDetails,
    '✅ Consentiti spostamenti in altre regioni gialle.',
  ],
  moreDetails,
}

const zonaGiallaRafforzata = {
  name: '🟨 Zona Gialla Rafforzata',
  details: [
    ...commonDetails,
    '🚫 Non si possono superare i confini della regione.',
  ],
  moreDetails,
}

export default [
  {
    ...zonaGiallaRafforzata,
    from: '2021/01/07 00:00:00',
    to: '2021/01/08 23:59:59',
    regions: ALL_REGIONS,
  },
  {
    ...zonaGiallaRafforzata,
    from: '2021/01/11 00:00:00',
    to: '2021/01/15 23:59:59',
    regions: [
      PIEMONTE, MARCHE, TOSCANA, CAMPANIA, PUGLIA, TRENTINO_ALTO_ADIGE,
      SARDEGNA, MOLISE, ABRUZZO, LAZIO, LIGURIA, FRIULI_VENEZIA_GIULIA,
      BASILICATA, UMBRIA, VALLE_D_AOSTA,
    ],
  },
]
