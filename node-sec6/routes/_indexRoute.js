const router = require("express").Router();

const home = require("./homeRoute");
const user = require("./userRoute");

router.use("/home", home.router);
router.use("/user", user);

module.exports = router;
