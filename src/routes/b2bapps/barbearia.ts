import { Router } from "express";
import verificaId from "../../middleware/verificaId";
import { getAllBarberShop } from "../../controllers/b2bapps/barbearia/get";
import { createBarberShop } from "../../utils/barbearia/post";
import { deleteBarbearia } from "../../utils/barbearia/delete";
import {
  updateAddressBarberShop,
  updateBarbershopOpeningHours,
  updateContactBarberShop,
  updateLogoBarberShop,
  updateNameBarberShop,
  updatePlanBarberShop,
  updateSloganBarberShop,
  updateStatusBarberShop,
} from "../../utils/barbearia/patch";
import { getBarberShopById } from "../../utils/barbearia/get";

const b2b_barbeariaRouter = Router();

b2b_barbeariaRouter.get("/", getAllBarberShop); // Rota para listar todas as barbearias
b2b_barbeariaRouter.get("/:id", verificaId, getBarberShopById); // Rota para listar uma barbearia específica
b2b_barbeariaRouter.post("/", createBarberShop); // Rota para criar uma barbearia
b2b_barbeariaRouter.delete("/:id", verificaId, deleteBarbearia); // Rota para deletar uma barbearia
b2b_barbeariaRouter.patch("/status/:id", verificaId, updateStatusBarberShop); // Rota para atualizar o status de uma barbearia
b2b_barbeariaRouter.patch("/nome/:id", verificaId, updateNameBarberShop); // Rota para atualizar o nome e nome fantasia de uma barbearia
b2b_barbeariaRouter.patch("/logo/:id", verificaId, updateLogoBarberShop); // Rota para atualizar a logo de uma barbearia
b2b_barbeariaRouter.patch("/slogan/:id", verificaId, updateSloganBarberShop); // Rota para atualizar o slogan de uma barbearia
b2b_barbeariaRouter.patch("/contato/:id", verificaId, updateContactBarberShop); // Rota para atualizar o contato de uma barbearia
b2b_barbeariaRouter.patch("/endereco/:id", verificaId, updateAddressBarberShop); // Rota para atualizar o endereço de uma barbearia
b2b_barbeariaRouter.patch("/plano/:id", verificaId, updatePlanBarberShop); // Rota para atualizar o plano de uma barbearia
b2b_barbeariaRouter.patch(
  "/expediente/:id",
  verificaId,
  updateBarbershopOpeningHours
); // Rota para atualizar o expediente de uma barbearia
export default b2b_barbeariaRouter;
