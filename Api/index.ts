import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookiParser from "cookie-parser"
import authRoute from "./routes/auth"
import hotelRoute from "./routes/hotels"
import userRoute from "./routes/users"
import roomRoute from "./routes/rooms"
const app = express()

dotenv.config()

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO || "")
        console.log("Connect to mongoDB")
    }catch(err){
        throw err;
  
    }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB Disconnected")
})

app.use(express.json())
app.use(cookiParser())

app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/users", userRoute)
app.use("/api/rooms", roomRoute)

app.use((err: any,req:express.Request,res:express.Response,next: any) =>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong!"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8000, ()=>{
    connect()
    console.log('listening on http://localhost:8000')
})