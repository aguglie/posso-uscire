import { ALL_REGIONS } from './Constants'

const zonaGialla = {
  name: '🟨 Zona Gialla',
  details: [
    '🍻 Riaprono bar e ristoranti fino alle 18.',
    '🚫 Non si possono superare i confini della regione.',
    '📝 Ci si può muovere senza autocertificazione.',
  ],
}

export default [
  {
    name: '🟨 Zona Gialla rafforzata',
    details: zonaGialla.details,
    from: '2021/01/07 00:00:00',
    to: '2021/01/08 23:59:59',
    regions: ALL_REGIONS,
  },
]
