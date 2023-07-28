import { Request, Response } from "express";
import Gestor from "../../models/gestor";
import Barbearia from "../../models/barbearia";

interface Prop {
  req: Request;
  res: Response;
}

export async function deleteGestor({ req, res }: Prop) {
  try {
    const { id } = req.params;
    const gestor = await Gestor.findById(id);
    if (!gestor) {
      return res.status(400).json({ message: "Gestor não encontrado" });
    }
    const barbearias = await Barbearia.find({ _id_gestor: id });
    barbearias.forEach(async (barbearia) => {
      if (barbearia.status) {
        return res.status(400).json({
          message: "Não é possível deletar um gestor com barbearias ativas",
        });
      }
    });
    await Gestor.findByIdAndDelete(id)
      .then(() => {
        return res.status(200).json({ message: "Gestor deletado com sucesso" });
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({ message: "Erro ao deletar gestor" });
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
