import { Router } from "express";

import {
  getServicosByBarbearia,
  getServico,
  createServico,
  updateServico,
  deleteServico,
} from "../controllers/servicos";

const servicoRouter = Router();

servicoRouter.get("/barbearia/:id", getServicosByBarbearia);
servicoRouter.get("/:id", getServico);
servicoRouter.post("/", createServico);
servicoRouter.put("/:id", updateServico);
servicoRouter.delete("/:id", deleteServico);

export default servicoRouter;
