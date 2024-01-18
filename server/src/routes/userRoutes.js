// routes/userRoutes.js
import express from 'express';
import UserDao from '../dao/userDao.js';

const router = express.Router();

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

export default router;
