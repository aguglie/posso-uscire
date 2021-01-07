import { ALL_REGIONS } from './Constants'

const zonaRossa = {
  name: '🟥 Zona Rossa',
  details: [
    '🚫 Bar, ristoranti chiusi tranne che per asporto.',
    '🛍 Negozi e mercati chiusi ad esclusione di generi alimentati e prima necessità.',
    '👭 Si può uscire (al massimo in coppia) per raggiungere amici e parenti una volta al giorno. Senza cambiare comune.',
    '🛏 Coprifuoco dalle 22.00 alle 05.00.',
    "📝 Serve l'autocertificazione per qualsiasi spostamento.",
  ],
  moreDetails: [
    '👭 Si può uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessità.',
    '🏚 Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.',
    '⛪ Consentito l\' accesso ai luoghi di culto e funzioni religiose.',
    '🏃 Consentito svolgere attività sportiva (correre) esclusivamente all\'aperto ed individualmente.',
    '🚶 Consentito svolgere attività motoria (camminare) in prossimità della propria abitazione, con mascherina.‍',
    '✅ Aperte edicole, tabaccai, farmacie e parafarmacie.',
  ],
}

export default [
  {
    ...zonaRossa,
    name: '🟥 Epifania',
    from: '2021/01/05 00:00:00',
    to: '2021/01/06 23:59:59',
    regions: ALL_REGIONS,
  },
]
