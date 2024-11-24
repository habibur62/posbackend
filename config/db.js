const mongoose = require('mongoose')


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB