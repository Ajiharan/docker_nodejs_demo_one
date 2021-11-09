import express from "express";
import cors from "cors";
import morgan from "morgan";
import mysql from "mysql";
import dotenv from "dotenv";

const app = express();
app.use(morgan("dev"));
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).json("welcome to node js");
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app listen in ${PORT}`);
});
// connection.end((err) => {
//   console.log("connection end");
// });
