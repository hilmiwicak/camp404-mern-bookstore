import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as db from "./db.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.listen(port, () => {
  console.log("Server berhasil dijalnkan pada port: " + port);
});
