import express from "express";

import {
  getServicosByBarbearia,
  getServico,
  createServico,
  updateServico,
  deleteServico,
} from "../controllers/servicos";

const router = express.Router();

router.get("/barbearia/:id", getServicosByBarbearia);
router.get("/:id", getServico);
router.post("/", createServico);
router.put("/:id", updateServico);
router.delete("/:id", deleteServico);

export default router;
