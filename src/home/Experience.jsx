import React, { useState } from 'react';
import "./experience.css";

const mountains = [
  {
    id: "Soft",
    name: "SoftWare Development",
    commonNames: ["n publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful ", "development", "सगरमाथा", "n publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful"],
    img: "https://t3.ftcdn.net/jpg/04/92/88/62/360_F_492886280_RFVGseFPXXTQI6rnUXhAVSVQFmOY65qa.jpg",
    altInMeter: "8849",
    range: "Mahālangūr Himāl",
    active: true,
  },
  {
    id: "Web",
    name: "Web Development & Disign",
    commonNames: ["content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking,", "name", "developed", "content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking,"],
    img: "https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
    altInMeter: "8611",
    range: "Baltoro Muztagh",
    active: false,
  },
  {
    id: "Video",
    name: "Video editing",
    commonNames: ["Khangchendzonga", "content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking,", "content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking,", "SewaLungma"],
    img: "https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-business-analysis-and-communication-contemporary-marketing-and-software-for-development-image_1090680.jpg",
    altInMeter: "8586",
    range: "Kanchanjanghā",
    active: false,
  },
  {
    id: "Photo",
    name: "Photoshop",
    commonNames: ["Lhotse", "content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking,", "content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking,"],
    img: "https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg",
    altInMeter: "8516",
    range: "Mahālangūr Himāl",
    active: false,
  },
  {
    id: "Data",
    name: "Database Developer",
    commonNames: ["Makalu", "content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking,"],
    img: "https://media.istockphoto.com/id/1803992649/vector/software-development-coding-process-concept-programming-testing-cross-platform-code-app-on.jpg?s=612x612&w=0&k=20&c=9JX_Uhk0YSIqakQEXiSjo5NutvD4C8XOGIMc1cGRhiM=",
    altInMeter: "8485",
    range: "Mahālangūr Himāl",
    active: false,
  }
];

const Experience = () => {
  const [selectedMountain, setSelectedMountain] = useState(mountains[0]);

  const handleMountainSelect = (mountain) => {
    setSelectedMountain(mountain);
  };

  return (
    <>
    
    <div className='experience' id='exp'>
      <div className='col-md-12 text-center text-white  mb-5'>
        <h1 >
          What Can I Do
      
        </h1>
        </div>
    <div className="container-div">
      <div className="gallery">
        {mountains.map((mountain) => (
          <label key={mountain.id} className="panel-container">
            <div className="panel">
              <input
                className="panel-control"
                type="radio"
                name="panel-control"
                checked={selectedMountain.id === mountain.id}
                onChange={() => handleMountainSelect(mountain)}
              />
              <img className="panel-img" src={mountain.img} alt={mountain.name} />
              <div className="panel-id">{mountain.id}</div>
              <div className="panel-content">
                <div className="head">{mountain.name}</div>
                <div className="subhead"></div>
                <div className="spacer"></div>
                <div className="body">
                  {/* <div className="range">
                    <div className="title">Range:</div>
                    <div className="value">{mountain.range}</div>
                  </div>
                  <div className="alt">
                    <div className="title">Elevation:</div>
                    <div className="value">
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 32c12.5 0 24.1 6.4 30.8 17L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7c0 30.9-25 55.9-55.9 55.9H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17zm65 192L256 120.4 176.9 246.5l18.3 24.4c6.4 8.5 19.2 8.5 25.6 0l25.6-34.1c6-8.1 15.5-12.8 25.6-12.8h49z"
                          fill="currentColor"
                        />
                      </svg>
                      {mountain.altInMeter}
                    </div>
                  </div> */}
                  <div className="names">
                    <div className="title">
                      <h2 className='text-warning'>{mountain.range}</h2>
                    </div>
                    <div className="value">
                      {mountain.commonNames.map((commonName, i) => (
                        <div key={i} className="name">- {commonName}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
    </div>
    </>

  );
};

export default Experience;
