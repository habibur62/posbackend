const productModel = require("../../models/productModel")


const addProduct = async(req,res) =>{
    try {
        const payload = req.body
    

        const newProduct = new productModel(payload)

        const savedProduct = await newProduct.save();


        res.status(201).json({
            data: savedProduct,
            message: "Product added Successfully",
            success: true,
            error: false
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = addProduct