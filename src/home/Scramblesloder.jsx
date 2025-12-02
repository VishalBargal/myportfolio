import React, { useState, useEffect, useRef } from "react";

const Scramblesloder = (props) => {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
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
  }, []);

  useEffect(() => {
    let interval = null;
    if (isPlaying && activeText < textArray.length - 1) {
      interval = setInterval(() => {
        setActiveText((prevActiveText) => prevActiveText + 1);
      }, 0.5); // Adjust animation speed as needed
    }

    return () => clearInterval(interval);
  }, [isPlaying, activeText, textArray]);

  return (
    <div ref={ref}>
      <h1>{textArray[activeText]}</h1>
    </div>
  );
};

export default Scramblesloder;
