import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./src/routes";

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
const serverURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster.w2thyu4.mongodb.net/?retryWrites=true&w=majority`;

const start = async () => {
  try {
    await mongoose
      .connect(serverURI)
      .then(() => console.log("DB Connection ✅"));
    app.listen(port, () => console.log("PORT:" + port));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
