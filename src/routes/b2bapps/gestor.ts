import { Router } from "express";
import {
  getAllGestores,
  getGestorByCpf,
} from "../../controllers/b2bapps/gestor/get";
import { getBarberShopByGestor, getGestorById } from "../../utils/gestor/get";
import { createGestor } from "../../utils/gestor/post";
import { deleteGestor } from "../../utils/gestor/delete";

const b2b_gestorRouter = Router();

b2b_gestorRouter.get("/", getAllGestores); // Rota para listar todos os gestores
b2b_gestorRouter.get("/:id", getGestorById); // Rota para listar um gestor pelo id
b2b_gestorRouter.get("/cpf/:cpf", getGestorByCpf); // Rota para listar um gestor pelo cpf
b2b_gestorRouter.get("/:id/barbearia", getBarberShopByGestor); // Rota para listar todas as barbearias pelo id do gestor
b2b_gestorRouter.post("/", createGestor); // Rota para criar um gestor
b2b_gestorRouter.delete("/:id", deleteGestor); // Rota para deletar um gestor

export default b2b_gestorRouter;
