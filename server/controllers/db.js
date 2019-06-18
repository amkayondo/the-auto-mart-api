/* eslint-disable class-methods-use-this */
import pool from '../config/db';

class Database {
  async selectById(table, id) {
    const result = await pool.query(`SELECT * FROM ${table} WHERE id=${id};`);
    await pool.end();
    return result;
  }

  async addUser(params) {
    const result = await pool.query(`INSERT INTO users (
        first_name,
        last_name, 
        email,
        address,
        password) VALUES ($1, $2, $3, $4, $5) returning *;`, params);
    await pool.end();
    return result;
  }

  createAllTables() {
    const tables = `CREATE TABLE IF NOT EXISTS
    users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(24) NOT NULL,
        last_name VARCHAR(24) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(80) NOT NULL,
        address VARCHAR(24) NOT NULL,
        isAdmin BOOLEAN NOT NULL DEFAULT false
    );
    CREATE TABLE IF NOT EXISTS cars (
        car_id SERIAL PRIMARY KEY,
        owner_ INTEGER REFERENCES users(id) ON DELETE CASCADE,
        create_on DATE NOT NULL,
        state_ VARCHAR(30) NOT NULL,
        status_ VARCHAR(30) NOT NULL,
        price FLOAT NOT NULL,
        manufacturer VARCHAR(30) NOT NULL,
        model VARCHAR(30) NOT NULL,
        body_type VARCHAR(30) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS orders (
      order_id SERIAL PRIMARY KEY,
      buyer INTEGER REFERENCES users(id) ON DELETE CASCADE,
      car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE,
      amount INTEGER NOT NULL,
      status_ VARCHAR(30) NOT NULL
  );
    CREATE TABLE IF NOT EXISTS flags (
      flag_id SERIAL PRIMARY KEY,
      car_id INTEGER REFERENCES cars(car_id) ON DELETE CASCADE,
      create_on DATE NOT NULL,
      description VARCHAR(30) NOT NULL
  );`;
    pool.query(tables);
  }
}

export default Database;
