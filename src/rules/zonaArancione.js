import { ALL_REGIONS, CALABRIA, EMILIA_ROMAGNA, LOMBARDIA, SICILIA, VENETO } from './Constants'

const zonaArancione = {
  name: '🟧 Zona Arancione',
  details: [
    '🚫 Bar e ristoranti chiusi tranne che per asporto.',
    '🛍 Negozi aperti.',
    '❌ Centri commerciali chiusi.',
    "📝 Serve l'autocertificazione per gli spostamenti al di fuori del comune.",
    '🌎 Puoi andare nella seconda casa ma solo se nella tua regione.',
    '🚫 Non si possono superare i confini della regione.',
  ],
  moreDetails: [
    '👭 Si può uscire dal comune per comprovate esigenze di lavoro, di studio, di salute o situazione di necessità.',
    '🛒 Si può uscire dal comune per fruire di servizi altrimenti non disponibili o economicamente più convenienti.',
    '🏚 Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.',
    '⛪ Consentito l\' accesso ai luoghi di culto e funzioni religiose.',
    '🏃 Consentito svolgere attività sportiva e motoria all\'aperto, senza uscire dal comune.',
  ],
}

export default [
  {
    ...zonaArancione,
    from: '2021/01/09 00:00:00',
    to: '2021/01/10 23:59:59',
    regions: ALL_REGIONS,
  },
  {
    ...zonaArancione,
    from: '2021/01/11 00:00:00',
    to: '2021/01/15 23:59:59',
    regions: [LOMBARDIA, VENETO, EMILIA_ROMAGNA, CALABRIA, SICILIA],
  },
]
