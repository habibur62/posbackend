const userModel = require("../models/userModel");


const deleteStaff = async (req, res) => {
    try {
            const {userId}  = req.body;
            
            if (!userId) {
                return res.status(400).json({ success: false, message: 'User ID is required' });
            }
        
        const restaurantId = req.userId;
        if (!restaurantId) {
            return res.status(400).json({ success: false, message: "Restaurant ID is required" });
        }

        const deletedUser = await userModel.findOneAndDelete({ _id: userId, restaurantId });


        if (!deletedUser) {
            return res.status(404).json({ success: false, message: 'Staff not found' });
        }
        
        res.json({ success: true, message: 'Staff deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting staff', error });
    }
};
 
module.exports = deleteStaff