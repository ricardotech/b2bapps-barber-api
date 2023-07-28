import { Router } from "express";

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

const agendamentoRouter = Router();

agendamentoRouter.get("/:id", getAgendamento);
agendamentoRouter.get("/barbearia/:id", getAgendamentosByBarbearia);
agendamentoRouter.get("/barbeiro/:id", getAgendamentosByBarbeiro);
agendamentoRouter.get("/usuario/:id", getAgendamentosByUsuario);
agendamentoRouter.post("/", createAgendamento);
agendamentoRouter.put("/:id", updateAgendamento);
agendamentoRouter.patch("/:id", cancelarAgendamento);
agendamentoRouter.delete("/:id", deletarAgendamento);

export default agendamentoRouter;
