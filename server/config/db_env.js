import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.NODE_ENV === 'development') {
  module.exports = new Pool({
    connectionString: process.env.DATABASE_DEV,
  });
}
if (process.env.NODE_ENV === 'production') {
  module.exports = new Pool({
    connectionString: process.env.HEROKU_DATABASE,
  });
}
if (process.env.NODE_ENV === 'test') {
  module.exports = new Pool({
    connectionString: process.env.DATABASE_TEST_URL,
  });
}
