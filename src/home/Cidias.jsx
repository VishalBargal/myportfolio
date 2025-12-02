import React from 'react';
import "./cidias.css";

export default function Cidias() {

var elems = document.querySelectorAll(".elem");
var main = document.querySelector("#page2");

elems.forEach(function (ele) {
  // console.log(ele)
  ele.addEventListener("mouseenter", function () {
    // console.log("hello")
    var bgimg = ele.getAttribute("data-img");
    //   console.log(bgimg)
    // main.style.backgroundColor = "red"
    main.style.backgroundImage = `url(${bgimg})`;
  });
});

  return (
    <div className='cidias'
    id='cidias'>

<div className='container-fluid' id="page2"  >
        <div class="elem" data-img="./img/i2.jpeg">
          <h2>Converse</h2>
          <div class="moving">
          <div class="blur"></div>

            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
           
          </div>
        </div>
        <div class="elem" data-img="./img/soft3.jpg">
          <h2>Creative coding</h2>
          <div class="moving">
          <div class="blur"></div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
           
          </div>
        </div>
        <div class="elem" data-img="./img/i3.jpeg">
          <h2>Futur World</h2>
          <div class="moving">
          <div class="blur"></div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
           
          </div>
        </div>
        <div class="elem" data-img="./img/i10.png">
          <h2>Beyounce</h2>
          <div class="moving">
          <div class="blur"></div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
            <div class="moving-in">
              <h5>Creative Direction</h5>
              <h5>Digital marketing</h5>
              <h5>Art Direction</h5>
              <h5>Branding and Identity</h5>
              <h5>Type Disign</h5>
            </div>
           
          </div>
        </div>
</div>
    </div>
  )
}
