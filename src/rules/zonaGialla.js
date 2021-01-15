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
  TRENTINO_ALTO_ADIGE, TRENTO, UMBRIA, VALLE_D_AOSTA,
} from './Constants'

const commonDetails = [
  {
    'it': '🍻 Bar e ristoranti aperti fino alle 18. Asporto e consegna a domicilio fino alle 22.',
    'en': '🍻 Bar and resturants are open until 6 PM. Take-away and home-delivery available until 10 PM.',
  },
  {
    'it': '🛍 Negozi e centri commerciali aperti.',
    'en': '🛍 Shops and shopping malls are open.',
  },
  {
    'it': '🛏 Coprifuoco dalle 22.00 alle 05.00.',
    'en': '🛏 Curfew from 10 PM to 5 AM.',
  },
  {
    'it': '❇️ Musei aperti dal Lunedì al Venerdì.',
    'en': '❇️  Museums open from Monday to Friday.',
  },
  {
    'it': '📝 Ci si può muovere liberamente, senza autocertificazione.',
    'en': '📝 It is allowed to have shifts without carrying the self-certification.',
  },
  {
    'it': '⛔️ Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessità o motivi di salute.',
    'en': '⛔️ It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons.',
  },
]
const moreDetails = [
  {
    'it': '🏚 Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.',
    'en': '🏚 The return to one\'s residence, domicile or home is allowed, with the exception of second homes outside the region.',
  },
  {
    'it': '⛪ Consentito l\' accesso ai luoghi di culto e funzioni religiose.',
    'en': '⛪ It is allowed to access places of worship and religious functions.',
  },
  {
    'it': '🏃 Consentito svolgere attività sportiva e motoria all\'aperto.',
    'en': '🏃 It is allowed to carry out outdoor sports and motor activities.',
  },
]

// eslint-disable-next-line no-unused-vars
const zonaGialla = {
  name: {
    'it': '🟨 Zona Gialla',
    'en': '🟨 Yellow Zone',
  },
  details: [
    ...commonDetails,
    {
      'it': '✅ Consentiti spostamenti in altre regioni gialle.',
      'en': '✅ Shifts to other yellow regions are allowed.',
    },
  ],
  moreDetails,
}

const zonaGiallaRafforzata = {
  name: {
    'it': '🟨 Zona Gialla Rafforzata',
    'en': '🟨 Strengthened Yellow Zone',
  },
  details: [
    ...commonDetails,
    {
      'it': '🚫 Non si possono superare i confini della regione.',
      'en': '🚫 Shifts towards other regions are not allowed.',
    },
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
  {
    ...zonaGiallaRafforzata,
    from: '2021/01/16 00:00:00',
    to: '2021/02/15 23:59:59',
    regions: [TOSCANA, SARDEGNA, MOLISE, CAMPANIA, BASILICATA],
    cities: [TRENTO],
  },
]
