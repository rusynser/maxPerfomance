// routes/userRoutes.js
import express from 'express';
import UserDao from '../dao/userDao.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.oidc.isAuthenticated());

  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

export default router;
