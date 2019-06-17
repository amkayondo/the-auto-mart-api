import express from 'express';
// import createAccount from '../controllers/users/signup';

const carRouter = express.Router();

// CAR ROUTES
carRouter.get('/user', (req, res) => {
  res.send('hello');
});

export default carRouter;
