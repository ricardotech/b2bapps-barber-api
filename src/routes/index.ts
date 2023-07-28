import { Router } from "express";
import Autenticacao from "../middleware/auth";
import agendamentoRouter from "./agendamento";
import barbeariaRouter from "./barbearia";
import clienteRouter from "./cliente";
import gestorRouter from "./gestor";
import servicoRouter from "./servico";
import usuarioRouter from "./usuario";
import b2bappsRouter from "./b2bapps";

const router = Router();

//Rota Pública
router.use("/login",()=>{});

//Rotas Privadas
router.use("/agendamento", Autenticacao, agendamentoRouter);
router.use("/barbearia", Autenticacao, barbeariaRouter);
router.use("/barbeiro", Autenticacao, barbeariaRouter);
router.use("/cliente", Autenticacao, clienteRouter);
router.use("/gestor", Autenticacao, gestorRouter);
router.use("/servico", Autenticacao, servicoRouter);
router.use("/usuario", Autenticacao, usuarioRouter);

//Rotas Privadas para B2B
router.use("/b2bapps", Autenticacao, b2bappsRouter);

export default router;
