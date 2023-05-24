import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// i18n
//     // 使用 i18next-http-backend
//     .use(Backend)
//     // 將 i18next 傳入 react-i18next 裡面
//     .use(initReactI18next)
//     // 實例化 initReactI18next
//     .init({
//         fallbackLng: 'en',
//         debug: true,
//         resources,
//         interpolation: {
//             escapeValue: false, // not needed for react as it escapes by default
//         },

//         react: {
//             useSuspense: false,
//         },
//     });

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: navigator.language.toLowerCase() || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        backend: { loadPath: "/locales/{{lng}}/translation.json" }
    });

export default i18n;