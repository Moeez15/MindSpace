import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM events ORDER BY id ASC`
        const result = await pool.query(selectQuery)
        res.status(200).json(result.rows)
    }
    catch(err) {
        res.status(409).json( { error: err.message } )
    }
}

const getEventsById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT title, date, location, description, moodBenefit, image
            FROM events
            WHERE id = $1
        `
        const eventId = req.params.eventId
        const result = await pool.query(selectQuery, [eventId])
        res.status(200).json(result.rows[0])
    }
    catch(err){
        res.status(409).json( {error: err.message} )
    }

}

const getMoods = async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM moods`
        const result = await pool.query(selectQuery)
        res.status(200).json(result.rows)
    }
    catch(err) {
        res.status(409).json( {error: err.message} )
    }
}

const getEventsByMood = async (req, res) => {
    try {
        const { mood } = req.params
        const selectQuery = `SELECT * FROM events WHERE mood = $1 ORDER BY id ASC`
        const result = await pool.query(selectQuery, [mood])
        res.status(200).json(result.rows)
    }
    catch(err) {
        res.status(409).json( {error: err.message} )
    }
}


export default {
    getEvents,
    getEventsById,
    getMoods,
    getEventsByMood
}


