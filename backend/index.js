import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();
const app = express()
const PORT = process.env.PORT || 8080;


// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/user",userRoute);
app.use("/api/message",messageRoute)

// Database connection 
const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
        console.log("Connected to Database");
    }).catch((error) => {
        console.log(error);
    })
}

// PORT listening 

app.listen(PORT ,() => {
    connectDB();
    console.log(`Server listening at port ${PORT}`);
})