import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h2>Order anything you want!</h2>
          <p>
            Craving your favorite meal? With just a few clicks, you can browse
            an array of delicious dishes and have them delivered right to your
            doorstep. Enjoy the convenience of online food ordering and satisfy
            your hunger without leaving home.
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
