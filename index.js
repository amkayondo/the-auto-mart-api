import express from 'express';
import PORT from './server/helpers/config';
import user from './server/routes/user';

const app = express();


app.use(express.json());

// api routes
app.use('/api/v2', user);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
