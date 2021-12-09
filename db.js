const Pool = require("pg").Pool;

const pool = new Pool({
  user: "pxduaagnfrxlvn",
  password: "3e68fab1dec376e33489405d19fabe3fb52ab27092b07f4f21277a45fb1ebb41",
  host: "ec2-52-17-1-206.eu-west-1.compute.amazonaws.com",
  post: 5432,
  database: "dm6gfrjulannb",
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://pxduaagnfrxlvn:3e68fab1dec376e33489405d19fabe3fb52ab27092b07f4f21277a45fb1ebb41@ec2-52-17-1-206.eu-west-1.compute.amazonaws.com:5432/dm6gfrjulannb",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;

//#region test
// const Pool = require("pg").Pool;
// require("dotenv").config();
// const { Client } = require("pg");

// // const client = new Client({
// //   connectionString: process.env.DATABASE_URL,
// //   ssl: {
// //     rejectUnauthorized: false,
// //   },
// // });

// // client.connect();

// // client.query(
// //   `
// //   CREATE DATABASE quiz;
// //   CREATE TABLE score(score_id SERIAL PRIMARY KEY,
// //  name VARCHAR(255),
// //  points INT);`,
// //   (err, res) => {
// //     if (err) throw err;
// //     for (let row of res.rows) {
// //       console.log(JSON.stringify(row));
// //     }
// //     client.end();
// //   }
// // );

// const proConfig = {
//   connectionString: process.env.DATABASE_URL,
// };

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
// };

// const pool = new Pool({
//   conncectionString:
//     process.env.NODE_ENV === "production" ? proConfig : devConfig,
// });

// module.exports = pool;
//#endregion
