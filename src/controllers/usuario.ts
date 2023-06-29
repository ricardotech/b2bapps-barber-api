import { Request, Response } from "express";
import agendamento from "../models/agendamento";
import Agendamento from "../models/agendamento";
import Usuario from "../models/usuario";
import Barbearia from "../models/barbearia";

export const getUsuariosByBarbearia = async (req: any, res: Response) => {
  const barbearia = req.params.id;

  const usuarios = await Usuario.find({
    barbearia: barbearia,
  }).lean();
  res.json(usuarios);
};

export const getUsuario = async (req: Request, res: Response) => {
  const usuario = await Usuario.findById(req.params.id).lean();
  res.json(usuario);
};

export const createUsuario = async (req: any, res: Response) => {
  const user = req.userId;

  const { nome, email, telefone, tipo, avatar, barbearia } = req.body;

  const barbearia_e = await Barbearia.findById(barbearia).lean();
  if (!barbearia_e) {
    return res.status(403).send("Não foi possível adicionar o usuário");
  }

  if (tipo !== "cliente") {
    if (barbearia_e.criador !== user) {
      return res.status(403).send("Não foi possível adicionar o usuário");
    }
  }

  const usuario = new Usuario({
    nome,
    email,
    telefone,
    tipo,
    avatar,
    barbearia,
  });

  const usuarioNovo = await usuario.save();
  res.json(usuarioNovo);
};

export const updateUsuario = async (req: Request, res: Response) => {
  const usuario = await Usuario.findById(req.params.id);

  if (usuario) {
    usuario.nome = req.body.nome ?? usuario.nome;
    usuario.email = req.body.email ?? usuario.email;
    usuario.telefone = req.body.telefone ?? usuario.telefone;
    usuario.avatar = req.body.avatar ?? usuario.avatar;

    const usuarioAtualizado = await usuario.save();
    res.json(usuarioAtualizado);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
};

export const deletarUsuario = async (req: Request, res: Response) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuário removido" });
};