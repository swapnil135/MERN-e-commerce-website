// this is our databse connection file
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // mongoose.connect returns a promise
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`error : ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB