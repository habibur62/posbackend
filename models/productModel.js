const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    category: String,
    stock: {
        type: Number,
        default: 0,
        min: 0
    },
    description: {
        type: String,
        trim: true
    },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Link to Restaurant
    image: {
        type: String, // URL for the product image
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const productModel = mongoose.model('product', productSchema)

module.exports = productModel;