import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [menu, setMenu] = useState("home");

  return (
    <div>
      <div className="navbar" id="navbar">
        <Link to={"/"}>
          <img src={assets.logo} alt="Logo" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to={"/"}
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
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
            <Link to={"/cart"}>
              {" "}
              <img src={assets.basket_icon} alt="basket_icon" />
            </Link>
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
