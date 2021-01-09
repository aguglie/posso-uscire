import { ALL_REGIONS } from './Constants'

const zonaRossa = {
  name: '🟥 Zona Rossa',
  details: [
    {
      'it': '🚫 Bar, ristoranti chiusi tranne che per asporto.',
      'en': '🚫 Bar and resturants open just for take-away service.',
    },
    {
      'it': '🛍 Negozi e mercati chiusi ad esclusione di generi alimentati e prima necessità.',
      'en': '🛍 All the shops and markets are closed except for groceries and convinence stores.',
    },
    {
      'it': '👭 Si può uscire (al massimo in coppia) per raggiungere amici e parenti una volta al giorno. Senza cambiare comune.',
      'en': '👭 It is allowed to travel (not more than 2 people at a time) to friends and relatives once a day without changing municipality.',
    },
    {
      'it': '🛏 Coprifuoco dalle 22.00 alle 05.00.',
      'en': '🛏 Curfew from 10 PM to 5 AM.',
    },
    {
      'it': '📝 Serve l\'autocertificazione per qualsiasi spostamento.',
      'en': '📝 Self-certification is needed to justify any shift.',
    },
  ],
  moreDetails: [
    {
      'it': '👭 Si può uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessità.',
      'en': '👭 Shifts across municipalities are allowed for work requirements, health needs, and situations of need.',
    },
    {
      'it': '🏚 Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.',
      'en': '🏚 The return to one\'s residence, domicile or home is allowed, with the exception of second homes outside the region.',
    },
    {
      'it': '⛪ Consentito l\' accesso ai luoghi di culto e funzioni religiose.',
      'en': '⛪ It is allowed to access places of worship and religious functions.',
    },
    {
      'it': '🏃 Consentito svolgere attività sportiva (correre) esclusivamente all\'aperto ed individualmente.',
      'en': '🏃 It is allowed to carry out sports activities (running) exclusively outdoors and individually.',
    },
    {
      'it': '🚶 Consentito svolgere attività motoria (camminare) in prossimità della propria abitazione, con mascherina.‍',
      'en': '🚶 It is allowed to carry out motor activities (walking) near your home, with the mask.',
    },
    {
      'it': '✅ Aperte edicole, tabaccai, farmacie e parafarmacie.',
      'en': '✅ Newsstand, tobacconists, pharmacies, and parapharmacies are open.',
    },
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
