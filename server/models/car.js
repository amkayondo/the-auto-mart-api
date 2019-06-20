/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import pool from '../config/db_env';

dotenv.config();

class Car {
  async postCar(values) {
    const data = pool.query(`INSERT INTO cars (
            owner, state, status, price, manufacturer, model, body_type)
            VALUES ($1, $2, $3, $4, $5, $6, $7) returning *;`, values);
    return data;
  }

  async selectUser(email) {
    const usr = await pool.query(`SELECT * FROM users WHERE email='${email}'`);
    return usr;
  }

  async selectUserByid(id) {
    const usr = await pool.query(`SELECT * FROM users WHERE id=${id}`);
    return usr;
  }

  async getCarById(carId) {
    const car = await pool.query(`SELECT * FROM cars WHERE car_id=${carId}`);
    return car;
  }

  async getCarOwner(owner) {
    const car = await pool.query(`SELECT * FROM cars WHERE owner=${owner}`);
    return car;
  }

  async getUnsold(status) {
    const car = await pool.query(`SELECT * FROM cars WHERE status='${status}'`);
    return car;
  }

  async updatePrice(price, carid, userid) {
    const car = await pool.query(`UPDATE cars SET price=${price} WHERE car_id=${carid} AND owner=${userid} returning *;`);
    return car;
  }

  async updateStatus(status, carid, userid) {
    const car = await pool.query(`UPDATE cars SET status='${status}' WHERE car_id=${carid} AND owner=${userid} returning *;`);
    return car;
  }
}


export default Car;
