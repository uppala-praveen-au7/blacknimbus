const express = require("express")

const userLogix = require("../controller/userLogix")

const router = express.Router()


router.get('/signUp',userLogix.getSignUp)

router.post('/signUp',userLogix.postSignUp)

router.get('/login',userLogix.getLogin)

router.post('/login',userLogix.postLogin)

module.exports = router