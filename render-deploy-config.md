# Render Deployment Configuration for MERN Stack Backend

## Overview
This document outlines the deployment plan for the Express.js backend to Render, including configuration files and step-by-step instructions.

## Current Backend Structure Analysis
- **Main Entry Point**: `server/src/server.js` (preferred) or `server/server.js`
- **Framework**: Express.js with MongoDB (Mongoose)
- **Dependencies**: Standard MERN stack dependencies including bcryptjs, cors, dotenv, jsonwebtoken, multer, nodemailer, winston
- **Environment Variables**: MongoDB URI, email configuration, frontend URL, PORT
- **Routes**: Auth, posts, categories, comments
- **Middleware**: Error handling, CORS, JSON parsing

## Required Configuration Files

### 1. render.yaml (Optional - for advanced deployments)
```yaml
services:
  - type: web
    name: mern-blog-backend
    runtime: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

### 2. package.json Modifications
Update the scripts section to include production start command:
```json
{
  "scripts": {
    "start": "node src/server.js",
    "build": "echo 'No build step required'"
  }
}
```

### 3. .env Configuration for Render
Required environment variables to set in Render dashboard:
- `MONGODB_URI`: MongoDB Atlas connection string
- `NODE_ENV`: production
- `PORT`: 10000 (Render default)
- `EMAIL_HOST`: SMTP host
- `EMAIL_PORT`: SMTP port
- `EMAIL_SECURE`: false/true
- `EMAIL_USER`: Email username
- `EMAIL_PASS`: Email password/app password
- `EMAIL_FROM`: From email address
- `FRONTEND_URL`: Deployed frontend URL (e.g., https://mern-blog-frontend.onrender.com)

## Deployment Steps

### Step 1: Prepare the Repository
1. Ensure all code is committed to GitHub
2. Verify the main entry point (`src/server.js`) exists and is correct
3. Update package.json scripts if necessary
4. Create/update .env.example with all required variables

### Step 2: Create Render Service
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure service settings:
   - **Name**: mern-blog-backend
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: server/ (if backend is in server folder)

### Step 3: Configure Environment Variables
In Render dashboard, add the following environment variables:
- `MONGODB_URI` = `mongodb+srv://username:password@cluster.mongodb.net/mern-blog?retryWrites=true&w=majority`
- `NODE_ENV` = `production`
- `PORT` = `10000`
- `EMAIL_HOST` = `smtp.gmail.com`
- `EMAIL_PORT` = `587`
- `EMAIL_SECURE` = `false`
- `EMAIL_USER` = `your-email@gmail.com`
- `EMAIL_PASS` = `your-app-password`
- `EMAIL_FROM` = `your-email@gmail.com`
- `FRONTEND_URL` = `https://your-frontend-app.onrender.com`

### Step 4: Set Up Continuous Deployment
1. In Render service settings, enable "Auto-Deploy"
2. Choose branch (usually `main` or `master`)
3. Push changes to trigger automatic deployments

### Step 5: HTTPS Configuration
- Render automatically provides HTTPS certificates
- No additional configuration required
- Custom domain SSL can be configured in Render dashboard

### Step 6: Monitoring Setup
1. **Logs**: View real-time logs in Render dashboard
2. **Metrics**: Monitor CPU, memory, and response times
3. **Health Checks**: Implement `/api/health` endpoint (already exists)
4. **Alerts**: Configure email notifications for failures

## Troubleshooting Guide

### Common Issues
1. **Port Issues**: Ensure PORT is set to 10000 or use process.env.PORT
2. **MongoDB Connection**: Verify MongoDB Atlas IP whitelist includes 0.0.0.0/0
3. **Build Failures**: Check that all dependencies are in package.json
4. **Environment Variables**: Ensure all required env vars are set in Render

### Health Check Endpoint
The application includes a health check at `/api/health` for monitoring.

### Deployment Checklist
- [ ] Code committed to GitHub
- [ ] Main entry point is `src/server.js`
- [ ] package.json has correct start script
- [ ] Environment variables configured in Render
- [ ] MongoDB Atlas connection string updated
- [ ] Frontend URL updated for CORS
- [ ] Auto-deploy enabled
- [ ] HTTPS working (automatic)
- [ ] Health check endpoint responding
- [ ] Logs showing successful startup