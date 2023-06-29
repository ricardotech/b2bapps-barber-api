import { Request, Response } from "express";
import Barbeiro from "../models/barbeiro";

export const getBarbeiros = async (req: Request, res: Response) => {
  const barbeiros = await Barbeiro.find().populate("barbearia").lean();
  res.json(barbeiros);
};

export const getBarbeiro = async (req: Request, res: Response) => {
  const barbeiro = await Barbeiro.findById(req.params.id).populate("barbearia");
  res.json(barbeiro);
};

export const createBarbeiro = async ({ body }: Request, res: Response) => {
  const {
    nome,
    email,
    telefone,
    avatar,
    especialidades,
    horarioTrabalho,
    avaliacoes,
    barbearia,
  } = body;

  const barbeiro = new Barbeiro({
    nome,
    email,
    telefone,
    avatar,
    especialidades,
    horarioTrabalho,
    avaliacoes,
    barbearia,
  });

  const barbeiroNovo = await barbeiro.save();
  res.json(barbeiroNovo);
};

export const updateBarbeiro = async (req: Request, res: Response) => {
  const barbeiro = await Barbeiro.findById(req.params.id);

  if (barbeiro) {
    barbeiro.nome = req.body.nome ?? barbeiro.nome;
    barbeiro.email = req.body.email ?? barbeiro.email;
    barbeiro.telefone = req.body.telefone ?? barbeiro.telefone;
    barbeiro.avatar = req.body.avatar ?? barbeiro.avatar;
    barbeiro.especialidades =
      req.body.especialidades ?? barbeiro.especialidades;
    barbeiro.horarioTrabalho =
      req.body.horarioTrabalho ?? barbeiro.horarioTrabalho;

    const barbeiroAtualizado = await barbeiro.save();
    res.json(barbeiroAtualizado);
  } else {
    res.status(404).json({ message: "Barbeiro não encontrado" });
  }
};

export const deleteBarbeiro = async (req: Request, res: Response) => {
  await Barbeiro.findByIdAndDelete(req.params.id);
  res.json({ message: "Barbeiro removido" });
};

export const getBarbeirosByBarbearia = async (req: Request, res: Response) => {
  const barbeiros = await Barbeiro.find({
    barbearia: req.params.id,
  }).populate("barbearia");
  res.json(barbeiros);
};
