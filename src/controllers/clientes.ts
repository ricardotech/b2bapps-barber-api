import { Request, Response } from "express";
import ClienteModel from "../models/cliente";
import Barbearia from "../models/barbearia";

export const getClientesByBarbearia = async (req: any, res: Response) => {
  const barbearia = req.params.id;

  const Clientes = await ClienteModel.find({
    barbearia: barbearia,
  }).lean();
  res.json(Clientes);
};

export const getCliente = async (req: Request, res: Response) => {
  const Cliente = await ClienteModel.findById(req.params.id).lean();
  res.json(Cliente);
};

export const createCliente = async (req: any, res: Response) => {
  const user = req.userId;

  const { nome, email, telefone, tipo, avatar, barbearia } = req.body;

  const barbearia_e = await Barbearia.findById(barbearia).lean();
  if (!barbearia_e) {
    return res.status(203).send("Não foi possível adicionar o usuário 1");
  }

  // if (tipo !== "cliente") {
  //   if (barbearia_e.criador !== user) {
  //     return res.status(203).send("Não foi possível adicionar o usuário 2");
  //   }
  // }

  const cliente = new ClienteModel({
    nome,
    email,
    telefone,
    tipo,
    avatar,
    barbearia,
  });

  const ClienteNovo = await cliente.save();
  res.json(ClienteNovo);
};

export const updateCliente = async (req: Request, res: Response) => {
  const cliente = await ClienteModel.findById(req.params.id);

  if (cliente) {
    cliente.nome = req.body.nome ?? cliente.nome;
    cliente.email = req.body.email ?? cliente.email;
    cliente.telefone = req.body.telefone ?? cliente.telefone;
    cliente.avatar = req.body.avatar ?? cliente.avatar;

    const ClienteAtualizado = await cliente.save();
    res.json(ClienteAtualizado);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
};

export const deletarCliente = async (req: Request, res: Response) => {
  await ClienteModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuário removido" });
};
