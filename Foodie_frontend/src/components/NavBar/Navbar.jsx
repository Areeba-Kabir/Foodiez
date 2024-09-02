import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = (props) => {
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem(token);
    setToken("");
    navigate("/");
  };
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
            <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
          </div>
          <div>
            {!token ? (
              <button
                onClick={() => props.setShowpopup(true)}
                className="navbar-button"
              >
                Sign in
              </button>
            ) : (
              <div className="navbar-profile">
                <img src={assets.profile_icon} alt="profile" />
                <ul className="profile-dropdown">
                  <li>
                    <img src={assets.bag_icon} alt="bag_icon" />
                    <p>orders</p>
                  </li>
                  <hr />
                  <li onClick={Logout}>
                    <img src={assets.logout_icon} alt="logout_icon" />
                    <p>logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
