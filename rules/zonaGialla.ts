import {
  ABRUZZO,
  CAMPANIA,
  EMILIA_ROMAGNA,
  FRIULI_VENEZIA_GIULIA,
  LAZIO,
  LIGURIA,
  LOMBARDIA,
  MARCHE,
  MOLISE,
  PIEMONTE,
  TOSCANA,
  TRENTINO_ALTO_ADIGE,
  UMBRIA,
  VENETO,
} from "./Constants";

const commonDetails = [
  {
    it:
      "👭 Si può uscire (al massimo in 4 non conviventi) per raggiungere amici e parenti una volta al giorno.",
    en:
      "👭 It is allowed to travel (not more than 4 people at a time) to friends and relatives once a day.",
  },
  {
    it:
      "🍻 Bar e ristoranti aperti, servizio al tavolo solo se all'aperto. E' sempre consentito il servizio di consegna a domicilio.",
    en:
      "🍻 Bars and restaurants are open, you are free to sit only outdoors. Home delivery is always allowed.",
  },
  {
    it: "🛍 Negozi aperti.",
    en: "🛍 Shops are open.",
  },
  {
    it: "❌ Centri commerciali chiusi durante i festivi e prefestivi.",
    en: "❌ Shopping malls are closed on holidays and days before holidays.",
  },
  {
    it: "🛏 Coprifuoco dalle 22.00 alle 05.00.",
    en: "🛏 Curfew from 10 PM to 5 AM.",
  },
  {
    it:
      "❇️ Musei aperti dal Lunedì al Venerdì. Biblioteche aperte. Altri luoghi della cultura chiusi.",
    en:
      "❇️ Museums open from Monday to Friday. Libraries are open. Other culture-related places are closed.",
  },
  {
    it:
      "📝 Ci si può muovere liberamente, senza autocertificazione all'interno della regione.",
    en:
      "📝 It is allowed to have shifts without carrying the self-certification inside your region.",
  },
  {
    it:
      "⛔️ Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessità o motivi di salute.",
    en:
      "⛔️ It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons.",
  },
];
const moreDetails = [
  {
    it: "🛫 Puoi muoverti liberamente tra regioni gialle e bianche.",
    en: "🛫 You can move freely between yellow and white regions.",
  },
  {
    it:
      "🏚 Consentito sempre il rientro alla propria residenza, domicilio o abitazione. Puoi recarti nella seconda casa, anche se fuori regione se acquistata prima del 14/01/2021.",
    en:
      "🏚 Always allowed to return to one's residence, domicile or home. You can go to the second home, even if outside the region if purchased before 14/01/2021.",
  },
  {
    it: "🎭 Aperti cinema e teatri. E' possibile partecipare a concerti.",
    en: "🎭 Cinemas and theaters are open. It is possible to attend concerts.",
  },
  {
    it: "⛪ Consentito l' accesso ai luoghi di culto e funzioni religiose.",
    en: "⛪ It is allowed to access places of worship and religious functions.",
  },
  {
    it: "🏃 Consentito svolgere attività sportiva e motoria all'aperto.",
    en: "🏃 It is allowed to carry out outdoor sports and motor activities.",
  },
];

const zonaGialla = {
  name: {
    it: "🟨 Zona Gialla",
    en: "🟨 Yellow Zone",
  },
  details: commonDetails,
  moreDetails,
};

export default [
  {
    ...zonaGialla,
    from: "2021/04/26 00:00:00",
    to: "2021/05/02 23:59:59",
    regions: [
      PIEMONTE,
      LOMBARDIA,
      TRENTINO_ALTO_ADIGE,
      FRIULI_VENEZIA_GIULIA,
      VENETO,
      LIGURIA,
      EMILIA_ROMAGNA,
      TOSCANA,
      UMBRIA,
      MARCHE,
      LAZIO,
      ABRUZZO,
      MOLISE,
      CAMPANIA,
    ],
    cities: [],
  },
];
