import React from "react";
import "./Navbar.css";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <img src={navLogo} alt="navlogo" className="nav_logo" />
      <nav>
        {" "}
        <ul className="nav_links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
