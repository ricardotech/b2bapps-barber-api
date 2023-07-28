import { Request, Response } from "express";
import Gestor from "../../models/gestor";

interface Prop {
  req: Request;
  res: Response;
}
export async function getGestorById({ req, res }: Prop) {
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
