import express from 'express'
import path from 'path'
import cors from 'cors'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'

// import the router from your routes file
import eventRouter from './routes/event.js'
import moodRouter from './routes/mood.js'


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())


if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')))
    app.use(express.static('public'))
}

// specify the api path for the server to use
app.use('/events', eventRouter)
app.use('/moods', moodRouter)


if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.use((err, _req, res, _next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})