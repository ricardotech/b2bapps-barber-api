import { Request, Response } from "express";
import Gestor from "../../../models/gestor";

export async function getAllGestores(req: Request, res: Response) {
  try {
    const gestores = await Gestor.find();
    return res.status(200).json(gestores);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

export async function getGestorByCpf(req: Request, res: Response) {
  try {
    const { cpf } = req.params;
    if (cpf.length !== 11 || isNaN(Number(cpf))) {
      return res.status(400).json({ mensagem: "CPF inválido" });
    }
    const gestor = await Gestor.find({ cpf });
    if (!gestor) {
      return res.status(404).json({ mensagem: "Gestor não encontrado" });
    }
    return res.status(200).json(gestor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
