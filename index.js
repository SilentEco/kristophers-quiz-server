const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = process.env.PORT || 5000;

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

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
