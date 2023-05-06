import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'styles/_index.scss';
import { Route, Routes, Navigate } from "react-router-dom";
import { NestRoute, routeMap } from "@utilities/config/routes";
import { getEnvConfig } from "@utilities/config/env";
import Header from "@shared/components/Header";
import Footer from "@shared/components/Footer";
import React, { useEffect, useRef, useState } from "react";
import Overlay from "@shared/components/Overlay";
import { useBreadcrumb } from "@shared/hooks/useBreadcrumb";
import Breadcrumb from "@shared/components/Breadcrumb";

function App() {
  const { defaultPath } = getEnvConfig();
  const { configs } = useBreadcrumb();
  const headerRef = useRef<HTMLDivElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const headerHeight = headerRef.current?.clientHeight ?? 0;
      const breadcrumbHeight = breadcrumbRef.current?.clientHeight ?? 0;
      const footerHeight = footerRef.current?.clientHeight ?? 0;
      setContainerHeight(window.innerHeight - headerHeight - breadcrumbHeight - footerHeight);
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    if (breadcrumbRef.current) {
      resizeObserver.observe(breadcrumbRef.current);
    }

    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [headerRef, breadcrumbRef, footerRef]);

  return <>
    <Header ref={headerRef} />
    <main className="d-flex flex-column">
      {configs.length > 0 && <Breadcrumb ref={breadcrumbRef} />}
      <section
        className="px-5"
        style={{
          height: containerHeight,
          overflowY: 'auto',
          overflowX: 'hidden'
        }}>
        <React.Suspense fallback={<></>}>
          <Routes>
            <Route path="" element={<Navigate to={`/${defaultPath}`} />} />
            {Array.from(routeMap.keys()).map(key => NestRoute(routeMap.get(key)!, key))}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </React.Suspense>
      </section>
      <Footer ref={footerRef} />
    </main>
    <Overlay />
  </>;
}

export default App;
