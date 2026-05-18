import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next 
    .use(Backend)
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .unit({
        fallbackLng : "en",
        interpolation : {
            escapeValue: false
        },
        debug: process.env.NODE_ENV === "development",
    });
    export default i18next;
    