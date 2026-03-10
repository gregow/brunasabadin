# Sabadinnk — Bruna Sabadin Tattoo Landing Page

Delicate fineline & ornamental tattoo artist landing page with inquiry form.

## Structure

```
deploy/
├── server.py            # FastAPI backend + serves frontend
├── static/              # Built React frontend (served automatically)
│   ├── index.html
│   ├── static/          # JS, CSS bundles
│   ├── fonts/           # The Seasons Light, NewYork fonts
│   └── video/           # Place artist-reel.mp4 here
├── requirements.txt     # Python dependencies
├── .env.example         # Environment variables template
├── Dockerfile           # Single container build
├── docker-compose.yml   # Docker Compose with MongoDB
└── README.md
```

## Quick Start

### Option 1: Docker Compose (recommended)

```bash
docker compose up -d
```

Site runs at `http://localhost:8001`

### Option 2: Manual

1. Install MongoDB and start it
2. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run:
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 8001
   ```

## Configuration

Edit `.env`:

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017` |
| `DB_NAME` | Database name | `sabadinnk` |
| `CORS_ORIGINS` | Allowed origins (comma-separated) | `*` |

## Customization

### Replace images
Portfolio images are defined in `static/static/js/main.*.js` — to change them, edit the source React components and rebuild, or replace via the frontend source.

### Add your video
Drop your video file at:
```
static/video/artist-reel.mp4
```

### Add guest spots
Edit the translations in the source `i18n/translations.js` or update the StudioSection component.

## Features
- Multi-language: English, Portuguese, French (auto-detected by location)
- Tattoo inquiry form stored in MongoDB
- SEO optimized with structured data (JSON-LD)
- Responsive design with animations
- Self-hosted custom fonts (NewYork, The Seasons Light)
