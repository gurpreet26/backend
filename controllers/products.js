// import fs from 'fs'
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;


// const createProduct =(req, res)=>{
//     console.log(req.body)
//     products.push(req.body)

//     res.send("created")

// }

// const getProducts = (req ,res)=>{
//     // console.log(req.body)
//     res.json(products)

// }

// const specficProduct = (req ,res)=>{
//     const id =+req.params.id;
//     const product = products.find(p=>p.id ===id)

//     res.json(product)
// }

// const updateProducts = (req,res) =>{
    
//     const id =+req.params.id;
//     const productIndex = products.findIndex(p=>p.id ===id)
//     products.splice(productIndex,1 ,{...req.body, id})
//     res.send("update function") 
    

// }
// const replaceProduct = (req,res) =>{
    
//     const id =+req.params.id;
//     const productIndex = products.findIndex(p=>p.id ===id)
//     const product =products[productIndex]
//     products.splice(productIndex,1 ,{...product,...req.body})
//     res.send("patch function") 
    

// }
//  const deleteProduct = (req,res)=>{
//     const id =+req.params.id;
//     const productIndex = products.findIndex(p=>p.id ===id)
//     const product =products[productIndex]
//     products.splice(productIndex,1 )
//     res.send("delete function")

// }

// export {createProduct,getProducts,updateProducts, specficProduct,replaceProduct,deleteProduct};
