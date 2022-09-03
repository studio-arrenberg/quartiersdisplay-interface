# Quartiersdisplay Interface
Interface for the Quartiersdisplay. This React instance runs locally on the display, and fetches the data through the API.

## Stack

**Core** React<br>
**Dependencies** Nextjs, SWR

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
        "location": "example",
        "slide_duration": 6000,
    },
    "content": [
        {
            "title": "this is the title",
            "subtitle": "hello subtitle",
            "text": "hello text", // first priority
            "content": "hello html and text", // second priority
            "image": "http://url.de",
            "author": "Author Name",
            "eventDate": "2013-01-01T00:00:00Z",
            "type": "veranstaltung", // event, message, poll, ...
            "createdOn": "2013-01-01T00:00:00",
            "updatedOn": "2013-01-01T00:00:00",
        },
        {
            // ...
        }
    ]
]
```