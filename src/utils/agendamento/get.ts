import { Request, Response } from "express";
import { Types } from "mongoose";
import Barbearia from "../../models/barbearia";
import Barbeiro from "../../models/barbeiro";
import Agendamento from "../../models/agendamento";
import { StatusAgendamentoEnum } from "../../types";

export async function getSchedules(req: Request, res: Response) {
  try {
    const { idBarbearia, idBarbeiro } = req.body;
    if (!idBarbearia || !idBarbeiro) {
      return res.status(400).json({ mensagem: "Dados insuficientes" });
    }
    if (Types.ObjectId.isValid(idBarbearia) === false) {
      return res.status(400).json({ mensagem: "Id da barbearia inválido" });
    }
    if (Types.ObjectId.isValid(idBarbeiro) === false) {
      return res.status(400).json({ mensagem: "Id do barbeiro inválido" });
    }
    const barbearia = await Barbearia.findById(idBarbearia);
    if (!barbearia) {
      return res.status(400).json({ mensagem: "Barbearia não encontrada" });
    }
    if (!barbearia.status) {
      return res.status(400).json({ mensagem: "Barbearia desativada" });
    }
    const barbeiro = await Barbeiro.findById(idBarbeiro);
    if (!barbeiro) {
      return res.status(400).json({ mensagem: "Barbeiro não encontrado" });
    }
    if (!barbeiro.status) {
      return res.status(400).json({ mensagem: "Barbeiro desativado" });
    }
    const inicio = new Date();
    const fim = new Date();
    fim.setDate(inicio.getDate() + 30);
    fim.setHours(23, 59, 59, 999);

    const agendamentos = await Agendamento.find({
      idBarbearia,
      idBarbeiro,
      inicio: { $gte: inicio, $lte: fim },
      status: StatusAgendamentoEnum.Confirmado,
    });
    return res.status(200).json({ agendamentos });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
