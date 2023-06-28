import { Request, Response } from "express";
import agendamento from "../models/agendamento";
import Agendamento from "../models/agendamento";

export const getAgendamentosByUsuario = async (req: any, res: Response) => {
  const user = req.userId;

  const agendamentos = await Agendamento.find({
    user: user,
  }).lean();
  res.json(agendamentos);
};

export const getAgendamentosByBarbeiro = async (req: any, res: Response) => {
  const agendamento = req.params.id;

  const agendamentos = await Agendamento.find({
    agendamento: agendamento,
  }).lean();
  res.json(agendamentos);
};

export const getAgendamentosByBarbearia = async (req: any, res: Response) => {
  const barbearia = req.params.id;

  const agendamentos = await Agendamento.find({
    barbearia: barbearia,
  }).lean();
  res.json(agendamentos);
};

export const getAgendamento = async (req: Request, res: Response) => {
  const agendamento = await Agendamento.findById(req.params.id).lean();
  res.json(agendamento);
};

export const createAgendamento = async ({ body }: Request, res: Response) => {
  const { user, barbeiro, barbearia, criador, servicos, inicio, fim } = body;

  const agendamento = new Agendamento({
    user,
    barbeiro,
    barbearia,
    criador,
    servicos,
    inicio,
    fim,
  });

  const agendamentoNovo = await agendamento.save();
  res.json(agendamentoNovo);
};

export const updateAgendamento = async (req: Request, res: Response) => {
  const agendamento = await Agendamento.findById(req.params.id);

  if (agendamento) {
    agendamento.inicio = req.body.inicio ?? agendamento.inicio;
    agendamento.fim = req.body.fim ?? agendamento.fim;

    const agendamentoAtualizado = await agendamento.save();
    res.json(agendamentoAtualizado);
  } else {
    res.status(404).json({ message: "Agendamento não encontrado" });
  }
};

export const cancelarAgendamento = async (req: Request, res: Response) => {
  const agendamento = await Agendamento.findById(req.params.id);

  if (agendamento) {
    agendamento.status = "Cancelado";

    const agendamentoAtualizado = await agendamento.save();
    res.json(agendamentoAtualizado);
  } else {
    res.status(404).json({ message: "Agendamento não encontrado" });
  }
};

export const deletarAgendamento = async (req: Request, res: Response) => {
  await Agendamento.findByIdAndDelete(req.params.id);
  res.json({ message: "Agendamento removido" });
};
