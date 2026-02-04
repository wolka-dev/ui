import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const pathnameChanged = prevPathnameRef.current !== location.pathname;
    prevPathnameRef.current = location.pathname;

    const scrollToHash = () => {
      const hash = location.hash;
      if (!hash) return;
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (pathnameChanged) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (location.hash) {
        setTimeout(scrollToHash, 200);
      }
    } else if (location.hash) {
      setTimeout(scrollToHash, 50);
    }
  }, [location]);

  return (
    <div className="layout">
      <SkipLink />
      <Navigation />
      <main id="main-content" className="main-layout">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

