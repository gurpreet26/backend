import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema =new Schema({

    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    categry: String,
    thumbnail:String,
    images:[String]
})
const Product= mongoose.model('Product',ProductSchema)

export default Product