import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useLanguage } from "./LanguageProvider";

export const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(1),
  },
  changeLanguageBox: {
    marginBottom: theme.spacing(1),
  },
}));

const i18n = {
  MAY_I_EXIT: {
    it: "Posso uscire?",
    en: "Can I get out?",
  },
  INSERT_CITY: {
    it: "Inserisci la tua provincia per conoscere le restrizioni.",
    en: "Enter your city to know the restrictions.",
  },
};

export default function Header() {
  const classes = useStyles();
  const [language, setLanguage] = useLanguage();

  return (
    <>
      <Typography component={"div"} gutterBottom={true}>
        <Box
          textAlign="center"
          fontSize="h3.fontSize"
          fontFamily="Roboto"
          m={1}
        >
          {i18n.MAY_I_EXIT[language]}
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
