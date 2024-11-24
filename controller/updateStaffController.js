const userModel = require("../models/userModel");


const updatedStaffCrontroller = async(req,res) =>{
    try {
        const productId  = req.body._id;
        //console.log(productId)
        const restaurantId = req.userId; // Ensure product belongs to the correct restaurant
       // console.log(restaurantId)

        const updatedProduct = await userModel.findOneAndUpdate(
            { _id: productId, restaurantId }, // Filter by both product ID and restaurant ID
            { ...req.body },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Staff not found' });
        }

        res.status(201).json({
            data: updatedProduct,
            message: "Staff updated Successfully",
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

module.exports = updatedStaffCrontroller