import { Request, Response } from "express";
import { BarbeariaType, PlanosEnum } from "../../types";
import Gestor from "../../models/gestor";
import Barbearia from "../../models/barbearia";

export async function createBarberShop(req: Request, res: Response) {
  try {
    const body: BarbeariaType = req.body;
    const {
      _id_gestor,
      plano,
      nome,
      endereco,
      logo,
      slogan,
      expediente,
      documento,
      sobre,
      contato,
    } = body;

    if (
      !_id_gestor ||
      !plano ||
      !nome ||
      !endereco ||
      !expediente ||
      !sobre ||
      !contato
    ) {
      return res
        .status(400)
        .json({ mensagem: "Dados obrigatórios não informados" });
    }

    const gestor = await Gestor.findById(_id_gestor);
    if (!gestor) {
      return res.status(400).json({ mensagem: "Gestor não encontrado" });
    }
    if (gestor.status === false) {
      return res.status(400).json({ mensagem: "Gestor inativo" });
    }
    if (
      plano !== PlanosEnum.Barber &&
      plano !== PlanosEnum.BarberPlus &&
      plano !== PlanosEnum.BarberPro
    ) {
      return res.status(400).json({ mensagem: "Plano inválido" });
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
    if (sobre.length > 500) {
      return res.status(400).json({ mensagem: "Sobre inválido" });
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
    await Barbearia.create({
      _id_gestor,
      plano,
      nome,
      endereco,
      logo,
      slogan,
      expediente,
      documento,
      sobre,
      contato,
    })
      .then((barbearia) => {
        return res
          .status(201)
          .json({ mensagem: `Barbearia ${barbearia.nome} criada com sucesso` });
      })
      .catch((error) => {
        console.log(error);
        return res
          .status(500)
          .json({ mensagem: `Erro ao cadastrar a barbearia` });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}
