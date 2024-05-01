const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1]; // Use optional chaining to avoid errors if the header is missing
    if (!token) {
      throw new Error("Authorization token not provided");
    }

    const decoded = await JWT.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({
      message: "Authentication failed",
      success: false,
    });
  }
};
