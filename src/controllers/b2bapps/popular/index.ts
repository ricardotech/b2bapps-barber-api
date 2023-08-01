import { Request, Response } from "express";
import Gestor from "../../../models/gestor";
import { GestorMock } from "./data";

export async function popularGestor(req: Request, res: Response) {
  try {
    await Gestor.insertMany(GestorMock).then((result) => {
      res.status(201).json({ mensagem: "Gestor populado com sucesso", result });
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
export async function popularBarbearia(req: Request, res: Response) {}
export async function popularServico(req: Request, res: Response) {}
export async function popularBarbeiro(req: Request, res: Response) {}
export async function popularCliente(req: Request, res: Response) {}
export async function popularAgendamento(req: Request, res: Response) {}
