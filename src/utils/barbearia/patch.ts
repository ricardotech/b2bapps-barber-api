import { Request, Response } from "express";
import Barbearia from "../../models/barbearia";

export async function updateStatusBarberShop(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const barbearia = await Barbearia.findById(id);
    if (!barbearia) {
      return res.status(404).json({ mensagem: "Barbearia não encontrada" });
    }
    const status = !barbearia.status;
    await Barbearia.findByIdAndUpdate(id, { status });
    return res
      .status(200)
      .json({ mensagem: "Status da barbearia atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

export async function updateNameBarberShop(req: Request, res: Response) {}
export async function updateLogoBarberShop(req: Request, res: Response) {}
export async function updateSloganBarberShop(req: Request, res: Response) {}
export async function updateContactBarberShop(req: Request, res: Response) {}
export async function updateAddressBarberShop(req: Request, res: Response) {}
export async function updatePlanBarberShop(req: Request, res: Response) {}
export async function updateBarbershopOpeningHours(req: Request, res: Response) {}