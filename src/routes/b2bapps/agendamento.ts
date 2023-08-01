import { Router } from "express";
import { getSchedules } from "../../utils/agendamento/get";

const b2b_agendamentoRouter = Router();

b2b_agendamentoRouter.get("/horario", getSchedules);

export default b2b_agendamentoRouter;