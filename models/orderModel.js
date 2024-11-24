const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    servedBy: {
      type: String,
      trim: true
    },
    servedId: {
      type: String,
      trim: true
    },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Link to Restaurant
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        productPrice: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, },
    status: { 
      type: String, 
      enum: ["Pending", "Completed", "Cancelled"], 
      default: "Pending" 
    },
    paymentMethod: { type: String,  },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel
