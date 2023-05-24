import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import { Language } from "@shared/enums/common.enum";

export const getLanguage = (lan: string) => /^zh/.test(lan) ?
    lan.toLocaleLowerCase().includes('tw') ?
        Language.MandarinTraditional : Language.MandarinSimplified
    : Language.English;

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: navigator.language.toLowerCase() || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: ([lan]: string[]) => `/locales/${getLanguage(lan)}/translation.json`
        } as HttpBackendOptions
    });

export default i18n;