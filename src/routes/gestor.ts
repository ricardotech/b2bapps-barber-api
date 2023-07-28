import { Router } from "express";
import { getBarberShopByGestor, getGestorById } from "../utils/gestor/get";
import { createGestor } from "../utils/gestor/post";
import { deleteGestor } from "../utils/gestor/delete";
import verificaId from "../middleware/verificaId";
import { updateAvatarGestor, updateEmailGestor, updatePhoneGestor } from "../utils/gestor/patch";

const gestorRouter = Router();

gestorRouter.get("/:id", verificaId, getGestorById); // Rota para listar um gestor pelo id
gestorRouter.get("/:id/barbearia", verificaId, getBarberShopByGestor); // Rota para listar todas as barbearias pelo id do gestor
gestorRouter.post("/", createGestor); // Rota para criar um gestor
gestorRouter.patch("/:id/telefone", verificaId, updatePhoneGestor); // Rota para atualizar o telefone do gestor
gestorRouter.patch("/:id/email", verificaId, updateEmailGestor); // Rota para atualizar o email do gestor
gestorRouter.patch("/:id/avatar", verificaId, updateAvatarGestor); // Rota para atualizar o avatar do gestor
gestorRouter.delete("/:id", verificaId, deleteGestor); // Rota para deletar um gestor

export default gestorRouter;
