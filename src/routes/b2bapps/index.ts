import { Router } from "express";
import b2b_gestorRouter from "./gestor";
import b2b_barbeariaRouter from "./barbearia";

const b2bappsRouter = Router();

b2bappsRouter.use("/gestor", b2b_gestorRouter);
b2bappsRouter.use("/barbearia", b2b_barbeariaRouter);

export default b2bappsRouter;