

// App.js
import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Loader from "./home/Loader";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";

import "./App.css";
import "./home/home.css";
import "./home/landingpage.css";

import Landingpage from "./home/Landingpage";
import Scramblesloder from "./home/Scramblesloder";

import My_Navbar from "./Navbar/Nav";
import About from "./home/About";
import Skills from "./home/Skills";
import Project from "./home/Project";
import Experience from "./home/Experience";
import Testnomial from "./home/Testnomial";
import Contact from "./home/Contact";
import Footer from "./home/Footer";
import Cidias from "./home/Cidias";

function App() {
  const containerRef = useRef(null); // ✅ FIXED

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1800);
  }, []);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <AnimatePresence>{!Loaded && <Loader />}</AnimatePresence>

        <main className="App" data-scroll-container ref={containerRef}>
          <AnimatePresence>
            {!Loaded && <Loader />}

            <My_Navbar />
            <ScrollToTopButton />

            <Landingpage key="home" />
            <About key="about" />
            <Skills key="skill" />
            <Project key="project" />
            <Experience key="exp" />
            <Testnomial key="testnomial" />
            <Cidias key="cidias" />
            <Contact key="contact" />
            <Footer />
          </AnimatePresence>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
