import { Request, Response } from "express";
import Barbearia from "../../../models/barbearia";
import MensagemErro from "../../../utils/mensagemErro";

export async function updateStatusBarberShop(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const barbearia = await Barbearia.findById(id);
    if (!barbearia) {
      return MensagemErro(
        res,
        404,
        "404",
        "Não foi possível encontrar a barbearia com o id informado",
        { modulo: "B2B - Barbearia", campo: ["id"] },
        "Aviso"
      );
    }
    const status = !barbearia.status;
    await Barbearia.findByIdAndUpdate(id, { status })
      .then(() => {
        return res
          .status(200)
          .json({ mensagem: "Status da barbearia atualizado com sucesso" });
      })
      .catch((err) => {
        return MensagemErro(
          res,
          500,
          err.code,
          err.message,
          {
            modulo: "B2B - Barbearia",
            campo: ["id"],
            descricao: "Tentativa de atualizar status da barbearia",
          },
          "Erro"
        );
      });
  } catch (error) {
    console.error(error);
    return MensagemErro(
      res,
      500,
      "500",
      "Erro interno do servidor",
      {
        modulo: "B2B - Barbearia",
        campo: ["id"],
        descricao: "Tentativa de atualizar status da barbearia",
      },
      "Erro"
    );
  }
}

export async function updateNameBarberShop(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { nome, nomeFantasia } = req.body;

    const barbearia = await Barbearia.findById(id);
    if (!barbearia) {
      return MensagemErro(
        res,
        404,
        "404",
        "Não foi possível encontrar a barbearia com o id informado",
        { modulo: "B2B - Barbearia", campo: ["id"] },
        "Aviso"
      );
    }
    if (!nome || !nomeFantasia) {
      return MensagemErro(
        res,
        400,
        "400",
        "Verifique se os campos foram preenchidos corretamente",
        { modulo: "B2B - Barbearia", campo: ["nome", "nomeFantasia"] },
        "Aviso"
      );
    }
    await Barbearia.findByIdAndUpdate(id, { nome, nomeFantasia })
      .then(() => {
        return res
          .status(200)
          .json({ mensagem: "Nomes da barbearia atualizado com sucesso" });
      })
      .catch((err) => {
        return MensagemErro(
          res,
          500,
          err.code,
          err.message,
          {
            modulo: "B2B - Barbearia",
            campo: ["id", "nome", "nomeFantasia"],
            descricao: "Tentativa de atualizar nome da barbearia",
          },
          "Erro"
        );
      });
  } catch (error) {
    console.error(error);
    return MensagemErro(
      res,
      500,
      "500",
      "Erro interno do servidor",
      {
        modulo: "B2B - Barbearia",
        campo: ["id", "nome", "nomeFantasia"],
        descricao: "Tentativa de atualizar os nomes da barbearia",
      },
      "Erro"
    );
  }
}
export async function updateLogoBarberShop(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { logo } = req.body;
    const barbearia = await Barbearia.findById(id);
    if (!barbearia) {
      return MensagemErro(
        res,
        404,
        "404",
        "Não foi possível encontrar a barbearia com o id informado",
        { modulo: "B2B - Barbearia", campo: ["id"] },
        "Aviso"
      );
    }
    if (!logo) {
      return MensagemErro(
        res,
        400,
        "400",
        "Verifique se os campos foram preenchidos corretamente",
        { modulo: "B2B - Barbearia", campo: ["logo"] },
        "Aviso"
      );
    }
    await Barbearia.findByIdAndUpdate(id, { logo })
      .then(() => {
        return res
          .status(200)
          .json({ mensagem: "Logo da barbearia atualizado com sucesso" });
      })
      .catch((err) => {
        return MensagemErro(
          res,
          500,
          err.code,
          err.message,
          {
            modulo: "B2B - Barbearia",
            campo: ["id", "logo"],
            descricao: "Tentativa de atualizar logo da barbearia",
          },
          "Erro"
        );
      });
  } catch (error) {
    console.error(error);
    return MensagemErro(
      res,
      500,
      "500",
      "Erro interno do servidor",
      {
        modulo: "B2B - Barbearia",
        campo: ["id", "logo"],
        descricao: "Tentativa de atualizar logo da barbearia",
      },
      "Erro"
    );
  }
}
export async function updateSloganBarberShop(req: Request, res: Response) {}
export async function updateContactBarberShop(req: Request, res: Response) {}
export async function updateAddressBarberShop(req: Request, res: Response) {}
export async function updatePlanBarberShop(req: Request, res: Response) {}
export async function updateBarbershopOpeningHours(
  req: Request,
  res: Response
) {}
