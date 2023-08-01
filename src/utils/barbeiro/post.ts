import { Request, Response } from "express";
import Barbeiro from "../../models/barbeiro";
import Barbearia from "../../models/barbearia";

export async function createBarber(req: Request, res: Response) {
  try {
    const {
      _id_barbearia,
      nome,
      documento,
      avatar,
      email,
      telefone,
      servicos,
      expediente,
    } = req.body;
    if (
      !_id_barbearia ||
      !nome ||
      !documento ||
      !email ||
      !telefone ||
      !servicos ||
      !expediente
    ) {
      return res.status(400).json({ mensagem: "Dados insuficientes" });
    }
    const barbearia = await Barbearia.findById(_id_barbearia);
    if (!barbearia) {
        return res.status(400).json({ mensagem: "Barbearia não encontrada" });
    }
    if(!barbearia.status) {
        return res.status(400).json({ mensagem: "Barbearia desativada" });
    }
    if (documento.length !== 11 && documento.length !== 14) {
      return res.status(400).json({ mensagem: "Documento inválido" });
    }
    if (
      email.length > 320 ||
      email.includes("@") === false ||
      email.includes(".com") === false
    ) {
      return res.status(400).json({ mensagem: "Email inválido" });
    }
    if (telefone.length !== 11) {
      return res.status(400).json({ mensagem: "Telefone inválido" });
    }
    if (servicos.length === 0) {
      return res
        .status(400)
        .json({ mensagem: "Atribua pelo menos um serviço ao barbeiro" });
    }
    if (expediente.length === 0) {
      return res.status(400).json({
        mensagem: "Atribua pelo menos um dia de expediente ao barbeiro",
      });
    }
    await Barbeiro.create({
      _id_barbearia,
      nome,
      documento,
      avatar,
      email,
      telefone,
      servicos,
      expediente,
    })
      .then(() => {
        return res.status(201).json({ mensagem: "Barbeiro criado com sucesso" });
      })
      .catch((error) => {
        if (error.code === 11000) {
          if (error.keyPattern.documento) {
            return res.status(400).json({ mensagem: "Documento já cadastrado" });
          }
          if (error.keyPattern.email) {
            return res.status(400).json({ mensagem: "Email já cadastrado" });
          }
          if (error.keyPattern.telefone) {
            return res.status(400).json({ mensagem: "Telefone já cadastrado" });
          }
        }
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
