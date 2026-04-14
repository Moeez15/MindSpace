// Each venue maps to a mood. Index (1–4) matches the LocationEvents index prop.
const locations = [
    {
        id: 1,
        name: 'Echo Lounge',
        mood: 'calm',
        address: '551 Ponce De Leon Ave NE',
        city: 'Atlanta',
        state: 'GA',
        zip: '30308',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'
    },
    {
        id: 2,
        name: 'House of Blues',
        mood: 'ambition',
        address: '1055 Peachtree St NE',
        city: 'Atlanta',
        state: 'GA',
        zip: '30309',
        image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063'
    },
    {
        id: 3,
        name: 'Pavilion',
        mood: 'creative',
        address: '265 Park West Dr',
        city: 'Atlanta',
        state: 'GA',
        zip: '30339',
        image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3'
    },
    {
        id: 4,
        name: 'American Airlines Center',
        mood: 'venting',
        address: '2500 Victory Ave',
        city: 'Dallas',
        state: 'TX',
        zip: '75219',
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14'
    }
]

const getAllLocations = async () => {
    return Promise.resolve(locations)
}

const getLocationByIndex = async (index) => {
    return Promise.resolve(locations[index - 1])
}

export default { getAllLocations, getLocationByIndex }
