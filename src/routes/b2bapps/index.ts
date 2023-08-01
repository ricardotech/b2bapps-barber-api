import { Router } from "express";
import b2b_gestorRouter from "./gestor";
import b2b_barbeariaRouter from "./barbearia";
import b2b_barbeiroRouter from "./barbeiro";

const b2bappsRouter = Router();

b2bappsRouter.use("/gestor", b2b_gestorRouter);
b2bappsRouter.use("/barbearia", b2b_barbeariaRouter);
b2bappsRouter.use("/barbeiro", b2b_barbeiroRouter);

export default b2bappsRouter;