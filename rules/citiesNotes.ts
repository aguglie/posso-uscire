import {
  BERGAMO,
  BOLOGNA,
  BRESCIA,
  COMO,
  FROSINONE,
  RAVENNA,
} from "./Constants";

const title = {
  it: "📣 Restrizioni provinciali",
  en: "📣 Provincial restrictions",
};

function makeText(cities) {
  return {
    it:
      "⚠️ Ulteriori restrizioni attive nelle seguenti zone: " +
      cities.join(", "),
    en:
      "⚠️ Additional restrictions are active in the following towns: " +
      cities.join(", "),
  };
}

export default [
  {
    title,
    text: makeText([
      "Area Metropolitana di Bologna",
      "Imola",
      "Castel San Pietro",
      "Medicina",
      "Mordano",
      "Castel Guelfo",
      "Dozza",
      "Casalfiumanese",
      "Fontanelice",
      "Borgo Tossignano",
      "Castel del Rio.",
    ]),
    from: "2021/02/25 00:00:00",
    to: "2021/03/11 23:59:59",
    cities: [BOLOGNA],
    details: [],
  },
  {
    title,
    text: makeText([
      "Bagnara di Romagna",
      "Conselice",
      "Massa Lombarda",
      "Riolo Terme.",
    ]),
    from: "2021/02/25 00:00:00",
    to: "2021/03/11 23:59:59",
    cities: [RAVENNA],
  },
  {
    title,
    text: {
      it:
        "⚠️ Nella provincia selezionata sono presenti ulteriori restrizioni. Fai riferimento al sito della regione.",
      en:
        "⚠️ There are additional restrictions in the selected town. Refer to the region's website.",
    },
    from: "2021/02/27 00:00:00",
    to: "2021/04/06 23:59:59",
    cities: [BERGAMO, BRESCIA, COMO, FROSINONE],
  },
];
