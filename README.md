# Task-01: Secure User Authentication  
![Task-01: Secure User Authentication](attachments/task-01-secure-user-authentication.png)

Welcome to the Secure User Authentication System — a project designed to fulfill Task-01 of the Prodigy Infotech Internship Program!

---

## 📋 Task Overview

> **Implement a user authentication system with secure login and registration functionality.**  
> Users should be able to sign up for an account, log in securely, and access protected routes only after successful authentication.  
> 
> **Optional:** Use standard mechanisms to handle password hashing, session management, and user role-based access control.

---

## 🚀 What’s Included

- **User registration** — Sign up with a new account (passwords are hashed securely!).
- **User login** — Log in to your account and start a session.
- **Protected dashboard** — Only visible to logged-in users.
- **Admin panel** — Only for users with the admin role.
- **Logout** — End your session securely.
- **Modern, responsive web interface**

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- bcryptjs (for password hashing)
- express-session (for session management)
- connect-mongo (to store sessions in MongoDB)
- dotenv (for managing environment variables)

---

## 🗂️ Project Structure

```
auth-system/
├── server.js              # Main application entry point
├── models/                # Mongoose models (User, etc.)
├── routes/                # Express routes (auth, protected)
├── middleware/            # Custom middleware (auth, validation)
├── public/                # Static files (CSS, JS, images)
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── .gitignore             # Git ignore rules
├── DEPLOYMENT.md          # Deployment instructions
├── TODO.md                # Task list
└── USAGE_GUIDE.md         # Usage guide
```

---

## 🧑‍💻 Getting Started

1. **Clone the repo:**  
   `git clone https://github.com/Michael182005/auth-system.git`
2. **Install dependencies:**  
   `npm install`
3. **Configure environment:**  
   Copy `.env.example` to `.env` and fill in your values.
4. **Start MongoDB** (if you haven’t already)
5. **Run the server:**  
   `npm start` or use the Prodigy CLI: `npx prodigy dev`

---

## 🌐 How to Use

- Register: `/auth/register`
- Login: `/auth/login`
- Dashboard: `/protected/dashboard` (after login)
- Admin Panel: `/protected/admin` (admin only)
- Logout: `/auth/logout`

---

## 📌 API Endpoints

- `POST /auth/register` — Register a new user
- `POST /auth/login` — Log in
- `POST /auth/logout` — Log out
- `GET /protected/dashboard` — Access dashboard (login required)
- `GET /protected/admin` — Admin panel (admin only)

---

## 🔒 Security Features

- Passwords are hashed with bcrypt before saving
- Session-based authentication
- Role-based access control (admin, user)
- Input validation on all endpoints
- Secure CORS configuration

---

## 🤝 Want to Contribute?

Open to all!  
If you spot a bug or want to suggest an improvement, feel free to open an issue or send a pull request.

---

## 📄 License

MIT — use it, learn from it, and make it your own!

---

*This project was created for the Prodigy Infotech Internship (Task-01: Secure User Authentication).*
