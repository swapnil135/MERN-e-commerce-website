const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')
const app = express()
const productRoutes = require('./routes/prductRoutes')
const customErrorHandler = require('./middleware/errorMiddleware')

dotenv.config()

connectDB()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)



const PORT = process.env.PORT
app.listen(PORT, console.log(`Server running on port ${PORT}`));