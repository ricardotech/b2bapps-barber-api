import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import barbeiros from "./src/routes/barbeiros";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/barbeiros", barbeiros);

const serverURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster.w2thyu4.mongodb.net/?retryWrites=true&w=majority`;

const start = async () => {
  try {
    await mongoose
      .connect(serverURI)
      .then(() => console.log("db connection successfully"));
    app.listen(port, () => console.log("server started on port", port));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
