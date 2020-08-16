const router = require("express").Router();

const users = [];

//render Form via GET method

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.redirect("/user");
});

module.exports = { router, users };
