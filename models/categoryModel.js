const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },  
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Link to Restaurant
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const categoryModel = mongoose.model('categories', categorySchema)

module.exports = categoryModel;