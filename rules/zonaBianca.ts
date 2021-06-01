import {
  ABRUZZO,
  BASILICATA,
  CALABRIA,
  CAMPANIA,
  EMILIA_ROMAGNA,
  FRIULI_VENEZIA_GIULIA,
  LAZIO,
  LIGURIA,
  LOMBARDIA,
  MARCHE,
  MOLISE,
  PIEMONTE,
  PUGLIA,
  SARDEGNA,
  SICILIA,
  TOSCANA,
  TRENTINO_ALTO_ADIGE,
  UMBRIA,
  VALLE_D_AOSTA,
  VENETO,
} from "./Constants";

const zonaBianca = {
  name: {
    it: "⬜ Zona Bianca",
    en: "⬜ White Zone",
  },
  details: [
    {
      it: "🍻 Bar e ristoranti aperti.",
      en: "🍻 Bars and restaurants open.",
    },
    {
      it: "🛍 Negozi aperti.",
      en: "🛍 Shops are open.",
    },
    {
      it: "🛏 Nessun coprifuoco.",
      en: "🛏 No curfew.",
    },
    {
      it:
        "📝 Puoi muoverti liberamente nella tua regione. Autocertificazione necessaria per spostamenti verso regione di un altro colore.",
      en:
        "📝 Free to move inside you region. Self-certification is needed to move to a differently-coloured region.",
    },
  ],
};

export default [
  {
    ...zonaBianca,
    from: "2021/06/01 00:00:00",
    to: "2021/06/06 23:59:59",
    regions: [FRIULI_VENEZIA_GIULIA, MOLISE, SARDEGNA],
    cities: [],
  },
];
