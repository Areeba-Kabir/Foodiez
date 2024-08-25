import React from "react";
import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>Download for better experience!</p>
      <div className="social-icons">
        <img src={assets.play_store} alt="playstore icon" />
        <img src={assets.app_store} alt="playstore icon" />
      </div>
    </div>
  );
};

export default AppDownload;
