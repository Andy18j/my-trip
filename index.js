const express = require("express")
const { connection } = require("./config/db")

//  const config = require("./config/db")
const { userRouter } = require("./routes/user.route")
require("dotenv").config()



const app = express()
app.use(express.json())

app.use("/api",userRouter)


app.get("/",(req,res)=>{
    res.send("Welcome 🙏")
})


app.listen(process.env.PORT,async()=>{
    try{
       await connection 
       console.log("connected to the db")
    }
    catch(err){
        console.log("Not connected to the db")
    }
    console.log(`port is running on the ${process.env.PORT}`)
})