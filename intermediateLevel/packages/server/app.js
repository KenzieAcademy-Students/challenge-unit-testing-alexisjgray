import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import apiRoutes from "./routes";
import keys from "./config/keys";

mongoose
  .connect(keys.db.url)
  .then(() => console.log("Connection to the database successful"))
  .catch((err) =>
    console.log("Connection to the database not successful:", err)
  );

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(keys.api_url, apiRoutes);

app.listen(keys.port, () => console.log("Now listening on port 3001"));

export default app;
