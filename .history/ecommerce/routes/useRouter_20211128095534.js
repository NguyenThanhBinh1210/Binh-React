const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ msg: "register ok" });
});
