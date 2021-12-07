const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  post: process.env.PG_POST,
  database: process.env.PG_DATABASE,
};

const proConfig = {
  connectionstring: process.env.DATABASE_URL,
};

const pool = new Pool(devConfig);

module.exports = pool;
