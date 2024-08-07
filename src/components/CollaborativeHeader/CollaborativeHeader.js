import React, { useEffect, useRef, useState } from "react";
import buildTogetherImg from "../../assets/build-something-together.jpg";
import VerticalLine from "../VerticalLine/VerticalLine";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import "./CollaborativeHeader.css";

function CollaborativeHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const collaberativeRef = useRef(null);

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

    if (collaberativeRef.current) {
      observer.current.observe(collaberativeRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="CollaborativeHeader" ref={collaberativeRef}>
      <div className="collaborative-header-wrapper">
        <img
          style={{ left: isVisible ? 0 : "-40px", opacity: isVisible ? 1 : 0 }}
          src={buildTogetherImg}
          alt="collaberative img"
        />
        <h1 style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
          LET’S
          <br />
          BUILD
          <br /> SOMETHING
          <br /> GREAT
          <br /> TOGETHER
        </h1>
      </div>
      <VerticalLine right={120} />
      <VerticalLine right={140} />
      <HorizontalLine bottom={50} />
      <HorizontalLine bottom={30} />
    </div>
  );
}

export default CollaborativeHeader;
