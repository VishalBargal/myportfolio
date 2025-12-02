import logo from './logo.svg';
import './App.css';
import Landingpage from './home/Landingpage'
import "./home/home.css"; // Assuming style.css contains styles for your components
import "./home/landingpage.css"; // Assuming style.css contains styles for your components
import Scramblesloder from "./home/Scramblesloder"; // Import the Scrambles component

// import My_Navbar from "../home/Navbar/Nav";
// import founder from "../home/images1/vimgt.png";
import About from "./home/About";
import Skills from "./home/Skills";
import Project from "./home/Project";
import Experience from "./home/Experience";
import Testnomial from "./home/Testnomial";
import Contact from "./home/Contact";
import Footer from "./home/Footer";
// import ScrollToTopButton from "../home/ScrollToTopButton/ScrollToTopButton";
import Cidias from "./home/Cidias";
import Loader from "./home/Loader";

function App() {
  return (
<>
        {/* <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}

            
    
         <My_Navbar />
     < ScrollToTopButton /> */}

        <Landingpage key="home" />
        <About key="about" />
        <Skills key="skill" />
        <Project key="project" />
        <Experience key="exp" />
        <Testnomial key="testnomial" />
        <Cidias key="cidias" />
        <Contact key="contact" />
        <Footer />


            {/* </AnimatePresence>
          </main>
        </LocomotiveScrollProvider> */}
    </>
  );
}

export default App;
