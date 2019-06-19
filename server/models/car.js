/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import pool from '../config/db_env';

dotenv.config();

class Car {
  async postCar(values) {
    const data = pool.query(`INSERT * INTO cars (
            owner, created_on, status, price, manufacturer, model, body_type)
            VALUES ($1, $2, $3, $4, $5, $6, $7) returning *`, values);
  }
}


export default Car;
