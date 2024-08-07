import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="ContactForm">
      <div className="contact-form-wrapper">
        <div className="contact-title">
          <h1>Schedule Your Consultation Today</h1>
        </div>
        <form>
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
