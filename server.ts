import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log("server side");

  return res.send("client side");
});

const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;

const serverURI = 
`mongodb+srv://${DBUSER}:${DBPASS}@cluster.w2thyu4.mongodb.net/?retryWrites=true&w=majority`;

const start = async () => {
  try {
    await mongoose.connect(serverURI).then(() => console.log("db connection successfully"));
    app.listen(port, () => console.log("server started on port", port));
  } 
  catch(error) {
    console.error(error);
    process.exit(1);
  }
}

start();
