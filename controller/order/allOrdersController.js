const orderModel = require("../../models/orderModel");


const allOrdersController = async (req, res) => {
    try {
        
    const {user} = req.body
       
        if(user.restaurantId){
            var orders = await orderModel.find({ servedId: user._id });
            
        }else{
            var orders = await orderModel.find({ restaurantId: user._id });
        }
        
        res.json({ 
            message: "all orders",
            success: true, 
            error: false,
            data: orders
         });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching orders', error });
    }
};

module.exports = allOrdersController