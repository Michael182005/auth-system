const express = require('express');
const requireAuth = require('../middleware/auth');
const requireRole = require('../middleware/rbac');

const router = express.Router();

// Example protected route accessible to any authenticated user
router.get('/dashboard', requireAuth, (req, res) => {
  res.json({ message: `Welcome to your dashboard, ${req.user.username}` });
});

// Example admin-only route
router.get('/admin', requireAuth, requireRole('admin'), (req, res) => {
  res.json({ message: 'Welcome to the admin panel' });
});

module.exports = router;
