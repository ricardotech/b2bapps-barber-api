import { Request, Response } from "express";
import Barbearia from "../../../models/barbearia";
import {
  ContatoType,
  DocumentoEmpresaType,
  EnderecoType,
  ExpedienteType,
  GestorType,
  PlanosEnum,
} from "../../../types";
import Gestor from "../../../models/gestor";

interface BarbeariaResponse {
  _id: string;
  gestor: {
    _id: string;
    nome: string;
    telefone: string;
    email: string;
  };
  plano: string;
  nome: string;
  endereco: EnderecoType;
  logo: string | null;
  slogan: string | null;
  expediente: ExpedienteType[];
  documento: DocumentoEmpresaType | null;
  sobre: string;
  contato: ContatoType;
  status: boolean;
}

export async function getAllBarberShop(req: Request, res: Response) {
  try {
    await Barbearia.find().then((barbearias) => {
      return res.status(200).json(barbearias);
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
