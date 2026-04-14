import { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/Events.css'

const MOODS = ['calm', 'ambition', 'creative', 'venting']

const Events = () => {
    const [events, setEvents] = useState([])
    const [activeMood, setActiveMood] = useState('all')

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    const filteredEvents = activeMood === 'all'
        ? events
        : events.filter(event => event.mood === activeMood)

    return (
        <div className='events-page'>
            <div className='events-filter-bar'>
                <div className='events-filter-select-wrapper'>
                    <select
                        value={activeMood}
                        onChange={(e) => setActiveMood(e.target.value)}
                    >
                        <option value='all'>See events at . . .</option>
                        {MOODS.map(mood => (
                            <option key={mood} value={mood}>
                                {mood.charAt(0).toUpperCase() + mood.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    className='events-show-all-btn'
                    onClick={() => setActiveMood('all')}
                >
                    SHOW ALL EVENTS
                </button>
            </div>

            <div className='events-content'>
                <div className='events-grid'>
                    {
                        filteredEvents.length > 0 ? filteredEvents.map((event) =>
                            <Event
                                key={event.id}
                                id={event.id}
                                title={event.title}
                                date={event.date}
                                image={event.image}
                            />
                        ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> No events found.</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Events
