import React, { useEffect, useRef } from "react";
import "./project.css";

export default function Project() {
  const cardData = [
    {
      id: 1,
      coverImageSrc:
        "./img/i5.jpg",
      title: "Full Stack App ",
      subtitle: "Ecommerce App",
      description: "The web application for the shop the everything.",
    },
    {
      id: 2,
      coverImageSrc:
        "./img/i6.jpg",
      title: "Full Stack",
      subtitle: "Hotel Management",
      description: "To manage the hotels everything for the managemet",
    },
    {
      id: 3,
      coverImageSrc:
        "./img/i7.jpg",
      title: "React js",
      subtitle: "Nova",
      description: "create the innovative ideas in the world's biggest project",
    },
    {
      id: 4,
      coverImageSrc:
        "./img/i8.jpg",
      title: "Disha Computers",
      subtitle: "CSC Service Center",
      description: "To show the information about the center and registration process",
    },
    {
      id: 5,
      coverImageSrc:
        "./img/i10.jpg",
      title: "Node js",
      subtitle: "Ecom",
      description: "create the innovative ideas in the world's biggest project",
    },
    {
      id: 6,
      coverImageSrc:
        "./img/i11.jpg",
      title: "React js",
      subtitle: "Aurvedic Medicine",
      description: "create the innovative ideas in the world's biggest project",
    },
    {
      id: 7,
      coverImageSrc:
        "./img/i12.jpg",
      title: "Restorant Web",
      subtitle: "Five star Hotel",
      description: "create the innovative ideas in the world's biggest project",
    },
    {
      id: 8,
      coverImageSrc:
        "./img/i13.jpg",
      title: "Locomotive js ",
      subtitle: "Gsap web Applications",
      description: "create the innovative ideas in the world's biggest project",
    }

    
  ];
  return (
    <>
      <div className="project-div" id="project">
        <div className="container-fluid mb-5">
          <div className="col-md-12 float-left text-center text-white p-5 mb-5"
           data-scroll
           // data-scroll-direction="horizontal"
           data-scroll-speed="-1">
            <h1>Latest Projects</h1>
          </div>

          <div className="col-md-12 float-left project-outer-div "
         
          >
            
                {cardData.map((card) => (
                  <div className="col-12 col-sm-12 col-md-6 col-xl-3 float-left mt-5   ">
            
                  <div className="treedcard">
                  <div className="card" key={card.id}>
                    <div className="wrapper">
                      <img src={card.coverImageSrc} className="cover-image" />
                    </div>
                    <h2 className="title text-danger font-weight-bold text-center">
                      {card.title}
                    </h2>
                    <h2 className="title text-warning text-center">
                      {card.subtitle}
                    </h2>
                    <h4 className="title text-white text-center">
                      {card.description}
                    </h4>
                    <div className="character">
                      <button className="btn-lg card-btn float-left">more</button>
                      <button className="btn-lg float-right card-btn">
                        more
                      </button>
                    </div>
                  </div>
                  </div>

            </div>
                ))}

                {/* <div class="card">
                  <div class="wrapper">
                    <img
                      src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                      class="cover-image"
                    />
                  </div>
                  <h2 className="title text-danger font-weight-bold text-center">React js</h2>
                  <h2 className="title text-warning text-center ">Full Stack App</h2>
                  <h4 className="title text-white text-center ">create the inovative idias in the world bigest project</h4>
  

                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                    class="title"
                  />
                  <div className="character">
                    <button className=" btn-lg  card-btn">more</button>
                    <button className=" btn-lg float-right card-btn">more</button>

                  </div>
                  <img
                    src="/img/my.png"
                    class="character"
                  />
                </div> */}
            
          </div>
        </div>
      </div>
    </>
  );
}
