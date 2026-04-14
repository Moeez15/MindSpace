import { useNavigate } from 'react-router-dom'
import '../css/Locations.css'

const MOODS = [
    { label: 'Calm',      mood: 'calm',      path: '/echolounge',       emoji: '🌊', color: '#3b82f6' },
    { label: 'Ambition',  mood: 'ambition',  path: '/houseofblues',     emoji: '🔥', color: '#f59e0b' },
    { label: 'Creative',  mood: 'creative',  path: '/pavilion',         emoji: '🎨', color: '#ec4899' },
    { label: 'Venting',   mood: 'venting',   path: '/americanairlines', emoji: '💬', color: '#10b981' },
]

// Each bubble gets a unique drift animation with different start positions and durations
const BUBBLE_STYLES = [
    { top: '25%', left: '18%', animationDuration: '7s',  animationDelay: '0s'   },
    { top: '55%', left: '55%', animationDuration: '9s',  animationDelay: '1.5s' },
    { top: '20%', left: '65%', animationDuration: '8s',  animationDelay: '0.8s' },
    { top: '60%', left: '22%', animationDuration: '10s', animationDelay: '2s'   },
]

const Locations = () => {
    const navigate = useNavigate()

    return (
        <div className='home'>
            <div className='home-hero'>
                <h2>How are you feeling today?</h2>
                <p>Pick a mood and we'll find the right space for you.</p>
            </div>

            <div className='bubbles-container'>
                {MOODS.map((item, i) => (
                    <button
                        key={item.mood}
                        className='bubble'
                        style={{
                            ...BUBBLE_STYLES[i],
                            '--bubble-color': item.color,
                            animationDuration: BUBBLE_STYLES[i].animationDuration,
                            animationDelay: BUBBLE_STYLES[i].animationDelay,
                        }}
                        onClick={() => navigate(item.path)}
                    >
                        <span className='bubble-emoji'>{item.emoji}</span>
                        <span className='bubble-label'>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Locations
