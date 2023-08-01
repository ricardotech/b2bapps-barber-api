import { Router } from "express";
import Autenticacao from "../middleware/auth";
import clienteRouter from "./sistema/cliente";
import gestorRouter from "./sistema/gestor";
import b2bappsRouter from "./b2bapps";
import agendamentoRouter from "./sistema/agendamento";
import barbeariaRouter from "./sistema/barbearia";
import servicoRouter from "./sistema/servico";
import usuarioRouter from "./sistema/usuario";

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
