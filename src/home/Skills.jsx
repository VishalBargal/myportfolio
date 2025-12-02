import React from "react";
import "./skills.css";

export default function Skills() {
  const handleMouseEnter = (bgimg) => {
    document.getElementById("page2").style.backgroundImage = `url(${bgimg})`;
  };

  

  return (
    <>
      <div className="skills" id="skill">
        <div className="container ">
          <div className="col-md-12 float-left text-center font-weight-bold"
              data-scroll
              data-scroll-speed="-1"
             //  data-scroll-direction="horizontal"
          >
            <h1 className="text-white skill-headigs"
             
            >My Skills</h1>
            <h5 className="text-warning mt-3">
              visit my portfolio and hire me...
            </h5>
           
          </div>
          <div className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3  "  
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3" >
            <div className="skills-div subscribr__btn99">
              <h2>React js</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3 ">
            <div className="skills-div subscribr__btn99">
              <h2>Node js </h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3  ">
            <div className="skills-div subscribr__btn99">
              <h2> Express js</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3">
            <div className="skills-div subscribr__btn99">
              <h2>Mysql</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3 ">
            <div className="skills-div subscribr__btn99">
              <h2>Mongodb</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3">
            <div className="skills-div subscribr__btn99">
              <h2>Locomotive js </h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3 ">
            <div className="skills-div subscribr__btn99">
              <h2>G-SAP</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3 ">
            <div className="skills-div subscribr__btn99">
              <h2>Jquery</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3">
            <div className="skills-div subscribr__btn99">
              <h2>JavaScript</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3">
            <div className="skills-div subscribr__btn99">
              <h2>JSON</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
          className="col-12 col-sm-6 col-md-3 float-left  skills-outer p-3 ">
            <div className="skills-div subscribr__btn99">
              <h2>Bootstrap 5</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-3"
          className="col-12 col-sm-6 col-md-3 float-left  p-3 skills-outer">
            <div className="skills-div subscribr__btn99">
              <h2>CSS</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  p-3 skills-outer">
            <div className="skills-div subscribr__btn99">
              <h2>HTML</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  p-3 skills-outer">
            <div className="skills-div subscribr__btn99">
              <h2>F-motiion</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  p-3 skills-outer">
            <div className="skills-div subscribr__btn99">
              <h2>Telwind</h2>
            </div>
          </div>
          <div
          data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
          className="col-12 col-sm-6 col-md-3 float-left  p-3 skills-outer">
            <div className="skills-div subscribr__btn99">
              <h2>MUI</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
