const router = require("express").Router();

const Users = require("./homeRoute").users;

router.get("/", (req, res) => {
  res.render("user", { title: "User", users: Users });
});

module.exports = router;
