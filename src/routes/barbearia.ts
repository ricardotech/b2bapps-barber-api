import { Router } from "express";

import {
  createBarbearia,
  deleteBarbearia,
  getBarbearia,
  getBarbearias,
  updateBarbearia,
} from "../controllers/barbearia";

const barbeariaRouter = Router();

// Rotas privadas [Interna]
barbeariaRouter.get("/", getBarbearias);

// Rotas publicas
barbeariaRouter.get("/:id", getBarbearia);
barbeariaRouter.post("/", createBarbearia);
barbeariaRouter.put("/:id", updateBarbearia);
barbeariaRouter.delete("/:id", deleteBarbearia);

export default barbeariaRouter;
