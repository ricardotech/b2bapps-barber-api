import express from "express";

import {
  getUsuario,
  getUsuariosByBarbearia,
  createUsuario,
  updateUsuario,
  deletarUsuario,
} from "../controllers/usuario";

const router = express.Router();

router.get("/:id", getUsuario);
router.get("/barbearia/:id", getUsuariosByBarbearia);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deletarUsuario);

export default router;
