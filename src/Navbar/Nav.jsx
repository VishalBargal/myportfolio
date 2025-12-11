

// Nav.jsx
import React, { useState, useEffect } from "react";
import "./Style.css";

import { Squash as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import founder from "../images1/vimgt.png";

import { useLocomotiveScroll } from "react-locomotive-scroll";

function My_Navbar() {
  const [clicked, setClicked] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    const elem = document.querySelector(id);
    setClicked(false);
    scroll.scrollTo(elem, {
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <>
      <nav className={`navbarMain`}>
        <NavLink to="#">
          <div className="logo">
            <img src={founder} alt="" className="logo_imgs" />
            <h2 className="logonames ml-2">Hire me!</h2>
          </div>
        </NavLink>

        <div className="menu">
          <ul className={clicked ? "navbar activate" : "navbar"}>
            <li className="nav-links_li">
              <NavLink to="#" onClick={() => handleScroll("#home")} className="nav_links_a">
                Home
              </NavLink>
            </li>

            <li className="nav-links_li">
              <NavLink to="#" onClick={() => handleScroll("#about")} className="nav_links_a">
                About
              </NavLink>
            </li>

            <li className="nav-links_li">
              <NavLink to="#" onClick={() => handleScroll("#skill")} className="nav_links_a">
                Skills
              </NavLink>
            </li>

            <li className="nav-links_li">
              <NavLink to="#" onClick={() => handleScroll("#project")} className="nav_links_a">
                Portfolio
              </NavLink>
            </li>

            <li className="nav-links_li">
              <NavLink to="#" onClick={() => handleScroll("#contact")} className="nav_links_a">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mobile-menu" onClick={() => setClicked(!clicked)}>
          <Hamburger toggled={clicked} toggle={setClicked} />
        </div>
      </nav>
    </>
  );
}

export default My_Navbar;
