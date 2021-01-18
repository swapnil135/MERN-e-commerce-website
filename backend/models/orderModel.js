const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: String, required: true },
                prodcut: { type: mongoose.Types.Schema.ObjectId, required: true, ref: 'Product' },
            }
        ],
        shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentResult: {
            id: { type: string },
            status: { type: string },
            update_time: { type: string },
            email_address: { type: string },
        },
        taxPrice: {
            type: String,
            required: true,
            default: 0.0
        },
        shippingPrice: {
            type: String,
            required: true,
            default: 0.0
        },
        totalPrice: {
            type: String,
            required: true,
            default: 0.0
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false
        },
        paidAt: {
            type: String,
            required: true,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false
        },
        deliveredAt: {
            type: Date,
        }
    }, {
    timestamps: true // this option creates the created at field automatically, it is a mongoose feature
}
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order