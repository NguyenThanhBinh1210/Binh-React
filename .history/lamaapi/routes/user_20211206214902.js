const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();
router.put("/:id", verifyTokenAndAuthorization, (req, res) => {
  if(req.body.password) {
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  }
});
module.exports = router;
