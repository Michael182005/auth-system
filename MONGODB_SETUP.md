# MongoDB Setup Guide for Secure User Authentication System

This guide will help you install and set up MongoDB Community Server on your local machine to run the authentication system.

## Step 1: Download MongoDB Community Server
- Visit the official MongoDB Community Server download page: https://www.mongodb.com/try/download/community
- Select your operating system (Windows).
- Download the MSI installer.

## Step 2: Install MongoDB
- Run the downloaded MSI installer.
- Choose "Complete" setup type.
- Optionally, select "Install MongoDB as a Service" (recommended).
- Finish the installation.

## Step 3: Verify Installation
- Open a new Command Prompt or PowerShell window.
- Run the command:
  ```
  mongod --version
  ```
- You should see the installed MongoDB version.

## Step 4: Start MongoDB Server
- If installed as a service, MongoDB should start automatically.
- Otherwise, start MongoDB manually by running:
  ```
  mongod
  ```
- Keep this terminal open to keep the server running.

## Step 5: Connect the Authentication System
- Ensure the `.env` file in the `auth-system` directory has the correct MongoDB URI:
  ```
  MONGO_URI=mongodb://localhost:27017/auth-system
  ```
- Start the authentication server:
  ```
  npm start
  ```
- The server will connect to MongoDB and be ready to handle requests.

## Additional Resources
- MongoDB Documentation: https://docs.mongodb.com/manual/
- MongoDB Compass (GUI): https://www.mongodb.com/products/compass

If you prefer, you can also use MongoDB Atlas (cloud-hosted) instead of local installation.

---

Let me know if you want me to guide you through any of these steps interactively.
