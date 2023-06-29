import express from "express";

import {
  createBarbeiro,
  deleteBarbeiro,
  getBarbeiro,
  getBarbeirosByBarbearia,
  updateBarbeiro,
} from "../controllers/barbeiros";

const router = express.Router();

router.get("/:id", getBarbeiro);
router.get("/barbearia/:id", getBarbeirosByBarbearia);
router.post("/", createBarbeiro);
router.put("/:id", updateBarbeiro);
router.delete("/:id", deleteBarbeiro);

export default router;