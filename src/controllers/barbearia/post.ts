import { Request, Response } from "express";
import Barbearia from "../../models/barbearia";
import { BarbeariaType, PlanosEnum } from "../../types";
import Gestor from "../../models/gestor";

export async function createBarberShop(req: Request, res: Response) {
  try {
    const body: BarbeariaType = req.body;
    const {
      _id_gestor,
      plano,
      nome,
      endereco,
      logo,
      slogan,
      expediente,
      documento,
    } = body;

    if (!_id_gestor || !plano || !nome || !endereco || !expediente) {
      return res.status(400).json({ mensagem: "Faltam dados obrigatórios" });
    }

    const gestor = await Gestor.findById(_id_gestor);

    if (!gestor) {
      return res.status(404).json({ mensagem: "Gestor não encontrado" });
    }

    if (gestor.status === false) {
      return res.status(400).json({ mensagem: "Gestor inativo" });
    }

    if (
      plano !== PlanosEnum.Barber &&
      plano !== PlanosEnum.BarberPlus &&
      plano !== PlanosEnum.BarberPro
    ) {
      return res.status(400).json({ mensagem: "Plano inválido" });
    }

    const barbearia = await Barbearia.create({
      _id_gestor,
      plano,
      nome,
      endereco,
      logo,
      slogan,
      expediente,
      documento,
    });

    return res.status(201).json(barbearia);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
