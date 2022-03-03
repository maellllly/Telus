const express = require('express')
const router = express.Router()

const cors = require('cors')
router.use(
  cors({
    origin: '*',
  })
)

const {
  getAllSubscriber,
  getSubscriber,
  setSubscriber,
  updateSubscriber,
  deleteSubscriber,
} = require('../controllers/subscriberController')

router.route('/').get(getAllSubscriber).post(setSubscriber)
router
  .route('/:id')
  .get(getSubscriber)
  .delete(deleteSubscriber)
  .put(updateSubscriber)

module.exports = router
