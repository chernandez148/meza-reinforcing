import React, { useEffect, useRef, useState } from "react";
import meetUsImg from "../../assets/meet-us-img.jpg";
import "./MeetUs.css";

function MeetUs() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const meetUsRef = useRef(null);

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

    if (meetUsRef.current) {
      observer.current.observe(meetUsRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  return (
    <div className="MeetUs" ref={meetUsRef}>
      <div className="meet-us-wrapper">
        <h5 style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
          MEET THE OWNER
        </h5>
        <div className="meet-us-inner-wrapper">
          <div className="meet-us-left">
            <h1
              style={{
                right: isVisible ? 0 : "40px",
                opacity: isVisible ? 1 : 0,
              }}
            >
              Vision and Leadership Behind{" "}
              <span className="accent">Meza Reinforcing Inc</span>
            </h1>
            <p
              style={{
                right: isVisible ? 0 : "40px",
                opacity: isVisible ? 1 : 0,
              }}
            >
              With 15 years of experience in the reinforcing industry Sergio
              Meza has overseen projects such as residential and commercial
              buildings, bridges and water channels. He has previously worked as
              Foreman for a reputable rebar company and has now decided to build
              his own success as a sub-contractor. His abundant experience makes
              Meza Reinforcing Inc a great choice for your next project.
            </p>
          </div>
          <img
            style={{ left: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
            className="meet-us-right"
            src={meetUsImg}
          />
        </div>
      </div>
    </div>
  );
}

export default MeetUs;
