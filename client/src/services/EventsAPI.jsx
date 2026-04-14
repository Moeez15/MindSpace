const BASE_URL = '/events'

const getAllEvents = async () => {
    const response = await fetch(BASE_URL)
    if (!response.ok) throw new Error('Failed to fetch events')
    return response.json()
}

const getEventById = async (eventId) => {
    const response = await fetch(`${BASE_URL}/${eventId}`)
    if (!response.ok) throw new Error(`Failed to fetch event ${eventId}`)
    return response.json()
}

export default { getAllEvents, getEventById }
