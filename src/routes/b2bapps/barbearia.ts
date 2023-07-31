import { Router } from "express";
import verificaId from "../../middleware/verificaId";
import { getAllBarberShop } from "../../controllers/b2bapps/barbearia/get";
import { createBarberShop } from "../../utils/barbearia/post";

const b2b_barbeariaRouter = Router();

b2b_barbeariaRouter.get("/", getAllBarberShop); // Rota para listar todas as barbearias
b2b_barbeariaRouter.get("/:id", verificaId, (req, res) => {}); // Rota para listar uma barbearia específica
b2b_barbeariaRouter.post("/", createBarberShop); // Rota para criar uma barbearia
b2b_barbeariaRouter.delete("/:id", verificaId, (req, res) => {}); // Rota para deletar uma barbearia
b2b_barbeariaRouter.put("/:id", verificaId, (req, res) => {}); // Rota para atualizar uma barbearia
b2b_barbeariaRouter.patch("/:id/plano", verificaId, (req, res) => {}); // Rota para atualizar o plano de uma barbearia
b2b_barbeariaRouter.patch("/:id/status", verificaId, (req, res) => {}); // Rota para atualizar o status de uma barbearia

export default b2b_barbeariaRouter;
