import {
  ABRUZZO,
  BASILICATA,
  BOLZANO,
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
  TRENTO,
  UMBRIA,
  VALLE_D_AOSTA,
  VENETO
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
    from: "2021/06/20 00:00:00",
    to: "2021/08/30 23:59:59",
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
      TOSCANA,
      MARCHE,
      CAMPANIA,
      BASILICATA,
      CALABRIA,
      SICILIA,
      VALLE_D_AOSTA
    ],
    cities: [TRENTO, BOLZANO]
  }
];
