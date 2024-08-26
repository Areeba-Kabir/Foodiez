import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = (props) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup" id="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState === "Sign Up" ? "Create account" : "Login"}</h2>
          <img
            onClick={() => props.setShowpopup(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="your-name"
              id="your-name"
              placeholder="Enter name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button>{currState === "Sign Up" ? "Sign IN" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
