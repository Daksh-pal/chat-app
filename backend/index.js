import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/user",userRoute);
app.use("/api/message",messageRoute)

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
        console.log("Connected to Database");
    }).catch((error) => {
        console.log(error);
    })
}

app.listen(PORT ,() => {
    connectDB();
    console.log(`Server listening at port ${PORT}`);
})