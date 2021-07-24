import {
  BASILICATA,
  BOLZANO,
  CALABRIA,
  CAMPANIA,
  EMILIA_ROMAGNA,
  LAZIO,
  LOMBARDIA,
  MARCHE,
  PIEMONTE,
  PUGLIA,
  SICILIA,
  TOSCANA,
  TRENTINO_ALTO_ADIGE,
  VALLE_D_AOSTA,
} from "./Constants";

const commonDetails = [
  {
    it: "🛏 Coprifuoco dalle 24.00 alle 05.00.",
    en: "🛏 Curfew from 12 PM to 5 AM.",
  },
  {
    it:
      "👭 Si può uscire (al massimo in 4 non conviventi) per raggiungere amici e parenti una volta al giorno.",
    en:
      "👭 It is allowed to travel (not more than 4 people at a time) to friends and relatives once a day.",
  },
  {
    it:
      "🍻 Bar e ristoranti aperti, servizio al tavolo anche al chiuso. E' sempre consentito il servizio di consegna a domicilio.",
    en:
      "🍻 Bars and restaurants are open, you are free to sit indoor and outdoor. Home delivery is always allowed.",
  },
  {
    it:
      "🛍 Negozi aperti. Centri commerciali possono aprire durante i festivi e prefestivi.",
    en:
      "🛍 Shops are open. Shopping malls are free to open on holidays and days before holidays.",
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
];
const moreDetails = [
  {
    it:
      "🛫 Puoi muoverti liberamente tra regioni gialle e bianche. Serve il pass verde per recarsi in regioni rosse o arancioni.",
    en:
      "🛫 You can move freely between yellow and white regions. Green-pass is needed to travel to orange or red regions.",
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
    it: "🏋️‍♂️ Riaprono le palestre. Riapronolo le piscine dal 1 Luglio.",
    en: "🏋️‍♂️ Gyms reopen. Pools are open from 1st July.",
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

export default [];
