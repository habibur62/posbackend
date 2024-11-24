const userModel = require("../models/userModel");
var bcrypt = require('bcryptjs');


async function userSignUpController(req,res) {
    try {
        
        const {email, password,name} = req.body

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("Already user exits.");
        }


        if(!name){
            throw new Error("Please provide email");
        }
        if(!email){
            throw new Error("Please provide email");
        }
        if(!password){
            throw new Error("Please provide email");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong"); 
        }

        const payload = {
            ...req.body,
            role: "Admin",
            password: hashPassword
        }
        
        const userData = new userModel(payload)
        const saveUser = userData.save()

        res.json({
            data: saveUser,
            message: "Successfully Signup",
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

module.exports = userSignUpController