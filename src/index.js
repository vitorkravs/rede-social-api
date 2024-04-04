import express from "express";
import { config } from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.js";

config();

import "./db/db.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.use("/", userRoutes);

app.listen(8080, () => {
  console.log("servidor rodando na porta: 8080");
});
