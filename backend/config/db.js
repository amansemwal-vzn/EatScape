import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://EatScape:ffdYywg36oHiASK4@cluster0.jsboa7t.mongodb.net/EatScape').then(()=>console.log("Database Connected!!"));
}