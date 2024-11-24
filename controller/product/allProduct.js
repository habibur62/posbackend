const productModel = require("../../models/productModel")


const allProduct = async (req, res) => {
    try {
        
        const {restaurantId} = req.body;
        
        const products = await productModel.find({ restaurantId });
        res.json({ 
            message: "all product",
            success: true, 
            error: false,
            data: products
         });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching products', error });
    }
};

module.exports = allProduct