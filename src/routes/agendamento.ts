import express from "express";

import {
  getAgendamentosByBarbearia,
  getAgendamentosByBarbeiro,
  getAgendamentosByUsuario,
  createAgendamento,
  getAgendamento,
  updateAgendamento,
  cancelarAgendamento,
  deletarAgendamento,
} from "../controllers/agendamento";

const router = express.Router();

router.get("/:id", getAgendamento);
router.get("/barbearia/:id", getAgendamentosByBarbearia);
router.get("/barbeiro/:id", getAgendamentosByBarbeiro);
router.get("/usuario/:id", getAgendamentosByUsuario);
router.post("/", createAgendamento);
router.put("/:id", updateAgendamento);
router.patch("/:id", cancelarAgendamento);
router.delete("/:id", deletarAgendamento);

export default router;
