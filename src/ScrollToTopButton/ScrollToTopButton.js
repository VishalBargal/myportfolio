




import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [showArrow, setShowArrow] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      setShowArrow(currentScrollPos < 100 || !isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]); 
  // Ensure useEffect re-runs when prevScrollPos changes

  const scrollToTop = () => {
    const scrollInterval = setInterval(() => {
      const scrollStep = -window.scrollY / (500 / 15); // 500ms duration for smooth scrolling
      window.scrollBy(0, scrollStep);
      if (window.scrollY === 0) { // Check if reached the top
        clearInterval(scrollInterval);
      }
    }, 15);
    setShowArrow(false); // Hide the arrow after clicking
  };

  return (
    <div className={`scroll-arrow ${showArrow ? 'show' : ''}`} onClick={scrollToTop}>
      <span></span>
      <span></span>
      <span></span>

    </div>
  );
}

export default ScrollToTopButton;

