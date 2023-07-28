import { Request, Response } from "express";
import Barbearia from "../../models/barbearia";

export async function getBarberShopById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const barbearia = await Barbearia.findById(id);
    if (!barbearia) {
      return res.status(404).json({ mensagem: "Barbearia não encontrada" });
    }
    return res.status(200).json(barbearia);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
