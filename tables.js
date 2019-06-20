import dotenv from 'dotenv';
import pool from './server/config/db_env';


dotenv.config();

const createAllTables = () => {
  const tables = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL, first_name VARCHAR(24) NOT NULL, last_name VARCHAR(24) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(80) NOT NULL,
    address VARCHAR(24) NOT NULL, isAdmin BOOLEAN NOT NULL DEFAULT false, PRIMARY KEY (id));
    
    CREATE TABLE IF NOT EXISTS cars (
    car_id SERIAL, owner INTEGER REFERENCES users(id) ON DELETE CASCADE,
    create_on TIMESTAMP DEFAULT NOW(), state VARCHAR(30) NOT NULL, status VARCHAR(30) NOT NULL,
    price FLOAT NOT NULL, manufacturer VARCHAR(30) NOT NULL, model VARCHAR(30) NOT NULL,
    body_type VARCHAR(30) NOT NULL, PRIMARY KEY (car_id));
    
    CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL, buyer INTEGER REFERENCES users(id) ON DELETE CASCADE,
    car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE, amount INTEGER NOT NULL,
    status VARCHAR(30) NOT NULL, PRIMARY KEY (order_id));
    
    CREATE TABLE IF NOT EXISTS flags (
    flag_id SERIAL, car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE,
    create_on TIMESTAMP DEFAULT NOW(), description VARCHAR(30) NOT NULL, PRIMARY KEY (flag_id));`;

  pool.query(tables);
};

module.exports = createAllTables;

require('make-runnable');
