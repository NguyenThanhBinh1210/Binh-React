const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  }

  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    })
  }
});
module.exports = router;
