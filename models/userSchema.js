import mongoose, {  Schema } from "mongoose";

const UserSchema =new Schema({
    name:String,
    password:String,
    token:String
})

const User =mongoose.model("User",UserSchema)

export default User;