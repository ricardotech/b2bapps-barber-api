import { Router } from "express";
import { getBarberShopById } from "../controllers/barbearia/get";

const barbeariaRouter = Router();

barbeariaRouter.get("/:id", getBarberShopById);

export default barbeariaRouter;
