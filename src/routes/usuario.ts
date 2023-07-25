import express from "express";

import {
  getUsuario,
  getUsuariosByBarbearia,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarios";

const router = express.Router();

router.get("/:id", getUsuario);
router.get("/barbearia/:id", getUsuariosByBarbearia);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

export default router;
