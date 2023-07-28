import { Router } from "express";

import {
  getUsuario,
  getUsuariosByBarbearia,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarios";

const usuarioRouter = Router();

usuarioRouter.get("/:id", getUsuario);
usuarioRouter.get("/barbearia/:id", getUsuariosByBarbearia);
usuarioRouter.post("/", createUsuario);
usuarioRouter.put("/:id", updateUsuario);
usuarioRouter.delete("/:id", deleteUsuario);

export default usuarioRouter;
