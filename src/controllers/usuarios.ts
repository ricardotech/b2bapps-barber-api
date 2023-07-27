import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await UsuarioModel.find().populate("barbearia").lean();
  res.json(usuarios);
};

export const getUsuario = async (req: Request, res: Response) => {
  const usuario = await UsuarioModel.findById(req.params.id).populate(
    "barbearia"
  );
  res.json(usuario);
};

export const createUsuario = async ({ body }: Request, res: Response) => {
  const {
    nome,
    email,
    telefone,
    avatar,
    cpf,
    especialidades,
    horarioTrabalho,
    avaliacoes,
    barbearia,
  } = body;

  const emailExists = await UsuarioModel.findOne({
    email,
  }).lean();

  if (emailExists) {
    return res.status(203).json({ error: "Email já cadastrado" });
  }

  const cpfExists = await UsuarioModel.findOne({
    cpf,
  }).lean();

  if (cpfExists) {
    return res.status(203).json({ error: "CPF já cadastrado" });
  }

  const telefoneExists = await UsuarioModel.findOne({
    telefone,
  }).lean();

  if (telefoneExists) {
    return res.status(203).json({ error: "Telefone já cadastrado" });
  }

  const usuario = new UsuarioModel({
    nome,
    email,
    telefone,
    avatar,
    cpf,
    especialidades,
    horarioTrabalho,
    avaliacoes,
    barbearia,
  });

  const UsuarioNovo = await usuario.save();
  res.json(UsuarioNovo);
};

export const updateUsuario = async (req: Request, res: Response) => {
  const usuario = await UsuarioModel.findById(req.params.id);

  if (usuario) {
    usuario.nome = req.body.nome ?? usuario.nome;
    usuario.email = req.body.email ?? usuario.email;
    usuario.telefone = req.body.telefone ?? usuario.telefone;
    usuario.avatar = req.body.avatar ?? usuario.avatar;
    usuario.especialidades = req.body.especialidades ?? usuario.especialidades;
    usuario.horarioTrabalho =
      req.body.horarioTrabalho ?? usuario.horarioTrabalho;

    const usuarioAtualizado = await usuario.save();
    res.json(usuarioAtualizado);
  } else {
    res.status(404).json({ message: "Usuario não encontrado" });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  await UsuarioModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuario removido" });
};

export const getUsuariosByBarbearia = async (req: Request, res: Response) => {
  const Usuarios = await UsuarioModel.find({
    barbearia: req.params.id,
  }).populate("barbearia");
  res.json(Usuarios);
};
