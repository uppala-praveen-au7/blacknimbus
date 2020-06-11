const path = require("path")

const rootDir = require("../utils/path")
const User = require("../model/userModel")

const userLogix = {
    getSignUp: (req,res)=>{
        res.sendFile(path.join(rootDir,'views','userSignUp.html'))
    },
    postSignUp:async (req,res)=>{
        try{
            const exists = await User.findOne({username:req.body.username})
            if(!exists){
                const newUser = await User.create({
                    username:req.body.username,
                    email:req.body.email,
                    password:req.body.password})
                if(newUser){
                    res.redirect('/api/v1/user/login')
                }else{
                    res.sendfile(path.join(rootDir,'views','invalidCredentials.html'))
                }
            }else{
                res.sendFile(path.join(rootDir,'views','userExists.html'))
            }
        }catch(err){
            res.json({message:err.message})
        }
    },
    getLogin:(req,res)=>{
        res.sendFile(path.join(rootDir,'views','userLogin.html'))
    },
    postLogin:async (req,res)=>{
        try{
            const exists = await User.findOne({username:req.body.username})
            if(exists){
                res.redirect('/api/v1/home')
                
            }else{
                res.sendFile(path.join(rootDir,'views','inValidUser.html'))
            }

        }catch(err){
            res.json({message:err.message})
        }
    }
}
module.exports = userLogix