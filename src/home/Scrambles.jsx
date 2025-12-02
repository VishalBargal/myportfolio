// animation with delay 


import React, { useState, useEffect, useRef } from "react";

const Scrambles = (props) => {
  const shuffle = (word) => {
    return word
      .split("")
      .sort(() => {
        return 0.5 - Math.random();
      })
      .join("");
  };

  const gen = () => {
    let textArray = [];
    if (props.text) {
      // Variations with change in size
      for (let i = props.text.length; i >= 0; i--) {
        let tmp = shuffle(props.text);
        tmp = tmp.slice(0, props.text.length - i);
        textArray.push(tmp);
      }
      // Variations without change in size
      for (let i = 0; i < 6; i++) {
        textArray.push(shuffle(props.text));
      }
      // Normal text
      textArray.push(props.text);
    }
    return textArray;
  };

  const [textArray] = useState(gen());
  const [activeText, setActiveText] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const delay = 7000; // Adjust delay time in milliseconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsPlaying(true);
          }, delay);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    let interval = null;
    if (isPlaying && activeText < textArray.length - 1) {
      interval = setInterval(() => {
        setActiveText((prevActiveText) => prevActiveText + 1);
      }, 10); // Adjust animation speed as needed
    }

    return () => clearInterval(interval);
  }, [isPlaying, activeText, textArray]);

  return (
    <div ref={ref}>
      <h1>{textArray[activeText]}</h1>
    </div>
  );
};

export default Scrambles;




// correct working below  animation without delay


// import React, { useState, useEffect, useRef } from "react";

// const Scrambles = (props) => {
//   const shuffle = (word) => {
//     return word
//       .split("")
//       .sort(() => {
//         return 0.5 - Math.random();
//       })
//       .join("");
//   };

//   const gen = () => {
//     let textArray = [];
//     if (props.text) {
//       // Variations with change in size
//       for (let i = props.text.length; i >= 0; i--) {
//         let tmp = shuffle(props.text);
//         tmp = tmp.slice(0, props.text.length - i);
//         textArray.push(tmp);
//       }
//       // Variations without change in size
//       for (let i = 0; i < 6; i++) {
//         textArray.push(shuffle(props.text));
//       }
//       // Normal text
//       textArray.push(props.text);
//     }
//     return textArray;
//   };

//   const [textArray] = useState(gen());
//   const [activeText, setActiveText] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsPlaying(true);
//         }
//       },
//       { threshold: 0.5 } // Adjust the threshold as needed
//     );

//     observer.observe(ref.current);

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     let interval = null;
//     if (isPlaying && activeText < textArray.length - 1) {
//       interval = setInterval(() => {
//         setActiveText((prevActiveText) => prevActiveText + 1);
//       }, 10); // Adjust animation speed as needed
//     }

//     return () => clearInterval(interval);
//   }, [isPlaying, activeText, textArray]);

//   return (
//     <div ref={ref}>
//       <h1>{textArray[activeText]}</h1>
//       <p>(auto-animation when in viewport)</p>
//     </div>
//   );
// };

// export default Scrambles;



