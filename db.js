const Pool = require("pg").Pool;
require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query(
  `
  CREATE DATABASE quiz;
  CREATE TABLE score(score_id SERIAL PRIMARY KEY,
 name VARCHAR(255), 
 points INT);`,
  (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  }
);

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   post: process.env.PG_POST,
//   database: process.env.PG_DATABASE,
// };

const pool = new Pool(devConfig);

module.exports = pool;
