const categoryModel = require("../../models/categoryModel")


const deleteCategory = async (req, res) => {
    try {
        const productId  = req.body._id;

        //console.log(productId)
        const restaurantId = req.body.restuId

        const deletedProduct = await categoryModel.findOneAndDelete({ _id: productId, restaurantId });

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }
        
        res.json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting category', error });
    }
};

module.exports = deleteCategory