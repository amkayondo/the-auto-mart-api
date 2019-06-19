import { Pool } from 'pg';

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'auto_api',
  password: '1234',
  port: 5432,
  // user: 'feznlyvqsxbiac',
  // host: 'ec2-54-227-245-146.compute-1.amazonaws.com',
  // database: 'dd4ntouli0hsdg',
  // password: 'c72aa9a32d74ed656e6a88564d480c132c34ec10b50f66a6786a608ea219bb44',
  // port: 5432,
});

// eslint-disable-next-line no-console
pool.on('connect', () => console.log('connected'));

export default pool;
