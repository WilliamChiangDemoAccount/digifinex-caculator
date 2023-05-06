import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'styles/_index.scss';
import { Route, Routes, Navigate } from "react-router-dom";
import { NestRoute, routeMap } from "@utilities/config/routes";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import React from "react";
import Overlay from "@shared/components/Overlay";
import { useBreadcrumb } from "@shared/hooks/useBreadcrumb";
import Breadcrumb from "@shared/components/Breadcrumb";

function App() {
  const { configs } = useBreadcrumb();

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
