// API base URL
const API_BASE = 'http://localhost:3000';

// DOM elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const dashboard = document.getElementById('dashboard');
const adminPanel = document.getElementById('adminPanel');
const messageDiv = document.getElementById('message');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    checkAuthStatus();

    // Set up form event listeners
    document.getElementById('loginFormElement').addEventListener('submit', handleLogin);
    document.getElementById('registerFormElement').addEventListener('submit', handleRegister);
});

// Check authentication status on page load
async function checkAuthStatus() {
    try {
        const response = await fetch(`${API_BASE}/protected/dashboard`, {
            method: 'GET',
            credentials: 'include' // Include cookies for session
        });

        if (response.ok) {
            const data = await response.json();
            showDashboard(data.user);
        } else {
            showLogin();
        }
    } catch (error) {
        console.error('Auth check failed:', error);
        showLogin();
    }
}

// Handle login form submission
async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // Include cookies for session
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            showMessage('Login successful!', 'success');
            showDashboard(data.user);
        } else {
            showMessage(data.message || 'Login failed', 'error');
        }
    } catch (error) {
        console.error('Login error:', error);
        showMessage('Network error. Please try again.', 'error');
    }
}

// Handle register form submission
async function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            showMessage('Registration successful! Please login.', 'success');
            showLogin();
        } else {
            showMessage(data.message || 'Registration failed', 'error');
        }
    } catch (error) {
        console.error('Registration error:', error);
        showMessage('Network error. Please try again.', 'error');
    }
}

// Handle logout
async function logout() {
    try {
        const response = await fetch(`${API_BASE}/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });

        if (response.ok) {
            showMessage('Logged out successfully', 'success');
            showLogin();
        } else {
            showMessage('Logout failed', 'error');
        }
    } catch (error) {
        console.error('Logout error:', error);
        showMessage('Network error during logout', 'error');
    }
}

// Load dashboard data
async function loadDashboard() {
    try {
        const response = await fetch(`${API_BASE}/protected/dashboard`, {
            method: 'GET',
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            showDashboard(data.user);
        } else {
            showMessage('Failed to load dashboard', 'error');
        }
    } catch (error) {
        console.error('Dashboard load error:', error);
        showMessage('Network error', 'error');
    }
}

// Load admin panel
async function loadAdmin() {
    try {
        const response = await fetch(`${API_BASE}/protected/admin`, {
            method: 'GET',
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            showAdminPanel();
        } else {
            showMessage('Access denied to admin panel', 'error');
        }
    } catch (error) {
        console.error('Admin panel load error:', error);
        showMessage('Network error', 'error');
    }
}

// UI helper functions
function showLogin() {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    dashboard.classList.add('hidden');
    adminPanel.classList.add('hidden');
    clearForms();
}

function showRegister() {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    dashboard.classList.add('hidden');
    adminPanel.classList.add('hidden');
    clearForms();
}

function showDashboard(user) {
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    dashboard.classList.remove('hidden');
    adminPanel.classList.add('hidden');

    document.getElementById('userUsername').textContent = user.username;
    document.getElementById('userRole').textContent = user.role;

    // Show admin button if user is admin
    const adminBtn = document.getElementById('adminBtn');
    if (user.role === 'admin') {
        adminBtn.style.display = 'inline-block';
    } else {
        adminBtn.style.display = 'none';
    }
}

function showAdminPanel() {
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    dashboard.classList.add('hidden');
    adminPanel.classList.remove('hidden');
}

function backToDashboard() {
    adminPanel.classList.add('hidden');
    dashboard.classList.remove('hidden');
}

function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.classList.remove('hidden');

    // Auto-hide message after 5 seconds
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
}

function clearForms() {
    document.getElementById('loginFormElement').reset();
    document.getElementById('registerFormElement').reset();
    messageDiv.classList.add('hidden');
}
