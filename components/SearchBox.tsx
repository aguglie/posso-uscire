import { Box, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import regions from "../lib/italianRegions";
import { useLanguage } from "./LanguageProvider";
import { useRouter } from "next/router";
import { Province } from "../lib/types";

const i18n = {
  CITY: {
    it: "Provincia",
    en: "City",
  },
};

export default function SearchBox() {
  const [language] = useLanguage();
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="center">
      <Autocomplete
        id="province"
        onChange={(_, value) => router.push("/" + (value as Province).urlName)}
        options={regions}
        getOptionLabel={(option) => option.nome}
        style={{ width: "80%", marginTop: 20 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={i18n.CITY[language]}
            variant="outlined"
          />
        )}
      />
    </Box>
  );
}
