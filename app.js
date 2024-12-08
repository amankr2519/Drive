const express = require("express")

const userRouter = require('./routes/user.routes')
const app = express()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended : true}))



app.use('/user',userRouter)


app.listen(3000,(req,res)=>{
  console.log("server is running on port number 3000")
})