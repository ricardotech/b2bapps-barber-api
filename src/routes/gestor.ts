import { Router } from "express";
import {
  getBarberShopByGestor,
  getGestorById,
} from "../controllers/gestor/get";

const gestorRouter = Router();

gestorRouter.get("/:id", getGestorById);
gestorRouter.get("/:id/barbearia", getBarberShopByGestor);

export default gestorRouter;
