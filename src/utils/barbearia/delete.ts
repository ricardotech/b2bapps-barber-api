import { Request, Response } from "express";
import Barbearia from "../../models/barbearia";

export async function deleteBarbearia(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { idGestor } = req.body;
    const barbearia = await Barbearia.findById(id);
    if (!barbearia) {
      return res.status(404).json({ mensagem: "Barbearia não encontrada" });
    }
    if (barbearia.status) {
      return res.status(400).json({ mensagem: "Barbearia ainda está ativada" });
    }
    if (barbearia.idGestor.toString() !== idGestor) {
      return res
        .status(400)
        .json({ mensagem: "Usuário não é gestor da barbearia" });
    }
    await Barbearia.findByIdAndDelete(id);
    return res.status(200).json({ mensagem: "Barbearia deletada com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
