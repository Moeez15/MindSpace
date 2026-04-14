import express from 'express'
import eventController from '../controllers/event.js'

const router = express.Router()

router.get('/', eventController.getEvents)
router.get('/:eventId', eventController.getEventsById)

export default router