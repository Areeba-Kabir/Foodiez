import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid username or password!",
      });
    }
    const token = await createToken(user._id);
    return res
      .status(200)
      .json({ success: true, message: "Login Success", token });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Login failed" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret, { expiresIn: "1d" });
};

//register
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Enter a valid email, please." });
    }

    const exist = await userModel.findOne({ email });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    // Password strength validation
    const passwordValidation = {
      minLength: 8,
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasDigit: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    if (password.length < passwordValidation.minLength) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }
    if (!passwordValidation.hasDigit) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least one digit.",
      });
    }
    if (!passwordValidation.hasSpecialChar) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least one special character.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hash_password,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    return res
      .status(200)
      .json({ success: true, message: "User added successfully", token });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to signup" });
  }
};

export { loginUser, registerUser };
