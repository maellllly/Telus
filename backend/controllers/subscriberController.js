const asyncHandler = require('express-async-handler')
const Subscriber = require('../models/subscriberModel')

// @desc Get All Subscriber
// @route GET  /ims/subscriber/{phoneNumber}
// @access Private
const getAllSubscriber = asyncHandler(async (req, res) => {
  const sub = await Subscriber.find()

  res.status(200).json(sub)
})

// @desc Get Subscriber
// @route GET  /ims/subscriber/{phoneNumber}
// @access Private
const getSubscriber = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: `Get subscriber ${req.params.id}` })

  const sub = await Subscriber.find({ phonenumber: req.params.id })

  res.status(200).json(sub)
})

// @desc Set Subscriber
// @route POST  /ims/subscriber/
// @access Private
const setSubscriber = asyncHandler(async (req, res) => {
  try {
    const sub = await Subscriber.create({
      phonenumber: req.body.phonenumber,
      username: req.body.username,
      password: req.body.password,
      domain: req.body.domain,
      status: req.body.status,
      features: {
        callForwardNoReply: {
          provisioned: req.body.provisioned,
          destination: req.body.destination,
        },
      },
    })

    res.status(201).json(sub)
  } catch (error) {
    res.status(201).json({ message: error.message })
  }
})

// @desc Update Subscriber
// @route PUT /ims/subscriber/:phoneNumber
// @access Private
const updateSubscriber = asyncHandler(async (req, res) => {
  const sub = await Subscriber.findById(req.params.id)

  if (!sub) {
    res.status(400)
    throw new Error('Subscriber not found')
  }

  const updatedSub = await Subscriber.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )

  res.status(200).json(updatedSub)
})

// @desc Delete Subscriber
// @route GET  /ims/subscriber/:phoneNumber
// @access Private
const deleteSubscriber = asyncHandler(async (req, res) => {
  const sub = await Subscriber.findById(req.params.id)

  if (!sub) {
    res.status(400).message
    throw new Error('Subscriber not found')
  }

  await sub.remove()

  res.status(200).json({ message: 'Subscriber has been deleted successfully' })
})

module.exports = {
  getAllSubscriber,
  getSubscriber,
  setSubscriber,
  updateSubscriber,
  deleteSubscriber,
}
