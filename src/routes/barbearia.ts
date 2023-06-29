import express from "express";

import {
  createBarbearia,
  deleteBarbearia,
  getBarbearia,
  getBarbearias,
  updateBarbearia,
} from "../controllers/barbearia";

const router = express.Router();

router.get("/", getBarbearias);
router.get("/:id", getBarbearia);
router.post("/", createBarbearia);
router.put("/:id", updateBarbearia);
router.delete("/:id", deleteBarbearia);

export default router;
