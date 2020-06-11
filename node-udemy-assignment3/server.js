const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv/config")

mongoose.connect(process.env.DB_CONNECTION,
    {
        dbName:"W20D1A",
        user:"mvex",
        pass:"mvex",
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(d=>console.log('DB Connected ...')).catch(err=>console.log(err.message))
    
const routes = require("./routes/_indexRoute")

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/api/v1',routes)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(3000,()=>console.log('server is running ...'))