const productModel = require("../../models/productModel")


const deleteProduct = async (req, res) => {
    try {
        const productId  = req.body._id;

        //console.log(productId)
        const restaurantId = req.body.restuId

        const deletedProduct = await productModel.findOneAndDelete({ _id: productId, restaurantId });

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting product', error });
    }
};

module.exports = deleteProduct