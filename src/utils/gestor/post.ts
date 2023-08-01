import { Request, Response } from "express";
import { GestorType } from "../../types";
import Gestor from "../../models/gestor";

export async function createGestor(req: Request, res: Response) {
  try {
    const body: GestorType = req.body;
    const {
      nome,
      telefone,
      email,
      cpf,
      avatar,
      rg,
      dataNascimento,
      naturalidade,
      filiacao,
    } = body;
    if (!nome || !telefone || !email || !cpf || !naturalidade || !filiacao) {
      return res
        .status(400)
        .json({ message: "Dados obrigatórios não informados" });
    }
    if (telefone.length !== 11) {
      return res.status(400).json({ message: "Telefone inválido" });
    }
    if (!email.includes("@") || !email.includes(".com") || email.length > 320) {
      return res.status(400).json({ message: "Email inválido" });
    }
    if (cpf.length !== 11) {
      return res.status(400).json({ message: "CPF inválido" });
    }
    await Gestor.create({
      nome,
      telefone,
      email,
      cpf,
      avatar,
      rg,
      dataNascimento,
      naturalidade,
      filiacao,
    })
      .then((gestor) => {
        return res.status(201).json(gestor);
      })
      .catch((error) => {
        if (error.code === 11000) {
          if (error.keyValue.email) {
            return res.status(400).json({ message: "Email já cadastrado" });
          }
          if (error.keyValue.cpf) {
            return res.status(400).json({ message: "CPF já cadastrado" });
          }
          if (error.keyValue.rg) {
            return res.status(400).json({ message: "RG já cadastrado" });
          }
        }
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
