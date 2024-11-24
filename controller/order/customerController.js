const orderModel = require("../../models/orderModel")


const customerController = async (req, res) => {
    try {
        
        
        const person = req.body
        const restaurantId = person.restaurantId 
        const phone = person.phone
       

        const customer = await orderModel.findOne({ phone, restaurantId });
     
        res.json({ 
            message: "Customer info",
            success: true, 
            error: false,
            data: customer.name
         });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching products', error });
    }
};

module.exports = customerController