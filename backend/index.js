import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173/', // Update this to your frontend URL
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

// Connect to DB
connectDB();

// Export serverless function
export default (req, res) => app(req, res);
