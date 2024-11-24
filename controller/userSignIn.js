const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const {email, password} = req.body
        if(!email){
            throw new Error("Please provide email");
            
        }
        if(!password){
            throw new Error("Please provide password");
            
        }

        const user = await userModel.findOne({email})


        if(!user){
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compareSync(password, user.password); // true

        if(checkPassword){
         const tokenData = {
            _id : user._id,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY , { expiresIn: 60 * 60 * 8 });
        const tokenOption = {
            httpOnly : false,
            
            secure: true
        }
        res.cookie("token", token, tokenOption).json({
            message: "Login successfully",
            data: token,
            success: true,
            error: false
        })

        }else{
            throw new Error("Please check Password");
        }


    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
    
}

module.exports = userSignInController