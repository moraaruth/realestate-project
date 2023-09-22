import React from "react";
import AppNavbar from "./AppNavbar";
import "./ContactUs.css"; // Import your CSS file
import Footer from "./Footer";

function ContactUs() {
  return (
      <div>
          <AppNavbar />
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <p>If you have any questions or feedback, please feel free to contact us.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    <br /> <br /><br />
    <Footer />
    </div>
  );
}

export default ContactUs;
