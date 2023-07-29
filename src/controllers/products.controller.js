import product from '../models/product.model.js'

export const createProduct = async (req, res) => {
    const { name, price, type, color, amount, description } = req.body;
        
    try {
        const newProduct = new product({
            name, 
            price, 
            type, 
            color, 
            amount, 
            description})

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
export const products = async (req, res) => {
    const productsFound = await products.findById(req.products.id)
    if (!productsFound) return res.status(400).json({ message: 'User not found' });
    
    return res.json({
        id: productsFound._id,
        name: productsFound.name,
        price: productsFound.price,
        amount: productsFound.amount,
        color: productsFound.color,
        createdAt: productsFound.createdAt,
        updatedAt: productsFound.updatedAt
    })
}