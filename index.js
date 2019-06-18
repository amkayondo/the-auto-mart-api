import express from 'express';
import PORT from './server/helpers/config';
import user from './server/routes/user';
import pool from './server/config/db';

const app = express();


app.use(express.json());

// index route
app.get('/', (req, res) => {
  res.json({
    message: 'Navigate to /api/v2 for v2',
  });
});

app.get('/test', (req, res) => {
  if (pool) {
    res.send('connected');
  } else {
    res.send('not ocnnected');
  }
});

// api routes
app.use('/api/v2', user);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
