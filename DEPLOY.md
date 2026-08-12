# Deploying this site

Static site, one nginx container, no CI/CD — you `git pull` on the VPS whenever you want to update it. Only `public/` is ever served; everything else in this repo (PDF, reports, notes) stays off the web.

## First-time setup on the VPS

```bash
# Docker (skip if already installed)
curl -fsSL https://get.docker.com | sh

# Get the site onto the server
git clone <this-repo-url> /opt/gazizdevcv
cd /opt/gazizdevcv

# Start it
docker compose up -d
```

Your site is now live over plain HTTP on port 80 (`http://YOUR_VPS_IP`).

## Adding a domain + HTTPS (optional, once you have a domain)

1. Point an A record for your domain at the VPS's IP.
2. Get a certificate (port 80 must be free, so stop nginx first):
   ```bash
   docker compose stop nginx
   sudo apt install -y certbot
   sudo certbot certonly --standalone -d yourdomain.com --email you@example.com --agree-tos --non-interactive
   ```
3. Edit `nginx/conf.d/app.conf`: change the `listen 80` block into a redirect
   (`server_name yourdomain.com; return 301 https://$host$request_uri;`),
   uncomment the HTTPS block below it, and replace `yourdomain.com` with your real domain.
4. Restart:
   ```bash
   docker compose up -d
   ```
5. Auto-renew (add to `sudo crontab -e`):
   ```
   0 3 * * * docker compose -f /opt/gazizdevcv/docker-compose.yml stop nginx && certbot renew --quiet && docker compose -f /opt/gazizdevcv/docker-compose.yml start nginx
   ```

## Updating the site after a change

```bash
cd /opt/gazizdevcv
git pull
```

That's it — nginx serves the files straight off disk, no rebuild or restart needed.
