import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      hello: "Hello",
      world: "World",
    },
  },
  fr: {
    translation: {
      hello: "Bonjour",
      world: "Monde",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lang: "en", //default language
});
