const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    sellerEmail: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Product = mongoose.model('user', userSchema)

module.exports = Product
