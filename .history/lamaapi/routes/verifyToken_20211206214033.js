const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token không hợp lệ");
    });
  } else {
    return res.status(401).json("Tài khoản chưa được xác thực");
  }
};
