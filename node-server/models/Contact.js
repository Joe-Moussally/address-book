const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type:Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location:{
    lg: {
        type: Number,
        required: true
    },
    lt: {
        type: Number,
        required: true
    }
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

module.exports = mongoose.model('Contact', contactSchema);