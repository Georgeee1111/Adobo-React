import React from "react";
import "../../styles/footerCSS/footer.css";
const Footer = () => {
  return (
    <footer className="site-footer" id="main-content">
      <div className="container">
        <p data-translate="contact_us_info">
          Contact Us: email@email.com | Phone: (123) 456-7890
        </p>
        <p>&copy; 2024 O'Chill. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
