import express from "express";

import {
  getCliente,
  getClientesByBarbearia,
  createCliente,
  updateCliente,
  deletarCliente,
} from "../controllers/clientes";

const router = express.Router();

router.get("/:id", getCliente);
router.get("/barbearia/:id", getClientesByBarbearia);
router.post("/", createCliente);
router.put("/:id", updateCliente);
router.delete("/:id", deletarCliente);

export default router;
