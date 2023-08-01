import { Request, Response } from "express";
import Gestor from "../../../models/gestor";
import { PlanosEnum } from "../../../types";
import Barbearia from "../../../models/barbearia";

export async function createBarberShop(req: Request, res: Response) {
  try {
    const {
      idGestor,
      plano,
      nome,
      nomeFantasia,
      documento,
      endereco,
      logo,
      slogan,
      expediente,
      sobre,
      contato,
    } = req.body;

    if (
      !idGestor ||
      !plano ||
      !nome ||
      !nomeFantasia ||
      !documento ||
      !endereco ||
      !expediente ||
      !sobre ||
      !contato
    ) {
      return res.status(400).json({ mensagem: "Dados insuficientes" });
    }

    const gestor = await Gestor.findById(idGestor);
    if (!gestor) {
      return res.status(404).json({ mensagem: "Gestor não encontrado" });
    }

    if(!gestor.status){
      return res.status(400).json({ mensagem: "Gestor inativo" });
    }

    if (
      plano !== PlanosEnum.Barber &&
      plano !== PlanosEnum.BarberPlus &&
      plano !== PlanosEnum.BarberPro
    ) {
      return res.status(400).json({ mensagem: "Plano inválido" });
    }
    if (documento.length !== 14 && documento.length !== 11) {
      return res.status(400).json({ mensagem: "Documento inválido" });
    }
    if (
      endereco.cep.length !== 8 ||
      isNaN(Number(endereco.cep)) ||
      endereco.rua === "" ||
      endereco.numero === "" ||
      endereco.bairro === "" ||
      endereco.cidade === "" ||
      endereco.estado === ""
    ) {
      return res.status(400).json({ mensagem: "Endereço inválido" });
    }
    if (expediente.length === 0 || expediente.length >= 7) {
      return res.status(400).json({ mensagem: "Expediente inválido" });
    }
    if (!contato.telefone || !contato.email) {
      return res.status(400).json({ mensagem: "Contato inválido" });
    }
    if (contato.telefone.length !== 11 || !Number(contato.telefone)) {
      return res.status(400).json({ mensagem: "Telefone inválido" });
    }
    if (!contato.email.includes("@") || !contato.email.includes(".com")) {
      return res.status(400).json({ mensagem: "Email inválido" });
    }
    if (sobre.length > 500) {
      return res
        .status(400)
        .json({ mensagem: "Sobre deve ter no máximo 500 caracteres" });
    }
    await Barbearia.create({
      idGestor,
      plano,
      nome,
      nomeFantasia,
      documento,
      endereco,
      logo,
      slogan,
      expediente,
      sobre,
      contato,
    }).then(()=>{
      return res.status(201).json({ mensagem: "Barbearia criada com sucesso" });
    }).catch((error) => {
      if (error.code === 11000) {
        console.log(error);
        return res.status(400).json({ mensagem: "Documento já cadastrado" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
