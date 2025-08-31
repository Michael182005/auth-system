# Secure User Authentication System

This project implements a secure user authentication system with registration, login, session management, and role-based access control.

## Features

- User registration with hashed passwords
- User login with session management
- Protected dashboard accessible only after login
- Admin panel accessible only to users with admin role
- Logout functionality
- Responsive web interface

## Technologies Used

- Node.js
- Express.js
- MongoDB
- bcryptjs for password hashing
- express-session for session management
- connect-mongo for session storage

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file
4. Start MongoDB
5. Run the server: `npm start`

## Usage

- Register a new user at `/auth/register`
- Login at `/auth/login`
- Access protected routes after authentication
- Logout at `/auth/logout`

## API Endpoints

- POST /auth/register - Register a new user
- POST /auth/login - Login user
- POST /auth/logout - Logout user
- GET /protected/dashboard - Protected dashboard
- GET /protected/admin - Admin panel (admin role required)

## Security Features

- Password hashing with bcrypt
- Session-based authentication
- Role-based access control
- Input validation
- CORS configuration

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.
