import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI; 
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in the .env file");
        }

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); 
    }
};
