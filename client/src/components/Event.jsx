import '../css/Event.css'

const formatTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

const formatTimeRemaining = (dateString) => {
    const eventTime = new Date(dateString).getTime()
    const now = Date.now()
    const diff = eventTime - now

    if (diff < 0) {
        const days = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24))
        return `Ended ${days} day${days !== 1 ? 's' : ''} ago`
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    if (days > 0) return `${days} day${days !== 1 ? 's' : ''} away`
    if (hours > 0) return `${hours} hour${hours !== 1 ? 's' : ''} away`
    return 'Starting soon!'
}

const Event = ({ id, title, date, image }) => {
    return (
        <article className='event-information'>
            <img src={image} alt={title} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {formatDate(date)} <br /> {formatTime(date)}</p>
                    <p id={`remaining-${id}`}>{formatTimeRemaining(date)}</p>
                </div>
            </div>
        </article>
    )
}

export default Event
