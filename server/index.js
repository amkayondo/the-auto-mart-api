import express from 'express';
import PORT from './helpers/config';
import userRouter from './routes/user';
import carRouter from './routes/car';
import Database from './controllers/db';
import adminRouter from './routes/admin';

const app = express();


app.use(express.json());
app.use(express.urlencoded());

// index route
app.get('/', (req, res) => {
  res.json({ message: 'Navigate to /api/v2 for v2' });
});

// api routes
app.use('/api/v2/auth', userRouter);
app.use('/api/v2', carRouter);
app.use('/api/v2', adminRouter);

const db = new Database();
db.createAllTables();

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

export default app;
