import express from "express";

import {
  createBarbeiro,
  deleteBarbeiro,
  getBarbeiro,
  getBarbeiros,
  getBarbeirosByBarbearia,
  updateBarbeiro,
} from "../controllers/barbeiros";

const router = express.Router();

router.get("/", getBarbeiros);
router.get("/:id", getBarbeiro);
router.get("/barbearia/:id", getBarbeirosByBarbearia);
router.post("/", createBarbeiro);
router.put("/:id", updateBarbeiro);
router.delete("/:id", deleteBarbeiro);