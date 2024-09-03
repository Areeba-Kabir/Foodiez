import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";

const LoginPopup = (props) => {
  const { url, token, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");

  const [passwordErrors, setPasswordErrors] = useState([]);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const password_validation = (password) => {
    let errors = [];
    const passwordValidation = {
      minLength: 8,
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasDigit: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    if (password.length < passwordValidation.minLength) {
      errors.push("Minimum length should be 8 characters.");
    }
    if (!passwordValidation.hasDigit) {
      errors.push("Should contain at least 1 digit.");
    }
    if (!passwordValidation.hasSpecialChar) {
      errors.push("Should contain at least 1 special character.");
    }

    return errors;
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));

    if (name === "password") {
      const errors = password_validation(value);
      setPasswordErrors(errors);
      setPasswordHasError(errors.length > 0);
    }
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
        toast.success(`${currState} successful!`);
        props.setShowpopup(false);
        setData({ name: "", email: "", password: "" }); // Clear form
        setPasswordErrors([]);
        setPasswordHasError(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setData({ name: "", email: "", password: "" });
      console.log(error);
      toast.error(
        `${
          currState === "Login"
            ? "Incorrect email or password"
            : "Sign up failed"
        }`
      );
    }
  };

  const resetForm = () => {
    setData({ name: "", email: "", password: "" });
    setPasswordErrors([]);
    setPasswordHasError(false);
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="login-popup" id="login-popup">
      <form onSubmit={onSubmitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState === "Sign Up" ? "Create account" : "Login"}</h2>
          <img
            onClick={() => props.setShowpopup(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
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
          {currState === "Sign Up"
            ? passwordErrors.length > 0 && (
                <div className="password-errors">
                  {passwordErrors.map((error, index) => (
                    <p key={index} className="error-message">
                      {error}
                    </p>
                  ))}
                </div>
              )
            : ""}
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" name="terms" id="terms" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        <button type="Submit">{currState}</button>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrState("Sign Up");
                resetForm();
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrState("Login");
                resetForm();
              }}
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
