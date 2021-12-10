const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://kingnoones1:kingnoones12@catalina.qst2w.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connect success"));
app.listen(5000, () => {
  console.log("backend server is running");
});
