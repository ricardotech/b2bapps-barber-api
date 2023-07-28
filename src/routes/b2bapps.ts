import { Router } from "express";
import b2b_gestorRouter from "./b2bapps/gestor";

const b2bappsRouter = Router();

b2bappsRouter.use("/gestor", b2b_gestorRouter);
b2bappsRouter.use("/barbearia", b2b_gestorRouter);

export default b2bappsRouter;