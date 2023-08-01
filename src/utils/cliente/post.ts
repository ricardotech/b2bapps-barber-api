import { Request, Response } from "express";
import { Types } from "mongoose";
import Barbearia from "../../models/barbearia";
import Cliente from "../../models/cliente";

export async function createClient(req: Request, res: Response) {
  try {
    const { nome, telefone, email, avatar, idBarbearia } = req.body;
    if (!nome || !telefone || !idBarbearia) {
      return res.status(400).json({ mensagem: "Dados insuficientes" });
    }
    if (telefone.length !== 11) {
      return res.status(400).json({ mensagem: "Telefone inválido" });
    }
    if (email) {
      if (
        email.length > 320 ||
        !email.includes("@") ||
        !email.includes(".com")
      ) {
        return res.status(400).json({ mensagem: "Email inválido" });
      }
    }
    if (Types.ObjectId.isValid(idBarbearia) === false) {
      return res
        .status(400)
        .json({ mensagem: "Id da barbearia está inválido" });
    }
    const barbearia = await Barbearia.findById(idBarbearia);
    if (!barbearia) {
      return res.status(400).json({ mensagem: "Barbearia não encontrada" });
    }
    if (barbearia.status === false) {
      return res.status(400).json({ mensagem: "Barbearia desativada" });
    }
    await Cliente.create({
      nome,
      telefone,
      email,
      avatar,
      barbearia: idBarbearia,
    })
      .then(() => {
        return res.status(201).json({ mensagem: "Cliente criado com sucesso" });
      })
      .catch((error) => {
        if (error.code === 11000) {
          if (error.keyPattern.telefone) {
            return res.status(400).json({ mensagem: "Telefone já cadastrado" });
          }
        }
        return res.status(500).json({ mensagem: error.message });
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
