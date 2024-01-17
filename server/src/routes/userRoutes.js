// routes/userRoutes.js
import express from 'express';
import UserDao from '../dao/userDao.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, username, userType, password, confirmPassword } = req.body;

    // Validate input
    if (!email || !username || !userType || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Incomplete user information in the request body' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if the user already exists
    const existingUser = await UserDao.getUserByEmailOrUsername(email, username);

    if (existingUser) {
      return res.status(400).json({ error: 'User with the provided email or username already exists' });
    }

    // Create the user
    const userId = await UserDao.createUser({ email, username, userType, password });

    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Incomplete login information in the request body' });
    }

    // Find the user by email
    const user = await UserDao.getUserByEmailOrUsername(email, email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify the password
    const passwordMatch = await UserDao.verifyPassword(user._id, password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // TODO: Create a session or JWT token for authenticated user

    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add other user-related routes here

export default router;
