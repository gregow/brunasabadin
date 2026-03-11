# Deploying Sabadinnk to DigitalOcean VPS

## 1. Create a Droplet

1. Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
2. Create Droplet:
   - **Image**: Ubuntu 24.04 LTS
   - **Plan**: Basic — $6/mo (1 vCPU, 1GB RAM) is enough
   - **Region**: Amsterdam (closest to Porto)
   - **Auth**: SSH key (recommended) or password
3. Note your droplet's IP address

## 2. Point Your Domain

In your domain registrar (e.g. Namecheap, Cloudflare), add:
```
A Record → brunasabadin.com → YOUR_DROPLET_IP
A Record → www.brunasabadin.com → YOUR_DROPLET_IP
```

Wait a few minutes for DNS propagation. Verify with:
```bash
ping brunasabadin.com
```

## 3. Initial Server Setup

SSH into your droplet:
```bash
ssh root@YOUR_DROPLET_IP
```

Run these commands:
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

You should see HTML content (not an error). If not, check logs:
```bash
docker compose logs -f web
```

## 7. Configure Nginx

**IMPORTANT: Follow these steps exactly.**

First, remove the default Nginx site that shows "Welcome to nginx!":
```bash
rm -f /etc/nginx/sites-enabled/default
```

Create the site config:
```bash
cat > /etc/nginx/sites-available/brunasabadin << 'NGINX'
server {
    listen 80;
    server_name brunasabadin.com www.brunasabadin.com;

    location / {
        proxy_pass http://127.0.0.1:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

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
NGINX
```

Enable the site and restart Nginx:
```bash
ln -sf /etc/nginx/sites-available/brunasabadin /etc/nginx/sites-enabled/brunasabadin
nginx -t
systemctl restart nginx
```

Verify `nginx -t` says "syntax is ok" and "test is successful" before restarting.

Now visit `http://brunasabadin.com` — you should see the landing page.

## 8. Enable SSL (HTTPS)

```bash
certbot --nginx -d brunasabadin.com -d www.brunasabadin.com
```

Follow the prompts (enter email, agree to terms, choose redirect HTTP→HTTPS).

Certbot auto-renews via a systemd timer. Verify with:
```bash
certbot renew --dry-run
```

## 9. Verify

Visit `https://brunasabadin.com` — your site should be live with HTTPS.

---

## Troubleshooting

### Still seeing "Welcome to nginx!"
```bash
# Make sure default is removed
ls /etc/nginx/sites-enabled/
# Should only show: brunasabadin

# If default is still there:
rm -f /etc/nginx/sites-enabled/default
systemctl restart nginx
```

### Site returns 502 Bad Gateway
The app container isn't running or isn't ready:
```bash
cd /opt/sabadinnk
docker compose ps          # Check if containers are up
docker compose logs web    # Check for errors
docker compose up -d       # Restart if needed
curl http://localhost:8001  # Test directly
```

### Docker containers won't start
```bash
cd /opt/sabadinnk
docker compose down
docker compose up -d --build   # Rebuild from scratch
docker compose logs -f         # Watch logs
```

### DNS not resolving
```bash
dig brunasabadin.com          # Check if DNS points to your IP
# If not, wait for propagation (up to 24h) or check registrar settings
```

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
| Domain | ~$10/year |
| SSL (Let's Encrypt) | Free |
| **Total** | **~$6/mo** |
