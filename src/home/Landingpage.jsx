import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./landingpage.css";
import Scrambles from "./Scrambles"; // Import the Scrambles component
import founder from "../images1/vimgt.png";
import youtube from "../images1/yt.svg";
import TypingText from "./TypingText";

export default function Landingpage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsOpen(true);
  };
  const handleClosePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener to handle closing popup with ESC key
      const handleEscKey = (event) => {
        if (event.keyCode === 27) {
          handleClosePopup();
        }
      };
      document.addEventListener("keydown", handleEscKey);
      return () => {
        document.removeEventListener("keydown", handleEscKey);
      };
    }
  }, [isOpen]);

  const Textsss = ({ value }) => (
    <div className="text">
      {value.split("").map((char, i) => (
        <div className="letter" style={{ "--delay": `${i * 0.2}s` }}>
          <span className="source">{char}</span>
          <span className="shadow">{char}</span>
          <span className="overlay">{char}</span>
        </div>
      ))}
    </div>
  );

  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "web developement",
    "software developemet",
    "video animation editing",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="landingpage">
        <div className="container-fluid mydivv">
          <div className="col-12  col-sm-12  col-md-6 float-left p-5 text-light text-left left-image">
            <div className="iner-div mt-5">
              {/* Integrate Scrambles component for h1 */}
              <p className="headingss">Hi I am</p>
              <h1 className="fname">

                <Textsss value=" V. Bargal " />
              </h1>

              {/* <br /> */}
              {/* <Scrambles text="I am the Web application Developer Who developed the complex programs for the latest web technologies" /> */}
              <p className="headingss">
                I am the Web application Developer Who developed the complex
                programs for the latest web technologies
              </p>
              {/* <br /> */}
              <p className="headingss">
                I able to
                <span className="edit-text"> {texts[textIndex]}</span>
              </p>

             

              <h1>
                <p className="headingss">Find me here.....</p>
                <br />
                <span className="outer-icon">
                  <div className="icon-div">
                <div className="social-icon ">
                <i class="fa fa-facebook-f ani" ></i>
                </div>
                </div>
                <div className="icon-div">
                <div className="social-icon">
                <i class="fa fa-instagram  ani" ></i>
                </div>
                </div>
                <div className="icon-div">
                <div className="social-icon">
                <i class="fa fa-github  ani" ></i>
                </div>
                </div>
                <div className="icon-div">
                <div className="social-icon">
                <i class="fa fa-youtube ani" ></i>
                </div>
                </div>
               </span>
                <br />
                <hr className="hrline" />
              </h1>
            </div>
          </div>
          <div className="col-12  col-sm-12  col-md-6 float-left p-5 right-image">
            <div className="carr_fifth_section_sub2">
              <img src={founder} alt="" className="founderImg" />
            
              <div className="animationP">
                <span className="circleP circle-1" />
                <span className="circleP circle-2" />
                <span className="circleP circle-3" />
                <span className="circleP circle-4" />
                <span className="circleP circle-5" />
                <span className="circleP circle-6" />
                <span className="circleP circle-7" />
                <span className="circleP circle-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import "./landingpage.css"
// import { useEffect, useState } from 'react'
// import founder from "../images1/vimgt.png"
// import youtube from "../images1/yt.svg";

// export default function Landingpage() {
//     const [isOpen, setIsOpen] = useState(false);
//     const handleOpenPopup = () => {
//         setIsOpen(true)
//     }
//     const handleClosePopup = () => {
//         setIsOpen(false)
//     }

//     useEffect(() => {
//         if (isOpen) { // Add event listener to handle closing popup with ESC key
//             const handleEscKey = (event) => {
//                 if (event.keyCode === 27) { handleClosePopup(); }
//             };
//             document.addEventListener('keydown', handleEscKey);
//             return () => { document.removeEventListener('keydown', handleEscKey); };
//         }
//     }, [isOpen]);
//   return (
// <>
// <div id='landingpage' className='row'>
// <div className='container-fluid'>
//    <div className='col-md-6 float-left p-5 text-light left-image'>
//     <div className='iner-div'>
//     <h1 className='text-white first_heading'>Hi I am <b className='font-weight-bold text-danger'>V. L. Bargal ....</b></h1>
//     <br />
//     <br />
//     <h2 className='second_heading'>I am the Web application Deloper <br />
//     Who developed the complex progrome for the latest web techologies</h2>
//     <br />
//     <h2 className='second_heading'>
//     Who developed the complex progrome for the latest web techologies</h2>
//    <h1>
//    <br />
//    <br />

//     <hr  className='bg-danger' />
//    </h1>
//     </div>
//    </div>
//    <div className='col-md-6 float-left p-5 right-image'>
//    <div className='carr_fifth_section_sub2'>

// <img src={founder} alt="" className='founderImg' />
// {/* <div onClick={handleOpenPopup}>
//     <div className="carrer_youtube_wrapper">
//         <img loading='lazy' className='carrer_youtube' src={youtube} />
//     </div>
// </div> */}
// {/* </a> */}
// {/* {
//     isOpen && (
//         <div className='popup-container99' style={{ width: "90%", height: "80%", left: "5%", top: "10%" }}>
//             <div className='popup99'>
//                 <button onClick={handleClosePopup} className='close-button99'>
//                     X
//                 </button>
//                 <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6u5InzrpMnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//             </div>
//         </div>
//     )
// } */}
// <div className="animationP">
//     <span className="circleP circle-1" />
//     <span className="circleP circle-2" />
//     <span className="circleP circle-3" />
//     <span className="circleP circle-4" />
//     <span className="circleP circle-5" />
//     <span className="circleP circle-6" />
//     <span className="circleP circle-7" />
//     <span className="circleP circle-8" />
// </div>

// </div>
//    </div>

// </div>
// </div>
// </>
// )
// }
