const express = require("express")
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const connectToDB = require("./config/db")
connectToDB() 

const userRouter = require('./routes/user.routes')


app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended : true}))



app.use('/user',userRouter)


app.listen(3000,(req,res)=>{
  console.log("server is running on port number 3000")
})