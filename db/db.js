import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('')
        console.log("mongodb connected ")
        
    } catch (error) {
        console.log("mongodb server issue ")
        
    }
}

export default connectDB;
