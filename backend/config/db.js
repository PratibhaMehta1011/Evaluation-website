import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vaani930be22:WmlpunbadLZeAl3X@cluster0.vyhkg.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); 
    }
};
