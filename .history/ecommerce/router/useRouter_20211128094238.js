const router = require("express").Router();

router.post("/register", (req, res) => {
  res.json({ msg: "register ok" });
});
