import express from 'express';
import PORT from './helpers/config';
import userRouter from './routes/user';
import pool from './config/db';
import Database from './controllers/db';

const app = express();


app.use(express.json());

// index route
app.get('/', (req, res) => {
  res.json({ message: 'Navigate to /api/v2 for v2' });
});

app.get('/test', (req, res) => {
  if (pool) {
    res.send('connected');
  } else {
    res.send('not ocnnected');
  }
});

// api routes
app.use('api/v2/auth/', userRouter);

const db = new Database();
db.createAllTables();

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

export default app;
