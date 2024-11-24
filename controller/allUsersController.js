const userModel = require("../models/userModel")



async function allUsersController(req, res) {
    try {
        const userID = req.userId

        const users = await userModel.find({ restaurantId:userID });

        res.json({
            message: 'all users',
            success: true,
            error: false,
            data: users
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = allUsersController