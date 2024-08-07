import React, { useEffect, useRef, useState } from "react";
import aboutUsImg from "../../assets/about-us-img.jpg";
import "./AboutUs.css";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const aboutUsRef = useRef(null);

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

    if (aboutUsRef.current) {
      observer.current.observe(aboutUsRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  return (
    <div className="AboutUs" ref={aboutUsRef}>
      <div className="about-us-wrapper">
        <h5 style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
          WHO WE ARE
        </h5>
        <div className="about-us-inner-wrapper">
          <div className="about-us-left">
            <h1
              style={{
                right: isVisible ? 0 : "40px",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Precision-Driven <span className="accent">Rebar</span> Solutions
            </h1>
            <p
              style={{
                right: isVisible ? 0 : "40px",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Expert Rebar Detailing, Fabrication, and Installation for Superior
              Concrete Reinforcement offers a full-service, collaborative
              approach to building resilient, sturdy, and durable structures.
              Our team of skilled and experienced professionals are committed to
              delivering high-quality, cost-effective, and sustainable
              solutions.
            </p>
          </div>
          <img
            style={{ left: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
            className="about-us-right"
            src={aboutUsImg}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
