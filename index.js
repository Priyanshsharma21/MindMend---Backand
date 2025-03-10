import app from "./app.js";    //right full name of the file 
import * as dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

const { PORT,MONGODB_URL } = process.env

const startServer = async()=>{
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected To Database")
        app.listen(PORT,()=>console.log(`Running Up The Hill At ${PORT}km/hr`))
    } catch (error) {
        console.log(error)
    }
}
startServer()