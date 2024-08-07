import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero({ heroTitle, buttonText, slider }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Hero">
      {slider.map((img, index) => (
        <img
          style={{ opacity: index === sliderIndex ? 1 : 0 }}
          key={index}
          src={img.url}
          alt={img.name}
          width="100%"
        />
      ))}
      <div className="hero-title">
        <h1>{heroTitle}</h1>
        <button>{buttonText}</button>
      </div>
      <div className="slider-indicator">
        {slider.map((img, index) => {
          return (
            <span
              key={img.name}
              className={index === sliderIndex ? "active" : ""}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
