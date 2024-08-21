import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div>
      <div className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />
        <ul className="navbar-menu">
          <li className={menu === "home" ? "active" : ""}>Home</li>
          <li className={menu === "menu" ? "active" : ""}>Menu</li>
          <li className={menu === "contact" ? "active" : ""}>Contact Us</li>
          <li className={menu === "help" ? "active" : ""}>Help</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search icon" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket_icon" />
            <div className="dot"></div>
          </div>
          <div>
            <button className="navbar-button">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
