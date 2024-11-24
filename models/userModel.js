const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    role: { type: String, enum: ['Admin', 'Staff'], default: 'Admin' },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant',}, // Link to Restaurant
    profilePic: String
    
},{
    timestamps: true
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel