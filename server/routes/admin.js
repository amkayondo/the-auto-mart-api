import express from 'express';
import Auth from '../middleware/auth';
import isAdmin from '../middleware/admin';

import getAllCars from '../controllers/admin/get_all_cars';

const adminRouter = express.Router();

const auth = new Auth();

adminRouter.get('/car', [auth.auth, isAdmin], getAllCars);

export default adminRouter;
