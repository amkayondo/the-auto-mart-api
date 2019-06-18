// File contains configurations for database
import { Pool } from 'pg';

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'auto_api',
  password: '1234',
  port: 5432,
});

// eslint-disable-next-line no-console
pool.on('connect', () => console.log('connected'));

export default pool;
