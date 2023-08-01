import { Router } from "express";
import {
  popularAgendamento,
  popularBarbearia,
  popularBarbeiro,
  popularCliente,
  popularGestor,
  popularServico,
} from "../../controllers/b2bapps/popular";

const b2b_pupolarRouter = Router();

b2b_pupolarRouter.post("/gestor", popularGestor);
b2b_pupolarRouter.post("/barbearia", popularBarbearia);
b2b_pupolarRouter.post("/servico", popularServico);
b2b_pupolarRouter.post("/barbeiro", popularBarbeiro);
b2b_pupolarRouter.post("/cliente", popularCliente);
b2b_pupolarRouter.post("/agendamento", popularAgendamento);

export default b2b_pupolarRouter;
