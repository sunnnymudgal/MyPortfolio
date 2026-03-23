import React, { useEffect } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import Cursor from "./components/Cursor";
import Lenis from "@studio-freight/lenis";
import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }, [pathname]);

    return null;
  }

  return (
    <BrowserRouter>
      <div className="md:relative bg-secondary min-h-screen">
        <div className="max-md:hidden pointer-events-none">
          <Cursor />
        </div>

        <div className="md:fixed md:top-0 w-full z-50">
          <Nav />
        </div>

        <div className="md:pl-30 pt-20">
            <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
