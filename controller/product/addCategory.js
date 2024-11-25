const categoryModel = require("../../models/categoryModel")


const addCategory = async(req,res) =>{
    try {
        const payload = req.body
    

        const newCategory = new categoryModel(payload)

        const savedProduct = await newCategory.save();


        res.status(201).json({
            data: savedProduct,
            message: "Category added Successfully",
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

module.exports = addCategory