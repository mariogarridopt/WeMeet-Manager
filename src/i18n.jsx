import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "./i18n/en.json";
import translationPT from "./i18n/pt.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ["cookie", "localStorage", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;