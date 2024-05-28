import React from "react";
import logo from "../../assets/logo/Logo.png";
import "../../styles/headerCSS/header.css";
import { headerLinksPropType } from "../../proptype/propTypes";

const Header = ({ links }) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <a href="/home1">
            <img src={logo} alt="logo" className="logo" />
            <span>O'Chill</span>
          </a>
        </div>
        <nav className="navbar">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className={link.isActive ? "activeClass" : ""}
                  href={link.url}
                >
                  <span data-translate={link.dataTranslate}>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// imported proptype for type checking
Header.propTypes = {
  links: headerLinksPropType,
};

export default Header;
