import { Router } from "express";

import {
  getCliente,
  getClientesByBarbearia,
  createCliente,
  updateCliente,
  deletarCliente,
} from "../controllers/clientes";

const clienteRouter = Router();

clienteRouter.get("/:id", getCliente);
clienteRouter.get("/barbearia/:id", getClientesByBarbearia);
clienteRouter.post("/", createCliente);
clienteRouter.put("/:id", updateCliente);
clienteRouter.delete("/:id", deletarCliente);

export default clienteRouter;
