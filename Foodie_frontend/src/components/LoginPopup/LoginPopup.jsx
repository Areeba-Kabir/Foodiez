import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = (props) => {
  const { url, token, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let newURL = url;
    try {
      if (currState === "Login") {
        newURL += "/api/user/login";
      } else if (currState === "Sign Up") {
        newURL += "/api/user/signup";
      }

      const response = await axios.post(newURL, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        props.setShowpopup(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed!");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="login-popup" id="login-popup">
      <form onSubmit={onSubmitHandler} className="login-popup-container">
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
              name="name"
              id="your-name"
              placeholder="Enter name"
              onChange={onChangeHandler}
              value={data.name}
              required
            />
          )}

          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            placeholder="Enter Email"
            onChange={onChangeHandler}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            placeholder="Enter password"
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

        <button type="Submit">{currState}</button>

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
