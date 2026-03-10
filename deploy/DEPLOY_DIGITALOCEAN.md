# Deploying Sabadinnk to DigitalOcean VPS

## 1. Create a Droplet

1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Create Droplet:
   - **Image**: Ubuntu 24.04 LTS
   - **Plan**: Basic — $6/mo (1 vCPU, 1GB RAM) is enough
   - **Region**: Amsterdam (closest to Porto)
   - **Auth**: SSH key (recommended) or password
3. Note your droplet's IP address

## 2. Point Your Domain (optional but recommended)

In your domain registrar (e.g. Namecheap, Cloudflare), add:
```
A Record → sabadinnk.com → YOUR_DROPLET_IP
A Record → www.sabadinnk.com → YOUR_DROPLET_IP
```

## 3. Initial Server Setup

SSH into your droplet:
```bash
ssh root@YOUR_DROPLET_IP
```

Run the setup script:
```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | sh

# Install Docker Compose plugin
apt install -y docker-compose-plugin

# Install Nginx & Certbot (for SSL)
apt install -y nginx certbot python3-certbot-nginx

# Create app directory
mkdir -p /opt/sabadinnk
```

## 4. Upload Files

From your local machine (where you have the deploy folder):
```bash
scp -r ./deploy/* root@YOUR_DROPLET_IP:/opt/sabadinnk/
```

Or use git — push the deploy folder to a repo and clone it:
```bash
# On the server
cd /opt/sabadinnk
git clone https://github.com/YOUR_USER/sabadinnk.git .
```

## 5. Configure Environment

On the server:
```bash
cd /opt/sabadinnk
cp .env.example .env
```

The defaults work fine since MongoDB runs in Docker beside the app.

## 6. Start the App

```bash
cd /opt/sabadinnk
docker compose up -d
```

Verify it's running:
```bash
docker compose ps
curl http://localhost:8001
```

## 7. Configure Nginx (reverse proxy + SSL)

Create the Nginx config:
```bash
cat > /etc/nginx/sites-available/sabadinnk << 'EOF'
server {
    listen 80;
    server_name sabadinnk.com www.sabadinnk.com;

    location / {
        proxy_pass http://127.0.0.1:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support (if needed)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Cache static assets
    location /static/ {
        proxy_pass http://127.0.0.1:8001/static/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location /fonts/ {
        proxy_pass http://127.0.0.1:8001/fonts/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    client_max_body_size 10M;
}
EOF
```

Enable the site:
```bash
ln -sf /etc/nginx/sites-available/sabadinnk /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
```

## 8. Enable SSL (HTTPS)

```bash
certbot --nginx -d sabadinnk.com -d www.sabadinnk.com
```

Follow the prompts. Certbot auto-renews via a systemd timer.

## 9. Verify

Visit `https://sabadinnk.com` — your site should be live.

---

## Maintenance

### View logs
```bash
cd /opt/sabadinnk
docker compose logs -f web
```

### Restart after changes
```bash
cd /opt/sabadinnk
docker compose down
docker compose up -d --build
```

### Update the site
```bash
cd /opt/sabadinnk
# Upload new files, then:
docker compose up -d --build
```

### Add your video
```bash
scp artist-reel.mp4 root@YOUR_DROPLET_IP:/opt/sabadinnk/static/video/
```

### MongoDB backups
```bash
# Backup
docker compose exec mongo mongodump --out /data/backup

# Copy backup to local
docker cp $(docker compose ps -q mongo):/data/backup ./backup
```

---

## Cost Summary

| Service | Cost |
|---------|------|
| DigitalOcean Droplet (Basic) | $6/mo |
| Domain (optional) | ~$10/year |
| SSL (Let's Encrypt) | Free |
| **Total** | **~$6/mo** |
