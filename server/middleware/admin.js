import pool from '../config/db_env';

const isAdmin = async (req, res, next) => {
  const user = true;
  try {
    const { rows } = await pool.query('SELECT * FROM users where isAdmin = $1', [user]);
    if (rows[0].isadmin) {
      next();
    } else {
      res.status(403).json({
        status: 403,
        message: 'Only the Admin can perform this task',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.detail,
    });
  }
};

export default isAdmin;
