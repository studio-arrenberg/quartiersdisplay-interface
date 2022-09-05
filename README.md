# Quartiersdisplay Interface
Interface for the Quartiersdisplay. This React instance runs locally on the display, and fetches the data through the API.

## Stack

**Core** React<br>
**Dependencies** Nextjs, SWR, dayjs

## Setup

1. Install dependencies `npm install`
2. Dublicate `.env.example` and rename to `.env`
3. Set Environment variables in `.env`
4. Run Development server `npm run dev`

## Features
- Fallback Screen
- Display Content from Quartiersplattform
- Define API Endpoint


## API Format

```json
[
    "meta": {
        "name": "Example",
        "slide_duration": 6000,
    },
    "content": [
        {
            "title": "this is the title",
            "subtitle": "hello subtitle",
            "text": "hello text", // first priority
            "content": "<p>html and text</p>", // second priority
            "image": "http://url.de",
            "emoji": "✌️",
            "author": "Mac Maximum",
            "event_date": "2013-01-01",
            "event_time": "13:00:00",
            "event_end_time": "18:00:00",
            "type": "veranstaltung", // event, message, poll, ...
            "pool": [
                {
                    "title": "Erste Frage",
                    "votes": 2,
                    "percentage": 66,
                    "total-votes": 3
                },
                {
                    "title": "Zweite Frage",
                    "votes": 1,
                    "percentage": 33,
                    "total-votes": 3
                }
            ]
        },
        {
            // ...
        }
    ]
]
```