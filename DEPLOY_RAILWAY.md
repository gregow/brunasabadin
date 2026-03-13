# Deploying to Railway

## Structure

```
/
├── backend/
│   ├── server.py          # FastAPI (API + serves built frontend)
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/               # React source (components, i18n, etc.)
│   ├── public/            # index.html, fonts, video, images
│   ├── package.json
│   └── build/             # Generated at build time by Dockerfile
├── Dockerfile             # Multi-stage: builds frontend + runs backend
├── railway.json           # Railway config
└── DEPLOY_RAILWAY.md
```

The Dockerfile handles everything: installs Node, builds React, then runs FastAPI serving both the API and the static frontend.

## 1. Push to GitHub

From the project root:
```bash
git init
git add .
git commit -m "Sabadinnk landing page"
git remote add origin https://github.com/YOUR_USER/sabadinnk.git
git push -u origin main
```

## 2. Create Railway Project

1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **New Project** → **Deploy from GitHub repo**
3. Select your repo — Railway detects the Dockerfile and starts building

## 3. Add MongoDB

In your Railway project dashboard:

1. Click **New** → **Database** → **MongoDB**
2. Click the MongoDB service → **Variables** → copy the `MONGO_URL` value

## 4. Set Environment Variables

Click your web service → **Variables** tab → add:

| Variable | Value |
|----------|-------|
| `MONGO_URL` | *(paste MongoDB connection string from step 3)* |
| `DB_NAME` | `sabadinnk` |

Railway sets `PORT` automatically — don't add it manually.

## 5. Generate Public URL

1. Click your web service → **Settings** → **Networking**
2. Click **Generate Domain** (gives you `*.up.railway.app`)
3. Or click **Custom Domain** and add `brunasabadin.com`

### Custom Domain DNS

In your domain registrar, add:
```
CNAME → brunasabadin.com → YOUR_APP.up.railway.app
CNAME → www.brunasabadin.com → YOUR_APP.up.railway.app
```

Railway handles SSL automatically.

## 6. Verify

Visit your Railway URL — the site should be live.

## Updating the Site

Edit any file (components, images, translations), push to GitHub, Railway auto-deploys:
```bash
git add .
git commit -m "Update portfolio images"
git push
```

## Adding Portfolio Images

1. Drop images into `frontend/public/images/`
2. Update `frontend/src/components/PortfolioSection.js` — change the `src` values to `/images/your-file.jpg`
3. Push to GitHub — Railway rebuilds automatically

## Adding Your Video

1. Drop your video at `frontend/public/video/artist-reel.mp4`
2. Push to GitHub

## Cost

| Service | Cost |
|---------|------|
| Railway Hobby plan | $5/mo (includes $5 usage credit) |
| MongoDB on Railway | Included in usage |
| SSL | Free |
| **Total** | **~$5/mo** |
