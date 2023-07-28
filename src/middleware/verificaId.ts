import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";

export default function verificaId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({ mensagem: "Id inválido" });
    }
    next();
}