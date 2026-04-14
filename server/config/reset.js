import { pool } from './database.js'
import eventData from '../data/event.js'

const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date TIMESTAMP NOT NULL,
            location VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            mood VARCHAR(50) NOT NULL,
            moodBenefit VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 Events table created successfully')
    }
    catch(err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (title, date, location, description, mood, moodBenefit, image) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            event.title,
            event.date,
            event.location,
            event.description,
            event.mood,
            event.moodBenefit,
            event.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }

            console.log(`✅ ${event.title} added successfully`)
        })
    })
}

const createMoodsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS moods;

        CREATE TABLE IF NOT EXISTS moods (
            id SERIAL PRIMARY KEY,
            mood VARCHAR(15) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 Moods table created successfully')
    }
    catch (err) {
        console.log('⚠️ error creating moods table', err)
    }
}

const seedMoodsTable = async () => {
    await createMoodsTable()

    eventData.forEach((event) => {
        const insertQuery = {
            text: `INSERT INTO moods (mood) VALUES ($1)`
        }

        const values = [event.mood]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.log('⚠️ error inserting mood', err)
                return
            }

            console.log(`✅ ${event.mood} added successfully`)
        })
    })
}

seedEventsTable()
seedMoodsTable()