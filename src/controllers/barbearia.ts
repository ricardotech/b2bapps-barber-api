import { Request, Response } from "express";
import Barbearia from "../models/barbearia";

export const getBarbearias = async (req: Request, res: Response) => {
  const barbearias = await Barbearia.find().lean();
  res.json(barbearias);
};

export const getBarbearia = async (req: Request, res: Response) => {
  const barbearia = await Barbearia.findById(req.params.id).lean();
  res.json(barbearia);
};

export const createBarbearia = async ({ body }: Request, res: Response) => {
  const {
    nome,
    criador,
    endereco,
    avaliacoes,
    logo_uri,
    imagens_uri,
    slogan,
    dados
  } = body;

  const barbearia = new Barbearia({
    nome,
    criador,
    endereco,
    avaliacoes,
    logo_uri,
    imagens_uri,
    slogan,
    dados
  });

  const barbeariaNovo = await barbearia.save();
  res.json(barbeariaNovo);
};

export const updateBarbearia = async (req: Request, res: Response) => {
  const barbearia = await Barbearia.findById(req.params.id);

  if (barbearia) {
    barbearia.nome = req.body.nome ?? barbearia.nome;
    barbearia.endereco = req.body.endereco ?? barbearia.endereco;
    barbearia.logo_uri = req.body.logo_uri ?? barbearia.logo_uri;
    barbearia.imagens_uri = req.body.imagens_uri ?? barbearia.imagens_uri;
    barbearia.slogan = req.body.slogan ?? barbearia.slogan;
    barbearia.dados = req.body.dados ?? barbearia.dados;

    const barbeariaAtualizado = await barbearia.save();
    res.json(barbeariaAtualizado);
  } else {
    res.status(404).json({ message: "Barbearia não encontrada" });
  }
};

export const deleteBarbearia = async (req: Request, res: Response) => {
  await Barbearia.findByIdAndDelete(req.params.id);
  res.json({ message: "Barbearia removido" });
};
