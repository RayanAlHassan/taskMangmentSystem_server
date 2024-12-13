import  express  from "express";
import bodyParser from "body-parser"
import "dotenv/config"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config.js/Mongo.js";
dotenv.config()
import router from "./routes/Tasks.js";


const app=express()
app.use(express.json());


const corsOption={
    origin:['http://localhost:3000',"https://task-mangment-system-ten.vercel.app"],
    credentials:true,
    optionsSuccessStatus:200
}
app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended:true}));


const PORT= process.env.PORT;

app.listen(PORT, (error)=>{
    if(!error) {
        console.log("Server is Running, and App is listening on port "+ PORT) 
    } else {
        console.log("Error: ", error)
    }
})
connectDB()

// Define routes
app.use("/task", router)
