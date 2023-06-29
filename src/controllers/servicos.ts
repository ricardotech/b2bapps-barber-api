import { Request, Response } from "express";
import Servico from "../models/servico";
import Workspace from "../models/workspace";

export const getServicosByBarbearia = async (req: Request, res: Response) => {
  const servicos = await Servico.find({
    barbearia: req.params.id,
  }).populate("barbearia");
  res.json(servicos);
};

export const getServico = async (req: Request, res: Response) => {
  const servico = await Servico.findById(req.params.id).populate("barbearia");
  res.json(servico);
};

export const createServico = async (req: any, res: Response) => {
  // const barbearia = req.workspaceId;
  // const user = req.userId;

  // const workspace = await Workspace.findById(barbearia).lean();

  // if (!workspace || workspace.criador !== user) {
  //   return res.status(403).send("Falha ao criar serviço.");
  // }

  const { nome, descricao, imagens, preco, duracao_minutos, barbearia } = req.body;

  const servico = new Servico({
    nome,
    barbearia,
    descricao,
    imagens,
    preco,
    duracao_minutos,
  });

  const servicoNovo = await servico.save();
  res.json(servicoNovo);
};

export const updateServico = async (req: Request, res: Response) => {
  const servico = await Servico.findById(req.params.id);

  if (servico) {
    servico.nome = req.body.nome ?? servico.nome;
    servico.descricao = req.body.descricao ?? servico.descricao;
    servico.imagens = req.body.imagens ?? servico.imagens;
    servico.preco = req.body.preco ?? servico.preco;
    servico.duracao_minutos =
      req.body.especialidades ?? servico.duracao_minutos;

    const servicoAtualizado = await servico.save();
    res.json(servicoAtualizado);
  } else {
    res.status(404).json({ message: "Serviço não encontrado" });
  }
};

export const deleteServico = async (req: Request, res: Response) => {
  await Servico.findByIdAndDelete(req.params.id);
  res.json({ message: "Serviço removido" });
};
