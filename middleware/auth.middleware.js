const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; //Bearer token

    if (!token) {
      res.status(401).json({ message: "You are not authorized!!!" });
    }
    const decode = jwt.verify(token, config.get("jwtSecret"));
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authorized!!!" });
  }
};
