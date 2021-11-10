import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
const app = express();
app.use(morgan("dev"));
app.use(cors());
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("welcome to node js");
});

app.use("/products", ProductRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app listen in ${PORT}`);
});
// connection.end((err) => {
//   console.log("connection end");
// });
