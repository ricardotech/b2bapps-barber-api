import { Router } from "express";
import { createClient } from "../../utils/cliente/post";

const b2b_clinteRouter = Router();

b2b_clinteRouter.post("/", createClient);

export default b2b_clinteRouter;