const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/userModel')
const Product = require('./models/productModel')
const Order = require('./models/orderModel')
const connectDB = require('./db')

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany() //clear all the stuff from the database

        const createdUsers = await User.insertMany(users) //make an array of created users
        const adminUsers = createdUsers[0]._id // this is the admin
        const sampleProducts = products.map(products => {
            return { ...products, user: adminUsers } // add the user to each product as adminUser

        })
        await Product.insertMany(sampleProducts)
        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany() //clear all the stuff from the database


        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        console.exit(1)
    }

}

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}