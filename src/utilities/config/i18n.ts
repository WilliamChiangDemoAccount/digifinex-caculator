import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import en from '../../../public/locales/en/translation.json';
import tw from '../../../public/locales/zh-tw/translation.json';
import cn from '../../../public/locales/zh-cn/translation.json';

export const resources = {
    en: {
        translation: en,
    },
    'zh-tw': {
        translation: tw,
    },
    'zh-cn': {
        translation: cn,
    },
};

i18n
    // 使用 i18next-http-backend
    .use(Backend)
    // 將 i18next 傳入 react-i18next 裡面
    .use(initReactI18next)
    // 實例化 initReactI18next
    .init({
        fallbackLng: 'en',
        debug: true,
        resources,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;