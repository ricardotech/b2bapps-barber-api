import { Request, Response } from "express";
import Gestor from "../../../models/gestor";
import Barbearia from "../../../models/barbearia";

interface Prop {
    req: Request;
    res: Response;
}

export async function getAllGestores({ req, res }: Prop) {
    try{
        const gestores = await Gestor.find();
        return res.status(200).json(gestores);
    }catch(error){
        console.error(error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

export async function getGestorById({ req, res }: Prop) {
    try {
        const { id } = req.params;
        const gestor = await Gestor.findById(id);
        if (!gestor) {
            return res.status(404).json({ message: "Gestor não encontrado" });
        }
        return res.status(200).json(gestor);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

export async function getGestorByCpf({ req, res }: Prop) {
    try {
        const { cpf } = req.params;
        const gestor = await Gestor.findOne({ "documento.cpf": cpf });
        if (!gestor) {
            return res.status(404).json({ message: "Gestor não encontrado" });
        }
        return res.status(200).json(gestor);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}

export async function getBarberShopByGestor({req, res}: Prop){
    try {
        const { id } = req.params;

        const gestor = await Gestor.findById(id);

        if (!gestor) {
            return res.status(404).json({ message: "Gestor não encontrado" });
        }

        const barbearia = await Barbearia.find({ _id_gestor: gestor._id });
        return res.status(200).json(barbearia);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro interno do servidor" });
    }
}