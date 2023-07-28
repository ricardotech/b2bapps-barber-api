import { NextFunction, Request, Response } from "express";


export default function Autenticacao(request: Request, response: Response, next: NextFunction) {
    next();
}
