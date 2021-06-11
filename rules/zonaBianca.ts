import {
  ABRUZZO,
  EMILIA_ROMAGNA,
  FRIULI_VENEZIA_GIULIA,
  LAZIO,
  LIGURIA,
  LOMBARDIA,
  MOLISE,
  PIEMONTE,
  PUGLIA,
  SARDEGNA,
  TRENTO,
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
  {
    ...zonaBianca,
    from: "2021/06/14 00:00:00",
    to: "2021/06/20 23:59:59",
    regions: [
      LIGURIA,
      VENETO,
      FRIULI_VENEZIA_GIULIA,
      UMBRIA,
      ABRUZZO,
      MOLISE,
      SARDEGNA,
      EMILIA_ROMAGNA,
      LAZIO,
      LOMBARDIA,
      PIEMONTE,
      PUGLIA,
    ],
    cities: [TRENTO],
  },
];
