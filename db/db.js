import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://guri:1234@cluster0.lx8ll78.mongodb.net/ecommerce')
        console.log("mongodb connected ")
        
    } catch (error) {
        console.log("mongodb server issue ")
        
    }
}

export default connectDB;