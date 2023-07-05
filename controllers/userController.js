import e from "express";
import User from "../models/userSchema.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const addUser = async (req, res) => {
    try {
        
        // method 1
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(req.body.password, salt);
        req.body.password =passwordHash

        //method 2 to encrpt the password
        // const passwordHash = bcrypt.hashSync(req.body.password, 10)
        // req.body.password =passwordHash

       const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
    }



}
const loginUser =async (req, res) => {
    try {
        const user= await User.findOne({email:req.body.email})
       if (bcrypt.compareSync(req.body.password, user.password)){

        const token = jwt.sign({id: user._id},"hello" )
        user.token=token;
        await user.save()
        res.send(token)
       }
       else{
        res.send("password mismatch")
       }
    } catch (error) {
        
    }


}

const getUser = async(req, res) => {
    const user =await User.find()
    console.log(user)
    res.send(user)

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

export { addUser, getUser, updateUser, deleteUser,loginUser  }