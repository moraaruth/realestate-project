import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>
        Our commitment to excellence is what sets us apart from our competitors. We take pride in our attention to detail and personalized approach to each client's unique needs.
        </p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <address>
          123 Main Street <br />
          Nairobi, Kenya <br />
          Email: perfecthomes.com <br />
          Phone: +254711223344
        </address>
      </div>
      <div className="footer-bottom">
        
    
            
              <div> Copyright &copy; {new Date().getFullYear()} Perfect Home</div>
            
     </div>
   
    </footer>
  );
}

export default Footer;
