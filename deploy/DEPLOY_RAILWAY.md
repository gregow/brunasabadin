# Deploying Sabadinnk to Railway

## 1. Push to GitHub

Create a repo and push the `deploy/` folder contents:

```bash
cd deploy
git init
git add .
git commit -m "Sabadinnk landing page"
git remote add origin https://github.com/YOUR_USER/sabadinnk.git
git push -u origin main
```

## 2. Create Railway Project

1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **New Project** → **Deploy from GitHub repo**
3. Select your `sabadinnk` repo
4. Railway auto-detects Python and starts building

## 3. Add MongoDB

In your Railway project dashboard:

1. Click **New** → **Database** → **MongoDB**
2. A MongoDB instance is provisioned automatically
3. Click the MongoDB service → **Variables** → copy the `MONGO_URL` value

## 4. Set Environment Variables

Click your web service → **Variables** tab → add:

| Variable | Value |
|----------|-------|
| `MONGO_URL` | *(paste the MongoDB connection string from step 3)* |
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

## Add Your Video

Add the video file to the repo:
```bash
cp artist-reel.mp4 static/video/
git add static/video/artist-reel.mp4
git commit -m "Add artist video"
git push
```

Railway auto-deploys on push.

## Cost

| Service | Cost |
|---------|------|
| Railway Hobby plan | $5/mo (includes $5 usage credit) |
| MongoDB on Railway | Included in usage |
| SSL | Free |
| **Total** | **~$5/mo** |
