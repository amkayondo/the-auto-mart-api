// File cotaines user model
// eslint-disable-next-line no-unused-vars
const users = `CREATE TABLE IF NOT EXISTS
    users(
        id SERIAL,
        first_name VARCHAR(24) NOT NULL,
        last_name VARCHAR(24) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(80) NOT NULL,
        address VARCHAR(24) NOT NULL,
        isAdmin BOOLEAN NOT NULL DEFAULT false
    )`;
