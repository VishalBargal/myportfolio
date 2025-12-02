import React from "react";
import "./testnomial.css";

export default function Testnomial() {
  return (
    <>
      <div className="testnomial" id="testnomial">
        <div className="col-md-12 float-left">
            <h1 className="text-white font-weight-bold text-center">Valuable Testimonial</h1>
        </div>
        <div className="container sliderr">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
    
            <div className="carousel-inner myslidiv">
                
            <div className="item active">
                 <div className="myslidivin">
                    <div className="w-100">
                  <img className="tsliimg" src="./img/i31.jpg" alt="" />
                    </div>
                    <div className="w-100">
                   <h2 className="text-warning font-weight-bold">TechNovelty</h2>
                    </div>
                    <div className="w-100 mt-4 text-white">
                   <h5> Their strong problem-solving skills and dedication to quality helped us deliver projects on time and within budget.</h5>
                    </div>
                  <br></br>
                  <br></br>

               </div>
              </div>
              <div className="item ">
                 <div className="myslidivin">
                    <div className="w-100">
                  <img className="tsliimg" src="./img/i12.jpg" alt="" />
                    </div>
                    <div className="w-100">
                   <h2 className="text-warning font-weight-bold">A2Z It Hub</h2>
                    </div>
                    <div className="w-100  mt-4 text-white">
                   <h5>Their passion for web development and attention to detail were evident in every project they undertook.
                   It was a pleasure working with them, and I have no doubt they will continue to thrive in their career.
                   </h5>
                    </div>
                  <br></br>
                  <br></br>

               </div>
              </div>
              <div className="item ">
                 <div className="myslidivin">
                    <div className="w-100">
                  <img className="tsliimg" src="./img/i22.jpg" alt="" />
                    </div>
                    <div className="w-100">
                   <h2 className="text-warning font-weight-bold">Freelacing</h2>
                    </div>
                    <div className="w-100 mt-4 text-white ">
                   <h5>Through effective communication and meticulous attention to detail, I was able to deliver a solution that met the client's needs and exceeded their expectations.</h5>
                    </div>
                  <br></br>
                  <br></br>

               </div>
              </div>

          
            </div>
    
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
