import React, { useEffect, useRef } from "react";
import "./about.css";
import founder from "../images1/vimgt.png";

export default function About() {
  return (
    <>
      <div className="home-about " id="about">
        <div className="container text-light ">
          <div
            className="col-12 col-sm-12 col-md-6 float-left  w-100  about-left-div"
            data-scroll
            data-scroll-speed="2"
          >
            <div
              className="outer-div"
              //  data-scroll
              //  data-scroll-speed="3"
              //  data-scroll-direction="horizontal"
            >
              <div className="inner_div">
                <img src={founder} className="w-100 h-100" alt="" />

                {/* <img src='https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg' className='w-100 h-100'></img> */}
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 float-left text-left  w-100 about-right-div"
            data-scroll
            data-scroll-speed="-2"
            //  data-scroll-target="#fixed-target"
            //  data-scroll-direction="horizontal"
          >
            <h1>About Me ! </h1>
            <h3>
            Hey there! I'm <b className="text-warning">Vishal Bargal</b>, a passionate junior web developer with a keen interest in crafting engaging digital experiences. 
            I thrive on the excitement of coding and love to explore the endless possibilities of web development.
            </h3>
            <h3>
            As a junior web developer, I'm dedicated to creating clean, responsive, and user-friendly websites that leave a lasting impression. Whether it's building sleek landing pages, 
            dynamic web applications, or intuitive user interfaces, I'm committed to delivering high-quality solutions that exceed expectations.
            </h3>
            <button className="btn btn-outline-danger btn-lg mt-5 ml-2">
              Download my CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
