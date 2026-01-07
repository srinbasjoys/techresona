#!/bin/bash
# This script fetches the sitemap from the backend and saves it
curl -s http://localhost:8001/sitemap.xml > /app/frontend/public/sitemap.xml
echo "Sitemap generated successfully"
