import React, { useEffect, useRef, useState } from "react";
import "./WhatWeDo.css";
function WhatWeDo({ slider }) {
  const [isVisible, setIsVisible] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const observer = useRef(null);
  const whatWeDoRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // 0 (completely out of view) to 1 (completely in view)
      }
    );

    if (whatWeDoRef.current) {
      observer.current.observe(whatWeDoRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={whatWeDoRef} className="WhatWeDo">
      {slider.map((img, index) => (
        <img
          style={{ opacity: index === sliderIndex ? 1 : 0 }}
          className="what-we-do-slider"
          key={index}
          src={img.url}
          alt={img.name}
        />
      ))}
      <div className="what-we-do-wrapper">
        <h5 style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
          WHAT WE DO
        </h5>
        <div className="what-we-do-inner-wrapper">
          {slider.map((info, index) => (
            <div
              style={{ opacity: index === sliderIndex ? 1 : 0 }}
              key={index}
              className="slider-info"
            >
              <h3
                style={{
                  top: index === sliderIndex ? 0 : "40px",
                  opacity: index === sliderIndex ? 1 : 0,
                }}
              >
                {info.name}
              </h3>
              <p
                style={{
                  top: index === sliderIndex ? 0 : "40px",
                  opacity: index === sliderIndex ? 1 : 0,
                }}
              >
                {info.first_paragraph}
              </p>
              <p
                style={{
                  top: index === sliderIndex ? 0 : "40px",
                  opacity: index === sliderIndex ? 1 : 0,
                }}
              >
                {info.second_paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="jumbo-text">
        {slider.map((jumboText, index) => (
          <h1 style={{ opacity: index === sliderIndex ? 1 : 0 }} key={index}>
            {jumboText.name}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
