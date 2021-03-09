import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useLanguage } from "./LanguageProvider";
import PropTypes from "prop-types";

export const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(1),
  },
  changeLanguageBox: {
    marginBottom: theme.spacing(1),
    cursor: pointer
  },
}));

const i18n = {
  MAY_I_EXIT: {
    it: "Posso uscire?",
    en: "Can I get out?",
  },
  MAY_I_EXIT_FROM: {
    it: "Posso uscire da ",
    en: "Can I get out from ",
  },
  INSERT_CITY: {
    it:
      "Inserisci la tua provincia per conoscere le restrizioni COVID19 attive.",
    en: "Enter your city to know the COVID19 restrictions.",
  },
};

export default function Header({ province }) {
  const classes = useStyles();
  const [language, setLanguage] = useLanguage();

  const title = province
    ? i18n.MAY_I_EXIT_FROM[language] + province.nome + "?"
    : i18n.MAY_I_EXIT[language];

  return (
    <>
      <Typography component={"div"} gutterBottom={true}>
        <Box
          textAlign="center"
          fontSize="h3.fontSize"
          fontFamily="Roboto"
          m={1}
        >
          {title}
        </Box>
      </Typography>

      <Box
        textAlign="center"
        className={classes.changeLanguageBox}
        onClick={() => setLanguage(language === "it" ? "en" : "it")}
      >
        {language === "it" ? "🇩🇬 Switch to English" : "🇮🇹 Passa all' Italiano"}
      </Box>
      <Typography
        component={"div"}
        className={classes.subTitle}
        color="textPrimary"
      >
        <Box textAlign="left" fontSize={20}>
          {i18n.INSERT_CITY[language]}
        </Box>
      </Typography>
    </>
  );
}
Header.propTypes = {
  province: PropTypes.any,
};
