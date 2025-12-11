

import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

function ScrollToTopButton() {
  const { scroll } = useLocomotiveScroll(); // Get Locomotive scroll instance
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (!scroll) return;

    const onScroll = (args) => {
      const scrollY = args.scroll.y; // Locomotive scroll Y position
      setShowArrow(scrollY > 300); // Show button after scrolling 300px
    };

    scroll.on('scroll', onScroll); // Listen to Locomotive scroll
    return () => {
      scroll.off('scroll', onScroll); // Cleanup
    };
  }, [scroll]);

  const scrollToTop = () => {
    if (!scroll) return;
    scroll.scrollTo(0, { duration: 800, easing: [0.25, 0.0, 0.05, 1.0] }); // Smooth scroll to top
  };

  return (
    <div
      className={`scroll-arrow ${showArrow ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default ScrollToTopButton;




// import React, { useState, useEffect } from 'react';
// import './ScrollToTopButton.css';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';

// function ScrollToTopButton() {
//   const { scroll } = useLocomotiveScroll(); // Get Locomotive scroll instance
//   const [showArrow, setShowArrow] = useState(false);

//   useEffect(() => {
//     if (!scroll) return;

//     const onScroll = (args) => {
//       const scrollY = args.scroll.y; // Locomotive scroll Y position
//       const oneViewportHeight = window.innerHeight; // 🔹 Calculate 1vh in pixels
//       setShowArrow(scrollY > oneViewportHeight); // 🔹 Show button after scrolling > 100vh
//     };

//     scroll.on('scroll', onScroll); // Listen to Locomotive scroll
//     return () => {
//       scroll.off('scroll', onScroll); // Cleanup
//     };
//   }, [scroll]);

//   const scrollToTop = () => {
//     if (!scroll) return;
//     scroll.scrollTo(0, { duration: 800, easing: [0.25, 0.0, 0.15, 1.0] }); // Smooth scroll to top
//   };

//   return (
//     <div
//       className={`scroll-arrow ${showArrow ? 'show' : ''}`}
//       onClick={scrollToTop}
//     >
//       <span></span>
//       <span></span>
//       <span></span>
//     </div>
//   );
// }

// export default ScrollToTopButton;
