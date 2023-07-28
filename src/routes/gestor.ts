import { Router } from "express";
import { getBarberShopByGestor, getGestorById } from "../utils/gestor/get";
import { createGestor } from "../utils/gestor/post";
import { deleteGestor } from "../utils/gestor/delete";

const gestorRouter = Router();

gestorRouter.get("/:id", getGestorById); // Rota para listar um gestor pelo id
gestorRouter.get("/:id/barbearia", getBarberShopByGestor); // Rota para listar todas as barbearias pelo id do gestor
gestorRouter.post("/", createGestor); // Rota para criar um gestor
gestorRouter.delete("/:id", deleteGestor); // Rota para deletar um gestor

export default gestorRouter;
