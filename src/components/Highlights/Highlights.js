import React, { useEffect, useRef, useState } from "react";
import VerticalLine from "../VerticalLine/VerticalLine";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Highlights.css";

function Highlights({ slider }) {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const highlightsRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

    if (highlightsRef.current) {
      observer.current.observe(highlightsRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  return (
    <div ref={highlightsRef} className="Highlights">
      <h5 style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
        OUR WORK
      </h5>
      <div className="highlights-wrapper">
        <h1 style={{ opacity: isVisible ? 1 : 0 }}>
          Projects <span className="accent">Highlights</span>
        </h1>
        <p style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}>
          Explore our featured projects showcasing our expertise and quality
          craftsmanship.
        </p>
        <div
          style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
          className="carousel-wrapper"
        >
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {slider.map((img, index) => (
              <img
                key={index}
                className="highlights-item"
                src={img.url}
                alt={img.name}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <VerticalLine right={120} />
      <VerticalLine right={140} />
      <HorizontalLine bottom={80} />
      <HorizontalLine bottom={60} />
    </div>
  );
}

export default Highlights;
