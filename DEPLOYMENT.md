# Deployment Guide for Secure User Authentication System

This guide covers how to deploy the authentication system to production.

## Prerequisites
- Node.js installed on your system
- MongoDB database (local or cloud)
- Git repository (optional but recommended)

## Option 1: Local Development Access

### Current Status
The server is already running locally on port 3000.

### Accessing the API
- **Base URL**: `http://localhost:3000`
- **Home**: `http://localhost:3000/` - Welcome message
- **Register**: `POST http://localhost:3000/auth/register`
- **Login**: `POST http://localhost:3000/auth/login`
- **Logout**: `POST http://localhost:3000/auth/logout`
- **Dashboard**: `GET http://localhost:3000/protected/dashboard`
- **Admin**: `GET http://localhost:3000/protected/admin`

### Testing with Postman
1. Import the `postman_collection.json` file
2. Use the collection to test all endpoints
3. Register a user, login, access protected routes

### Testing with PowerShell
Run the provided test scripts:
```powershell
cd auth-system
.\test_session.ps1    # Test full authentication flow
.\test_edge_cases.ps1 # Test error handling
```

## Option 2: Cloud Deployment

### Step 1: Set up MongoDB Atlas (Cloud Database)
1. Go to https://www.mongodb.com/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string from "Connect" > "Connect your application"
5. Update your `.env` file:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/auth-system?retryWrites=true&w=majority
   ```

### Step 2: Choose a Deployment Platform

#### Heroku (Recommended for beginners)
1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGO_URI="your-mongodb-atlas-uri"
   heroku config:set SESSION_SECRET="your-super-secret-key"
   heroku config:set NODE_ENV="production"
   ```
5. Deploy:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

#### Railway
1. Go to https://railway.app
2. Connect your GitHub repository
3. Add MongoDB database
4. Set environment variables in Railway dashboard
5. Deploy automatically

#### Vercel
1. Go to https://vercel.com
2. Connect your GitHub repository
3. Add environment variables
4. Deploy (note: Vercel is better for frontend, you might need serverless functions)

### Step 3: Environment Variables for Production
Create a `.env` file with:
```
MONGO_URI=your-production-mongodb-uri
SESSION_SECRET=your-very-secure-random-string
PORT=3000
NODE_ENV=production
```

### Step 4: Production Optimizations
1. Add process manager: `npm install -g pm2`
2. Start with PM2: `pm2 start server.js --name auth-app`
3. Set up auto-restart: `pm2 startup` and `pm2 save`

## API Documentation

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Logout User
```http
POST /auth/logout
```

### Protected Endpoints

#### Dashboard (Requires Authentication)
```http
GET /protected/dashboard
```

#### Admin Panel (Requires Admin Role)
```http
GET /protected/admin
```

## Security Considerations
- Change the SESSION_SECRET to a strong, random string
- Use HTTPS in production
- Implement rate limiting for authentication endpoints
- Add input validation and sanitization
- Consider adding CSRF protection for web applications

## Troubleshooting
- **MongoDB Connection Error**: Check your MONGO_URI
- **Port Already in Use**: Change PORT in .env
- **Session Not Working**: Verify SESSION_SECRET is set
- **CORS Issues**: Add CORS middleware if needed

For additional help, check the server logs or contact support.
