import { createProduct, deleteProduct, getProducts, replaceProduct, specficProduct, updateProducts } from '../controllers/productController.js';
import express, { Router } from 'express';

const router = express.Router();


router.post("/" , createProduct)
router.get('/', getProducts)
//specfic number product

router.get('/:id',specficProduct)
//update the product it wiil overide data with new data
router.put("/:id" ,updateProducts)
// only replace text with new text
router.patch("/:id" ,replaceProduct)
router.delete("/:id", deleteProduct 
)
 export default router;