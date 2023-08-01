import Product from '../models/product.model.js'

export const createProduct = async (req, res) => {
    const { name, price, type, color, amount, description } = req.body;
        
    try {
        const newProduct = new Product({
            name, 
            price, 
            type, 
            color, 
            amount, 
            description,
            user: req.user.id})

            const ProductSaved = await newProduct.save();
            res.json({
                id: ProductSaved._id,
                name: ProductSaved.name,
                price: ProductSaved.price
            })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProducts = async (req, res) => {
    const productsFound = await Product.find().populate('user')
    if (!productsFound) return res.status(400).json({ message: 'User not found' });
    
    return res.json(productsFound)
}

export const getProduct = async (req , res) => {
    const product = await Product.findById(req.params.id)

    if (!product) return res.status(404).json({ message: 'product not found'})
    res.json(product)
}

export const deleteProduct = async (req , res) => {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) return res.status(404).json({ message: 'product not found'})
    res.json(product)
}

export const updateProduct = async (req , res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    if (!product) return res.status(404).json({ message: 'product not found'})
    res.json(product)
}