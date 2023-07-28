import { Router } from "express";
import { getGestorById } from "../controllers/gestor/get";

const gestorRouter = Router();

gestorRouter.get("/:id",getGestorById)

export default gestorRouter;