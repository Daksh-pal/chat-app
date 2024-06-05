import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from "./routes/userRoute.js"


dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json());

// routes
app.use("/api/user",userRoute);

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