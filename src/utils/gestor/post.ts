import { Request, Response } from "express";
import { GestorType } from "../../types";
import Gestor from "../../models/gestor";

export async function createGestor(req: Request, res: Response) {
  try {
    const body: GestorType = req.body;
    const { nome, telefone, email, documento } = body;
    if (!nome || !telefone || !email || !documento) {
      return res
        .status(400)
        .json({ message: "Dados obrigatórios não informados" });
    }
    if (telefone.length !== 11) {
      return res.status(400).json({ message: "Telefone inválido" });
    }
    if (!email.includes("@") || !email.includes(".") || email.length > 320) {
      return res.status(400).json({ message: "Email inválido" });
    }
    if (!documento.cpf || !documento.naturalidade || !documento.filiacao) {
      return res.status(400).json({ message: "Documento inválido" });
    }
    if (documento.cpf.length !== 11) {
      return res.status(400).json({ message: "CPF inválido" });
    }
    const gestor = await Gestor.create(body);
    return res.status(201).json(gestor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
