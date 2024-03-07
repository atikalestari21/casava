import express from "express" ;
import {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/Products.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/products', verifyUser, getProducts);
router.get('/products/:id', verifyUser, getProductsById);
router.post('/products', verifyUser, createProduct);
router.patch('/products/:id', verifyUser, updateProduct);
router.delete('/products/:id', verifyUser, deleteProduct);

export default router;