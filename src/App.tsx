import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'styles/_index.scss';
import "@utilities/config/i18n";
import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { NestRoute, routeMap } from "@utilities/config/routes";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import Overlay from "@shared/components/Overlay";
import { useBreadcrumb } from "@shared/hooks/useBreadcrumb";
import Breadcrumb from "@shared/components/Breadcrumb";
import { Language, LocalStorageItem } from "@shared/enums/common.enum";
import { useTranslation } from "react-i18next";
import { setHtmlLang } from "@shared/components/LanguageDropdown";
import { getLanguage } from "@utilities/config/i18n";


function App() {
  const { configs } = useBreadcrumb();
  const { i18n: { changeLanguage }, t } = useTranslation();

  useEffect(() => {
    if (!localStorage.getItem(LocalStorageItem.Language)) {
      const defaultLan = getLanguage(navigator.language);
      localStorage.setItem(LocalStorageItem.Language, defaultLan);
    }
    changeLanguage(localStorage.getItem(LocalStorageItem.Language)!);
    setHtmlLang(localStorage.getItem(LocalStorageItem.Language)! as Language, t('title'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>
    <Header />
    <main className="d-flex flex-column">
      {configs.length > 0 && <Breadcrumb />}
      <React.Suspense fallback={<></>}>
        <Routes>
          {Array.from(routeMap.keys()).map(key => NestRoute(routeMap.get(key)!, key))}
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </React.Suspense>
    </main>
    <Footer />
    <Overlay />
  </>;
}

export default App;
