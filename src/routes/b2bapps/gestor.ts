import { Router } from "express";
import {
  getAllGestores,
  getGestorByCpf,
} from "../../controllers/b2bapps/gestor/get";
import { getBarberShopByGestor, getGestorById } from "../../utils/gestor/get";
import { createGestor } from "../../utils/gestor/post";
import { deleteGestor } from "../../utils/gestor/delete";
import verificaId from "../../middleware/verificaId";
import {
  updateAvatarGestor,
  updateEmailGestor,
  updatePhoneGestor,
  updateStatusGestor,
} from "../../utils/gestor/patch";

const b2b_gestorRouter = Router();

b2b_gestorRouter.get("/", getAllGestores); // Rota para listar todos os gestores
b2b_gestorRouter.get("/:id", verificaId, getGestorById); // Rota para listar um gestor pelo id
b2b_gestorRouter.get("/cpf/:cpf", getGestorByCpf); // Rota para listar um gestor pelo cpf
b2b_gestorRouter.get("/barbearia/:id", verificaId, getBarberShopByGestor); // Rota para listar todas as barbearias pelo id do gestor
b2b_gestorRouter.post("/", createGestor); // Rota para criar um gestor
b2b_gestorRouter.delete("/:id", verificaId, deleteGestor); // Rota para deletar um gestor
b2b_gestorRouter.patch("/telefone/:id", verificaId, updatePhoneGestor); // Rota para atualizar o telefone do gestor
b2b_gestorRouter.patch("/email/:id", verificaId, updateEmailGestor); // Rota para atualizar o email do gestor
b2b_gestorRouter.patch("/avatar/:id", verificaId, updateAvatarGestor); // Rota para atualizar o avatar do gestor
b2b_gestorRouter.patch("/status/:id", verificaId, updateStatusGestor); // Rota para atualizar o status de um gestor

export default b2b_gestorRouter;
