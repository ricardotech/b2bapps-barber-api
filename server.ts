import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import barbearia from "./src/routes/barbearia";
import servico from "./src/routes/servico";
import agendamento from "./src/routes/agendamento";
import usuario from "./src/routes/usuario";
import cliente from "./src/routes/cliente";

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/barbearias", barbearia);
app.use("/clientes", cliente);
app.use("/usuarios", usuario);
app.use("/servicos", servico);
app.use("/agendamentos", agendamento);

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
