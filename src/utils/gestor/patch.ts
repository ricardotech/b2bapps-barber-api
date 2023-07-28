import { Request, Response } from "express";
import Gestor from "../../models/gestor";

export async function updateStatusGestor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Gestor.findById(id).then((gestor) => {
      if (!gestor) {
        return res.status(404).json({ message: "Gestor não encontrado" });
      }
      gestor.status = !gestor.status;
      gestor.save();
      return res.status(200).json({
        message: `Status do gestor ${gestor.nome} alterado para ${gestor.status} com sucesso`,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function updatePhoneGestor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { telefone } = req.body;
    if (!telefone) {
      return res.status(400).json({ message: "Telefone não informado" });
    }
    if (telefone.length !== 11) {
      return res.status(400).json({ message: "Telefone inválido" });
    }
    await Gestor.findById(id).then((gestor) => {
      if (!gestor) {
        return res.status(404).json({ message: "Gestor não encontrado" });
      }
      gestor.telefone = telefone;
      gestor.save();
      return res.status(200).json({
        message: `Telefone do gestor ${gestor.nome} alterado para ${gestor.telefone} com sucesso`,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function updateEmailGestor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email não informado" });
    }
    if (!email.includes("@") || !email.includes(".com") || email.length > 320) {
      return res.status(400).json({ message: "Email inválido" });
    }
    await Gestor.findById(id).then((gestor) => {
      if (!gestor) {
        return res.status(404).json({ message: "Gestor não encontrado" });
      }
      gestor.email = email;
      gestor.save();
      return res.status(200).json({
        message: `Email do gestor ${gestor.nome} alterado para ${gestor.email} com sucesso`,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
export async function updateAvatarGestor(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { avatar } = req.body;
    await Gestor.findById(id).then((gestor) => {
      if (!gestor) {
        return res.status(404).json({ message: "Gestor não encontrado" });
      }
      gestor.avatar = avatar;
      gestor.save();
      return res.status(200).json({
        message: `Avatar do gestor ${gestor.nome} alterado com sucesso`,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
