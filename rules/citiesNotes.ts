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

export default [];
