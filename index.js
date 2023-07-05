
import fs from 'fs'
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;
import routes from './routes/productRouters.js'
import UserRouter from './routes/userRoutes.js'

import  express from "express";
import path from 'path'
import morgan from "morgan";
import connectDB from './db/db.js';

// const router = express.Router();

const __dirname = path.resolve(); // error was __dirname is not defined in ES module scope
const app = express();
 
app.use(morgan('combined')) // used for log files
app.use(express.json())// used becoz req body is undefined and does not show anything on client side
app.use("/static",express.static(path.join(__dirname,"public")))
app.use('/products', routes)
app.use('/user', UserRouter)


///custom middleware just as logger
// app.use((req, res, next)=>{
//     console.log(req.method,req.ip, req.hostname)
//     next()
// })
// //custom auth
// const auth =(req,res,next)=>{
//     if(req.body.password =="1234")
//     next()
//     else{
//         res.sendStatus(401)
//     }

// }
// //using url parmas
// app.get("/product/:id", (req, res)=>{
//     console.log(req.params)
//     res.json("okk")

// })

// app.get('/',auth, (req, res)=>{

//     res.json({type:"get"})
//     // res.setHeader("Content-type","application/json") //use to set header
//     // res.end("<h1>hello world</h1>")
//     // res.send(data) //use to send html files
//     // res.json({data});

// })

connectDB()

// app.post("/products" , createProduct)
// app.get('/products', getProducts)
// //specfic number product

// app.get('/products/:id',specficProduct)
// //update the product it wiil overide data with new data
// app.put("/products/:id" ,updateProducts)
// // only replace text with new text
// app.patch("/products/:id" ,replaceProduct)
// app.delete("/products/:id", deleteProduct 
// )


app.listen(8080 ,()=>{
    console.log("server started")

})