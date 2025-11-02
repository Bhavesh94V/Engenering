import mongoose from "mongoose";
import Admin from "./models/Admin.js";
import dotenv from "dotenv";

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {
        const admin = new Admin({
            username: "admin",
            password: "admin123",
            email: "admin@example.com", // add this line
        });

        await admin.save();
        console.log("✅ Admin user created successfully!");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("❌ Error:", err);
        mongoose.connection.close();
    });
