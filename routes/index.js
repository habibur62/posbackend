const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignUp")
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const addProduct = require('../controller/product/addProduct')
const updatedProduct = require('../controller/product/updateProduct')
const deleteProduct = require('../controller/product/deleteProduct')
const allProduct = require('../controller/product/allProduct')
const allUsersController = require('../controller/allUsersController')
const orderProduct = require('../controller/order/orderProduct')
const customerController = require('../controller/order/customerController')
const allOrdersController = require('../controller/order/allOrdersController')

const addStaffController = require('../controller/addStaff')
const updatedStaffCrontroller = require('../controller/updateStaffController')
const deleteStaff = require('../controller/deleteStaff')




router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get("/logout", authToken, userLogout)

//admin-AdminPanel

router.get("/all-users", authToken, allUsersController)
router.post("/all-product", authToken, allProduct)

router.post("/all-orders", authToken, allOrdersController)


//add staff 
router.post("/add-staff", authToken, addStaffController)
router.put("/update-staff", authToken, updatedStaffCrontroller)
router.delete("/delete-staff", authToken, deleteStaff)


//product CRUD
router.post("/create", authToken, addProduct)
router.put("/update-product", authToken, updatedProduct)
router.delete("/:productId", authToken, deleteProduct)

//order create
router.post("/orders", authToken, orderProduct)
router.post("/customers", authToken, customerController)









module.exports = router