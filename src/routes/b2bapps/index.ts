import { Router } from "express";
import b2b_gestorRouter from "./gestor";
import b2b_barbeariaRouter from "./barbearia";
import b2b_barbeiroRouter from "./barbeiro";
import b2b_clinteRouter from "./cliente";
import b2b_agendamentoRouter from "./agendamento";

const b2bappsRouter = Router();

b2bappsRouter.use("/gestor", b2b_gestorRouter);
b2bappsRouter.use("/agendamento", b2b_agendamentoRouter);
b2bappsRouter.use("/barbearia", b2b_barbeariaRouter);
b2bappsRouter.use("/barbeiro", b2b_barbeiroRouter);
b2bappsRouter.use("/cliente", b2b_clinteRouter);

export default b2bappsRouter;