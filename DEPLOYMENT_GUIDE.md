# TechResona Production Deployment Guide

## 🚀 Quick Start

Run the automated deployment script:

```bash
sudo /app/deploy_production.sh
```

This will:
- ✅ Seed production database with all blogs and admin
- ✅ Build optimized frontend
- ✅ Configure backend on port 9010 (localhost only)
- ✅ Setup Nginx for techresona.com
- ✅ Create systemd services
- ✅ Verify all components

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Server with Ubuntu/Debian
- [ ] Root/sudo access
- [ ] Domain DNS pointing to server IP
- [ ] MongoDB installed and running
- [ ] Nginx installed
- [ ] Node.js 18+ and Yarn
- [ ] Python 3.11+ with venv
- [ ] SSL certificate (or use Let's Encrypt)

---

## 🔧 Manual Deployment (Step-by-Step)

If you prefer manual deployment or need to troubleshoot:

### Step 1: Database Seeding

```bash
cd /app/backend

# Update .env for production
sed -i 's/DB_NAME="test_database"/DB_NAME="techresona_production"/' .env

# Run production seeder
python3 seed_production.py
```

**What it seeds:**
- ✅ Admin user (admin@techresona.com / TechResona2025!)
- ✅ SEO settings for all pages
- ✅ 8 comprehensive blogs (7 SEO + 1 test)
- ✅ Target keywords for tracking

### Step 2: Frontend Build

```bash
cd /app/frontend

# Create production environment
cat > .env.production << EOF
REACT_APP_BACKEND_URL=https://techresona.com
GENERATE_SOURCEMAP=false
EOF

# Install dependencies
yarn install

# Build production bundle
DISABLE_ESLINT_PLUGIN=true yarn build
```

**Build output:** `/app/frontend/build/` (optimized static files)

### Step 3: Backend Service

```bash
# Create systemd service
sudo tee /etc/systemd/system/techresona-backend.service > /dev/null << 'EOF'
[Unit]
Description=TechResona FastAPI Backend
After=network.target mongodb.service

[Service]
Type=simple
User=root
WorkingDirectory=/app/backend
Environment="PATH=/root/.venv/bin"
ExecStart=/root/.venv/bin/uvicorn server:app --host 127.0.0.1 --port 9010 --workers 2 --no-reload
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable techresona-backend
sudo systemctl start techresona-backend

# Check status
sudo systemctl status techresona-backend
```

**Important:** Backend runs on `localhost:9010` - NOT externally exposed!

### Step 4: Nginx Configuration

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/techresona.com
```

Paste the configuration from `/app/deploy_production.sh` (lines with HTTPS setup).

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/techresona.com /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Remove default site

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

### Step 5: SSL Certificate

#### Option A: Let's Encrypt (Recommended)

```bash
# Install certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Create webroot directory
sudo mkdir -p /var/www/certbot

# Obtain certificate
sudo certbot certonly --webroot \
  -w /var/www/certbot \
  -d techresona.com \
  -d www.techresona.com \
  --email info@techresona.com \
  --agree-tos \
  --no-eff-email

# Update Nginx config with real certificates
sudo nano /etc/nginx/sites-available/techresona.com

# Uncomment these lines and comment out self-signed:
# ssl_certificate /etc/letsencrypt/live/techresona.com/fullchain.pem;
# ssl_certificate_key /etc/letsencrypt/live/techresona.com/privkey.pem;

# Reload Nginx
sudo systemctl reload nginx

# Auto-renewal cron
echo "0 0 1 * * certbot renew --quiet && systemctl reload nginx" | sudo crontab -
```

#### Option B: Self-Signed (Testing Only)

Temporary certificates are already configured in the script.
**DO NOT use in production!**

---

## 🔒 Security Configuration

### Backend Security

**Port 9010 is localhost-only:**
```bash
# Backend listens on 127.0.0.1:9010
# NOT accessible from outside the server
# All requests go through Nginx
```

**Verify:**
```bash
# This should work (from server):
curl http://localhost:9010/api/blogs

# This should NOT work (from outside):
curl http://your-server-ip:9010/api/blogs
```

### Firewall Rules

```bash
# Only allow HTTP, HTTPS, SSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable

# Block port 9010 from external access
sudo ufw deny 9010/tcp
```

### Environment Variables

```bash
# Secure the .env file
sudo chmod 600 /app/backend/.env
sudo chown root:root /app/backend/.env
```

---

## 🧪 Testing

### Test Backend (Local)

```bash
# API endpoint
curl http://localhost:9010/api/blogs

# Sitemap
curl http://localhost:9010/sitemap.xml

# Robots.txt
curl http://localhost:9010/robots.txt

# Contact form (POST)
curl -X POST http://localhost:9010/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'
```

### Test Frontend

```bash
# Check build exists
ls -lh /app/frontend/build/

# Check index.html
cat /app/frontend/build/index.html | grep "TechResona"

# Check bundle size
du -sh /app/frontend/build/
```

### Test Nginx

```bash
# Test config
sudo nginx -t

# Check if site is enabled
ls -la /etc/nginx/sites-enabled/

# Test HTTP to HTTPS redirect
curl -I http://techresona.com
```

### Test Full Stack

```bash
# Visit in browser
https://techresona.com

# Check admin
https://techresona.com/admin/login

# Check blog pages
https://techresona.com/blog

# Check API through Nginx
https://techresona.com/api/blogs
```

---

## 📊 Monitoring

### Check Services

```bash
# Backend
sudo systemctl status techresona-backend
sudo journalctl -u techresona-backend -f

# Nginx
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# MongoDB
sudo systemctl status mongodb
```

### Performance Monitoring

```bash
# Backend logs (real-time)
sudo journalctl -u techresona-backend -f

# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# System resources
htop
```

---

## 🔄 Updates & Maintenance

### Update Content

```bash
# Update blogs or SEO
cd /app/backend
python3 content_manager.py

# Restart backend if needed
sudo systemctl restart techresona-backend
```

### Update Code

```bash
# Frontend changes
cd /app/frontend
# Make changes
DISABLE_ESLINT_PLUGIN=true yarn build
sudo systemctl reload nginx

# Backend changes
cd /app/backend
# Make changes
sudo systemctl restart techresona-backend
```

### Database Backup

```bash
# Backup MongoDB
mongodump --db techresona_production --out /backups/$(date +%Y%m%d)

# Restore if needed
mongorestore --db techresona_production /backups/20250111/techresona_production
```

---

## 🐛 Troubleshooting

### Backend Won't Start

```bash
# Check logs
sudo journalctl -u techresona-backend -n 50

# Check port availability
sudo lsof -i :9010

# Restart service
sudo systemctl restart techresona-backend
```

### Frontend Not Loading

```bash
# Check Nginx logs
sudo tail -50 /var/log/nginx/error.log

# Verify build exists
ls -la /app/frontend/build/

# Rebuild if needed
cd /app/frontend && yarn build
```

### Database Issues

```bash
# Check MongoDB
sudo systemctl status mongodb

# Check if DB exists
mongosh techresona_production --eval "db.blogs.countDocuments()"

# Re-seed if needed
cd /app/backend && python3 seed_production.py
```

### SSL Certificate Issues

```bash
# Test certificate
openssl s_client -connect techresona.com:443

# Renew certificate
sudo certbot renew --force-renewal
sudo systemctl reload nginx
```

### 502 Bad Gateway

Usually means backend is not running:

```bash
# Check backend
sudo systemctl status techresona-backend

# Check logs
sudo journalctl -u techresona-backend -n 30

# Restart
sudo systemctl restart techresona-backend
```

---

## 📈 Post-Deployment

### SEO Setup

1. **Google Search Console**
   - Add property: techresona.com
   - Verify ownership
   - Submit sitemap: https://techresona.com/sitemap.xml

2. **Bing Webmaster Tools**
   - Add site
   - Submit sitemap

3. **Google Analytics** (Optional)
   - Create property
   - Add tracking code to index.html

### Social Media

Update social links in Footer.js:
- LinkedIn: https://www.linkedin.com/company/techresona-services ✅
- Twitter: Your handle
- Facebook: Your page

### Monitoring Setup

1. **Uptime Monitoring**
   - UptimeRobot or similar
   - Monitor: https://techresona.com

2. **Error Tracking**
   - Sentry or similar
   - Monitor backend errors

3. **Analytics**
   - Google Analytics
   - Track page views, conversions

---

## 📝 Deployment Checklist

- [ ] DNS pointing to server
- [ ] Frontend build completed
- [ ] Backend running on localhost:9010
- [ ] Nginx configured and running
- [ ] SSL certificate installed
- [ ] Database seeded with content
- [ ] Admin login working
- [ ] All pages loading correctly
- [ ] Contact form working (email + Slack)
- [ ] Sitemap accessible
- [ ] Robots.txt accessible
- [ ] Mobile responsive verified
- [ ] Performance tested (Lighthouse)
- [ ] Backup configured
- [ ] Monitoring setup
- [ ] Google Search Console submitted
- [ ] Social links updated

---

## 🎯 Production URLs

- **Website:** https://techresona.com
- **Admin:** https://techresona.com/admin/login
- **API:** https://techresona.com/api/* (proxied)
- **Sitemap:** https://techresona.com/sitemap.xml
- **Robots:** https://techresona.com/robots.txt

**Backend:**
- Internal only: http://localhost:9010
- NOT accessible from outside

---

## 💡 Important Notes

1. **Backend Port 9010:**
   - Runs on localhost ONLY
   - Not exposed to internet
   - All external requests go through Nginx
   - Secure by design

2. **Database:**
   - Production: techresona_production
   - Development: test_database
   - Always backup before major changes

3. **Admin Credentials:**
   - Email: admin@techresona.com
   - Password: TechResona2025!
   - **Change password after first login!**

4. **Build Process:**
   - Frontend: Optimized, minified
   - Backend: 2 workers for concurrency
   - Nginx: Gzip, caching enabled

5. **Updates:**
   - Frontend: Rebuild and reload Nginx
   - Backend: Restart systemd service
   - Content: Use content_manager.py

---

## 📞 Support

For issues or questions:
- Email: info@techresona.com
- Phone: +91 7517402788
- Documentation: /app/README.md

---

**Deployment Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Production Ready ✅
