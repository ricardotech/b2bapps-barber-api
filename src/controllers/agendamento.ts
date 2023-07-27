import { Request, Response } from "express";
import Agendamento from "../models/agendamento";
import Barbearia from "../models/barbearia";
import Barbeiro from "../models/barbeiro";

export const getAgendamentosByUsuario = async (req: any, res: Response) => {
  const usuario = req.params.id;

  const agendamentos = await Agendamento.find({
    usuario: usuario,
  }).lean();
  res.json(agendamentos);
};

export const getAgendamentosByBarbeiro = async (req: any, res: Response) => {
  const barbeiro = req.params.id;

  const agendamentos = await Agendamento.find({
    barbeiro: barbeiro,
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
  const barbearia = await Barbearia.findById(body.barbearia);

  if (!barbearia) {
    return res.status(404).json({ message: "Barbearia não encontrada" });
  }

  if (
    body.inicio < barbearia.horario_abertura ||
    body.fim > barbearia.horario_fechamento
  ) {
    return res.status(400).json({ message: "Horário fora do expediente" });
  }

  const barbeiro = await Barbeiro.findById(body.barbeiro._id);

  if (!barbeiro) {
    return res.status(404).json({ message: "Barbeiro não encontrado" });
  }

  for(const servico of body.servicos) {
    if(!barbeiro.especialidades.includes(servico._id)) {
      return res.status(400).json({ message: `O serviço ${servico.nome} não é oferecido pelo barbeiro` });
    }
  }

  const data_inicio = new Date(body.inicio);
  data_inicio.setUTCHours(0, 0, 0, 0);
  const data_fim = new Date(body.inicio);
  data_fim.setUTCHours(23, 59, 59, 999);

  const agendamentos_do_barbeiro = await Agendamento.find({
    barbeiro: body.barbeiro._id,
    inicio: { $gte: data_inicio },
    fim: { $lte: data_fim },
  });

  if (agendamentos_do_barbeiro.length === 0) {
    const { usuario, barbeiro, barbearia, criador, servicos, inicio, fim } =
      body;

    const agendamento = new Agendamento({
      usuario,
      barbeiro,
      barbearia,
      criador,
      servicos,
      inicio,
      fim,
    });

    const agendamentoNovo = await agendamento.save();
    return res.json(agendamentoNovo);
  } else {
    for (const agendamento of agendamentos_do_barbeiro) {
      if (body.inicio >= agendamento.inicio && body.inicio <= agendamento.fim) {
        return res.status(400).json({ message: "Horário indisponível" });
      }
    }
    const { usuario, barbeiro, barbearia, criador, servicos, inicio, fim } =
      body;

    const agendamento = new Agendamento({
      usuario,
      barbeiro,
      barbearia,
      criador,
      servicos,
      inicio,
      fim,
    });

    const agendamentoNovo = await agendamento.save();
    return res.json(agendamentoNovo);
  }
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

    await agendamento.save();
    res.send("Agendamento cancelado");
  } else {
    res.status(404).json({ message: "Agendamento não encontrado" });
  }
};

export const deletarAgendamento = async (req: Request, res: Response) => {
  await Agendamento.findByIdAndDelete(req.params.id);
  res.json({ message: "Agendamento removido" });
};
