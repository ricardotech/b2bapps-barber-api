import { Router } from "express";
import {
  getAllGestores,
  getGestorByCpf,
} from "../../controllers/b2bapps/gestor/get";
import { getBarberShopByGestor, getGestorById } from "../../utils/gestor/get";

const b2b_gestorRouter = Router();

b2b_gestorRouter.get("/", getAllGestores); // Rota para listar todos os gestores
b2b_gestorRouter.get("/:id", getGestorById); // Rota para listar um gestor pelo id
b2b_gestorRouter.get("/cpf/:cpf", getGestorByCpf); // Rota para listar um gestor pelo cpf
b2b_gestorRouter.get("/:id/barbearia", getBarberShopByGestor); // Rota para listar todas as barbearias pelo id do gestor

export default b2b_gestorRouter;
