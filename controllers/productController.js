import Product from "../models/productSchema.js"
// const Product =model.Product;

const createProduct =async (req, res)=>{
    try {
        const product =new Product(req.body);
        await product.save()
          res.status(201).json(req.body)
        
    } catch (error) {
       console.log(error) 
    }
 
  }


const getProducts = async(req ,res)=>{
   const products= await Product.find()
    // console.log(req.body)
    res.json(products)

}

const specficProduct = async(req ,res)=>{
    const id = req.params.id;
    console.log(id)
    const product = await Product.findById(id)

    res.json(product)
}
//put
const updateProducts = async(req,res) =>{
    
    const id =req.params.id;
   try {
    const product = await Product.findOneAndReplace({_id:id},req.body,{new:true})

    res.json(product)
    
   } catch (error) {
    console.log(error)
   }
    

}
const replaceProduct = async(req,res) =>{
    
     
    const id =req.params.id;
   try {
    const product = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  
    res.json(product)
    
   } catch (error) {
    console.log(error)
   }
    

}
 const deleteProduct = async(req,res)=>{
    const id =req.params.id;
    try {
     const product = await Product.findOneAndDelete({_id:id},{new:true})
 
     res.json(product)
     
    } catch (error) {
     console.log(error)
    }

}

export {createProduct,getProducts,updateProducts, specficProduct,replaceProduct,deleteProduct};
