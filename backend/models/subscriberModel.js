const mongoose = require('mongoose')

const subscriberSchema = mongoose.Schema(
  {
    phonenumber: {
      type: String,
      required: [true, 'Please add a phonenumber'],
    },
    username: {
      type: String,
      required: [true, 'Please add a username'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    domain: {
      type: String,
      required: [true, 'Please add a domain'],
    },
    status: {
      type: String,
      required: [true, 'Please add a status'],
    },
    features: {
      type: Array,
      default: [],
    },
  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('Subscriber ', subscriberSchema)
