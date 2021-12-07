const Pool = require("pg").Pool;

const pool = new Pool({
  user: "pxduaagnfrxlvn",
  password: "3e68fab1dec376e33489405d19fabe3fb52ab27092b07f4f21277a45fb1ebb41",
  host: "ec2-52-17-1-206.eu-west-1.compute.amazonaws.com",
  post: 5432,
  database: "dm6gfrjulannb",
});

module.exports = pool;
