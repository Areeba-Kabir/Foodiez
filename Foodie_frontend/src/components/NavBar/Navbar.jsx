import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [menu, setMenu] = useState("home");

  return (
    <div>
      <div className="navbar" id="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />
        <ul className="navbar-menu">
          <a
            href="#navbar"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Us
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("help")}
            className={menu === "help" ? "active" : ""}
          >
            Download
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search icon" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket_icon" />
            <div className="dot"></div>
          </div>
          <div>
            <button
              onClick={() => props.setShowpopup(true)}
              className="navbar-button"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
