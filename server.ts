import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import barbearia from "./src/routes/barbearia";
import barbeiro from "./src/routes/barbeiros";
import servico from "./src/routes/servico";
import agendamento from "./src/routes/agendamento";
import usuario from "./src/routes/usuario";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/barbearia", barbearia);
app.use("/barbeiro", barbeiro);
app.use("/servico", servico);
app.use("/agendamento", agendamento);
app.use("/usuario", usuario);

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
