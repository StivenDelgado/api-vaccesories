import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { 
    createProduct, 
    deleteProduct, 
    getProduct, 
    getProducts, 
    updateProduct 
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.post('/products', authRequired, createProduct)
router.delete('/products/:id', authRequired, deleteProduct)
router.put('/products:id', authRequired, updateProduct)

export default router