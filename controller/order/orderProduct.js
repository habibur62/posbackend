const orderModel = require("../../models/orderModel")

const orderProduct = async(req,res) =>{
    try {
        const {orderItems, formData} = req.body
        const restaurantId = formData.restaurantId;
        const newOrder = new orderModel({
            name: formData.customerName,
            phone: formData.phone,
            servedBy: formData.servedBy,
            servedId: formData.servedId,
            items: orderItems,
            restaurantId: restaurantId
        })
        const savedOrder = await newOrder.save();

        if (!restaurantId === 0 ) {
            return res.status(400).json({ message: "Missing required fields" });
          }
        

        res.status(201).json({
            data: savedOrder,
            message: "Order create successfully",
            success: true,
            error: false
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = orderProduct