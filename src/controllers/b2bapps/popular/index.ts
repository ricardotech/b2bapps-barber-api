import { Request, Response } from "express";
import Gestor from "../../../models/gestor";
import { BarbeariaMock, BarbeiroMock, GestorMock, ServicoMock } from "./data";
import Barbearia from "../../../models/barbearia";
import Servico from "../../../models/servico";
import Barbeiro from "../../../models/barbeiro";

export async function popularGestor(req: Request, res: Response) {
  try {
    await Gestor.insertMany(GestorMock).then((result) => {
      res.status(201).json({ mensagem: "Gestor populado com sucesso", result });
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
export async function popularBarbearia(req: Request, res: Response) {
  try {
    await Barbearia.insertMany(BarbeariaMock).then((result) => {
      res
        .status(201)
        .json({ mensagem: "Barbearia populada com sucesso", result });
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
export async function popularServico(req: Request, res: Response) {
  try {
    await Servico.insertMany(ServicoMock).then((result) => {
      res
        .status(201)
        .json({ mensagem: "Serviço populado com sucesso", result });
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
export async function popularBarbeiro(req: Request, res: Response) {
  try {
    await Barbeiro.insertMany(BarbeiroMock).then((result) => {
      res
        .status(201)
        .json({ mensagem: "Barbeiro populado com sucesso", result });
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
export async function popularCliente(req: Request, res: Response) {}
export async function popularAgendamento(req: Request, res: Response) {}
