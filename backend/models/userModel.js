const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    }, {
    timestamps: true // this option creates the created at fiels automatically, it is a mongoose feature
}
)

const User = mongoose.model('User', userSchema)

module.exports = User