import React, { useState, useEffect } from 'react';
import './TypingText.css'; // Ensure you have corresponding CSS for animations

function TypingText({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Index of current text being typed
  const [currentText, setCurrentText] = useState(''); // Text being displayed

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false; // Track if currently backspacing
    let interval;

    const type = () => {
      const currentWord = texts[currentIndex];
      const typedText = currentWord.substring(0, charIndex);
      setCurrentText(typedText);

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        clearInterval(interval);
        setTimeout(() => {
          interval = setInterval(backspace, 50);
        }, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        clearInterval(interval);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(() => {
          interval = setInterval(type, 100);
        }, 200);
      }

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    };

    const backspace = () => {
      const currentWord = texts[currentIndex];
      const typedText = currentWord.substring(0, charIndex);
      setCurrentText(typedText);

      if (charIndex === 0) {
        clearInterval(interval);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(() => {
          interval = setInterval(type, 100);
        }, 200);
      }

      charIndex = charIndex - 1;
    };

    interval = setInterval(type, 100);

    return () => clearInterval(interval);
  }, [currentIndex, texts]);

  return (
    <div className="typing-text">
      <h1>I am the {currentText}</h1>
    </div>
  );
}

export default TypingText;
