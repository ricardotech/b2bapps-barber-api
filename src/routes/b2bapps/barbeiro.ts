import { Router } from "express";
import { createBarber } from "../../utils/barbeiro/post";

const b2b_barbeiroRouter = Router();

b2b_barbeiroRouter.post('/', createBarber);

export default b2b_barbeiroRouter;