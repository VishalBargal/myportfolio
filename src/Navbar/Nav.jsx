import React, { useState, useEffect } from "react";
import "./Style.css";
import { Squash as Hamburger } from "hamburger-react";
// import logo from "";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import founder from "../images1/vimgt.png";

import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link } from "react-router-dom";

function My_Navbar() {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    setClick(!click);
    scroll.scrollTo(elem, {
      // offset: '-100',
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  const [opened] = "active";
  const [isOpen, setOpen] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const [textareaHeight, setTextareaHeight] = useState("auto");

  const [showMainPopup, setShowMainPopup] = useState(false);
  const openMainPopup = () => {
    setShowMainPopup(true);
  };
  const closePopups = () => {
    setShowMainPopup(false);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTimeout]);


  
  return (
    <>
      <nav className={`navbarMain ${isNavbarVisible ? "visible" : "hidden"}`}>
        <NavLink >
          <div className="logo">
            <img src={founder} alt="" className="logo_imgs" />
            <h2 className="logonames ml-2"  onClick={openMainPopup}>Hire me !</h2>
          </div>
        </NavLink>

        <div className="menu">
          <ul className={clicked ? "navbar activate " : "navbar "}>
            <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#home")}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#about")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#skill")}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#project")}
              >
                Portfolio
              </NavLink>
            </li>
            {/* <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#exp")}
              >
                Exp
              </NavLink>
            </li> */}
            {/* <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#testnomial")}
              >
                Testnomial
              </NavLink>
            </li> */}
            {/* <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#cidias")}
              >
                Future
              </NavLink>
            </li> */}
            <li className="nav-links_li">
              <NavLink
                className={`${opened} nav_links_a`}
                onClick={() => handleScroll("#contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mobile-menu" onClick={() => setClicked(!clicked)}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
         
      </nav>
 
    </>
  );
}

export default My_Navbar;
