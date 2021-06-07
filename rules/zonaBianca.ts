import {
  ABRUZZO,
  FRIULI_VENEZIA_GIULIA,
  LIGURIA,
  MOLISE,
  SARDEGNA,
  UMBRIA,
  VENETO,
} from "./Constants";

const zonaBianca = {
  name: {
    it: "⬜ Zona Bianca",
    en: "⬜ White Zone",
  },
  details: [
    {
      it: "🛏 Nessun coprifuoco.",
      en: "🛏 No curfew.",
    },
    {
      it: "🍻 Bar e ristoranti aperti.",
      en: "🍻 Bars and restaurants open.",
    },
    {
      it: "🛍 Negozi aperti.",
      en: "🛍 Shops are open.",
    },
    {
      it: "🏋️‍♂️ Palestre e piscine sono aperte.",
      en: "🏋️‍♂️ Gyms and pools are open.",
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
    from: "2021/06/07 00:00:00",
    to: "2021/06/13 23:59:59",
    regions: [
      LIGURIA,
      VENETO,
      FRIULI_VENEZIA_GIULIA,
      UMBRIA,
      ABRUZZO,
      MOLISE,
      SARDEGNA,
    ],
    cities: [],
  },
];
