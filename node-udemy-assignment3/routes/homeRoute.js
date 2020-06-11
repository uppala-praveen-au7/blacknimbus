const express = require("express")

const homeLogix = require("../controller/homeLogix")
const router = express.Router()

router.get('/',homeLogix.getHome)

module.exports = router