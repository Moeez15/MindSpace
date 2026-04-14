import express from 'express'
import eventController from '../controllers/event.js'

const router = express.Router()

router.get('/', eventController.getMoods)
router.get('/:mood/events', eventController.getEventsByMood)

export default router
