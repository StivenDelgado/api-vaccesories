import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createProduct } from '../controllers/products.controller.js'

const router = Router()


router.post('/product', createProduct)
router.get('/products/:id', authRequired, (req, res) => 
    res.send('productos')
)

export default router