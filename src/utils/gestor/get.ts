import { Request, Response } from "express";
import Gestor from "../../models/gestor";
import Barbearia from "../../models/barbearia";

export async function getGestorById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const gestor = await Gestor.findById(id);
    if (!gestor) {
      return res.status(404).json({ mensagem: "Gestor não encontrado" });
    }
    return res.status(200).json(gestor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

export async function getBarberShopByGestor(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const gestor = await Gestor.findById(id);

    if (!gestor) {
      return res.status(404).json({ mensagem: "Gestor não encontrado" });
    }

    const barbearia = await Barbearia.find({ _id_gestor: gestor._id });
    return res.status(200).json(barbearia);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
