const productModel = require("../../models/productModel")


const updatedProduct = async(req,res) =>{
    try {
        const productId  = req.body._id;
        //console.log(productId)
        const restaurantId = req.body.restaurantId; // Ensure product belongs to the correct restaurant
       // console.log(restaurantId)

        const updatedProduct = await productModel.findOneAndUpdate(
            { _id: productId, restaurantId }, // Filter by both product ID and restaurant ID
            { ...req.body },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.status(201).json({
            data: updatedProduct,
            message: "Product updated Successfully",
            success: true,
            error: false
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = updatedProduct