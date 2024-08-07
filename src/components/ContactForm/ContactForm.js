import React, { useEffect, useRef, useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.current.observe(contactRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  return (
    <div ref={contactRef} className="ContactForm">
      <div className="contact-form-wrapper">
        <div className="contact-title">
          <h1
            style={{ top: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
          >
            Schedule Your Consultation Today
          </h1>
        </div>
        <form
          style={{ right: isVisible ? 0 : "40px", opacity: isVisible ? 1 : 0 }}
        >
          <div className="full-name">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input
            className="business-input"
            type="text"
            placeholder="Business Name"
          />
          <div className="contact-info">
            <input type="email" placeholder="Email address" />
            <input type="tel" placeholder="Phone number" />
          </div>
          <button className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
