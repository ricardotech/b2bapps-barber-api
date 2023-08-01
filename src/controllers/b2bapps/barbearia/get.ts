import { Request, Response } from "express";
import Barbearia from "../../../models/barbearia";

export async function getAllBarberShop(req: Request, res: Response) {
  try {
    await Barbearia.find().then((barbearias) => {
      return res.status(200).json(barbearias);
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
