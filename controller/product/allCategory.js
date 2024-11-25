const categoryModel = require("../../models/categoryModel")


const allCategory = async (req, res) => {
    try {
        
        const {restaurantId} = req.body;
        const category = await categoryModel.find({ restaurantId });
        res.json({ 
            message: "all category",
            success: true, 
            error: false,
            data: category
         });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching category', error });
    }
};

module.exports = allCategory