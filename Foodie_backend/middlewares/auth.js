import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers || req.query.token;
  console.log(req.headers.authorization?.split(" ")[1]);
  console.log(req.query.token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized. Please log in again.",
    });
  }

  try {
    const token_decode = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      success: false,
      message: "Token is invalid or expired. Please log in again.",
    });
  }
};

export { authMiddleware };
