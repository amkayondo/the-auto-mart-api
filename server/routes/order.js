/* eslint-disable import/no-duplicates */
import express from 'express';
import Auth from '../middleware/auth';

import makeOrder from '../controllers/orders/order';
import updateOrder from '../controllers/orders/order';


const orderRouter = express.Router();

const auth = new Auth();

orderRouter.post('/flag', auth.auth, makeOrder);
orderRouter.patch('/flag', auth.auth, updateOrder);


export default orderRouter;
