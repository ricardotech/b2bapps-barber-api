import { NextFunction, Request, Response } from "express";

interface Prop {
  req: Request;
  res: Response;
  next: NextFunction;
}

export default function Autenticacao({ req, res, next }: Prop) {
    next();
}
