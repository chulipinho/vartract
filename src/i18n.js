import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// @ts-ignore
const EN_LAGUAGE_PACK = require("./Assets/text/app-texts-en.json");
// @ts-ignore
const PT_BR_LAGUAGE_PACK = require("./Assets/text/app-texts-pt-br.json");

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: EN_LAGUAGE_PACK,
    "pt-BR": PT_BR_LAGUAGE_PACK,
    pt: PT_BR_LAGUAGE_PACK,
};

const DETECTION_OPTIONS = {
    order: ["navigator"],
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        detection: DETECTION_OPTIONS,
        resources,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
