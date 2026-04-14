# MindSpaces

A mood-based event discovery platform that helps you find social activities matching how you feel.

## What It Does

Instead of browsing events generically, MindSpaces lets you pick your current mood and get matched to venues and events that fit that emotional state:

| Mood | Venue | Vibe |
|------|-------|-------|
| Calm | Echo Lounge | Meditative, low-key gatherings |
| Ambition | House of Blues | Startup pitches, hackathons, goal-setting |
| Creative | The Pavilion | Open mics, art sessions, workshops |
| Venting | American Airlines Center | Support circles, talk groups |

## Features

- **Mood selection home page** — four animated bubbles navigate you to your emotional match
- **Location pages** — each venue has its own page showing upcoming events for that mood
- **All Events page** — browse every event with a filter dropdown by mood
- **Event countdown** — cards show time remaining until an event starts, or how long ago it ended

## Tech Stack

- **Frontend:** React 18, React Router v6, Vite, PicoCSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Setup

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your database connection string:

```
DATABASE_URL=your_postgres_connection_string
```

3. Run the development server:

```bash
npm run dev
```

This starts both the Express backend and the Vite frontend concurrently.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/events` | All events |
| GET | `/events/:eventId` | Single event by ID |
| GET | `/moods` | All mood categories |
| GET | `/moods/:mood/events` | Events filtered by mood |
