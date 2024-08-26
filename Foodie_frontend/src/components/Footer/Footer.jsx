import React from "react";
import { assets } from "../../assets/assets";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            At Foodiez, we're passionate about connecting you with your favorite
            meals from local restaurants, delivered hot and fresh to your door.
            Whether you're craving something new or ordering your go-to dish,
            we’ve got you covered.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook_icon" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact</h2>
          <ul>
            <li>+92 314 5078888</li>
            <li>+1 114 443 1298</li>
            <li>eatnchill@Foodiez.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        <b>Copyright &copy; 2024 FooDiez -All rights reserved.</b> <br />
        Delivering happiness, one meal at a time.
      </p>
    </div>
  );
};

export default Footer;
