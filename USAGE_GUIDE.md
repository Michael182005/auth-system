# Usage Guide for Secure Authentication System

This project implements a secure user authentication system with registration, login, session management, and role-based access control.

## Getting Started

1. Clone or download the project files.

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with the following variables:

```
MONGO_URI=mongodb://localhost:27017/auth-system
SESSION_SECRET=your-secret-key
PORT=3000
```

4. Start the server:

```bash
npm start
```

5. Open your browser and navigate to:

```
http://localhost:3000
```

## Features

- User registration with hashed passwords
- User login with session management
- Protected dashboard accessible only after login
- Admin panel accessible only to users with admin role
- Logout functionality
- Responsive web interface

## Testing

Automated tests are included for API endpoints and session management. Run tests with:

```bash
npm test
```

## Notes

- Make sure MongoDB is running locally or update `MONGO_URI` accordingly.
- Change `SESSION_SECRET` to a strong, unique value in production.
- This project is intended as a starting point and can be extended with additional features as needed.

---

This project was developed manually with standard best practices for Node.js and Express applications.
