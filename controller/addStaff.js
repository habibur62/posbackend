const userModel = require("../models/userModel");
var bcrypt = require('bcryptjs');


async function addStaffController(req,res) {
    try {
        
        // if (req.user.role !== 'admin') {
        //     return res.status(403).json({ message: 'Permission denied' });
        //   }

        
        const {email, password,name} = req.body
        const restaurantId = req.userId;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
          }

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("Already user exits.");
        }


        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong"); 
        }

        const payload = {
            ...req.body,
            password: hashPassword,
            restaurantId: restaurantId
        }
        
        const userData = new userModel(payload)
        const saveUser = userData.save()

        res.json({
            data: saveUser,
            message: "Successfully Staff added",
            success: true,
            error: false
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = addStaffController