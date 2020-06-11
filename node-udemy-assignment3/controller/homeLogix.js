const path = require("path")

const rootDir = require("../utils/path")

const homeLogix = {
    getHome:(req,res)=>{
        res.sendFile(path.join(rootDir,'views','home.html'))
    }
}

module.exports = homeLogix