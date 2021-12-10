const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;

//porcess.env.PORT

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create name

app.post("/name", async (req, res) => {
  try {
    const { name } = req.body;
    const NewName = await pool.query(
      "INSERT INTO score(name) VALUES($1) RETURNING *",
      [name]
    );
    res.json(NewName.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get all names

app.get("/names", async (req, res) => {
  try {
    const allNames = await pool.query("SELECT name FROM score");
    res.json(allNames.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create score

app.post("/score", async (req, res) => {
  try {
    const { points } = req.body;
    const NewScore = await pool.query(
      "INSERT INTO score(points) VALUES($1) RETURNING *",
      [points]
    );
    res.json(NewScore.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/scores", async (req, res) => {
  try {
    const allScores = await pool.query("SELECT * FROM score");
    res.json(allScores.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/", async (req, res) => {
  try {
    const allScores = await pool.query(
      "SELECT name, points FROM score ORDER BY points DESC"
    );
    res.json(allScores.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update a score

app.put("/scores/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const { points } = req.body;
    const updateScore = await pool.query(
      "UPDATE score SET points = $1 WHERE name = $2",
      [points, name]
    );
    res.json("Points where added!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
