// Loader.jsx

import React, { useEffect } from 'react';
import Scramblesloder from "./Scramblesloder"; // Import the Scrambles component

import { gsap } from 'gsap';
import './home.css';

const Loader = () => {
  useEffect(() => {
    loading();
  }, []);

  function loading() {
    var tl = gsap.timeline();

    tl.to("#yellow", {
      top: "-100%",
      delay: 1,
      duration: 0.7,
      ease: "expo.out",
    });

    tl.from("#yellow1", {
      top: "100%",
      delay: 2,
      duration: 0.01,
      ease: "expo.out",
    });

    tl.to(
      "#loader h1",
      {
        color: "red",
        delay: 0.6,
        duration: 0.7,
      },
      "anim"
    );
  
    tl.to(
      "#loader h1",
      {
        color: "blue",
        textShadow: 2,
        textDecoration: "dotted",
        textDecorationColor: "white",
        delay: 0.8,
        duration: 0.7,
      },
      "anim"
    );

    tl.to("#loader", {
      delay: 0.6,
      duration: 0.7,
      transition: 2,
      display: "none",
    });
  }

  return (
    <div id="loader">
      <div id="yellow"></div>
      <div id="yellow1"></div>

      <video autoPlay loop muted src="/video/myy.mp4"></video>

      <h1>
        <Scramblesloder
          text="CREATIVE PROFESSIONALS 
                 DEDICATED TO CULTURAL 
                 ADVANCEMENT THROUGH 
                 STRATEGY AND DESIGN"
        />
      </h1>
    </div>
  );
};

export default Loader;
