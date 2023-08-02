import { Response } from "express";

export default function MensagemErro(
  res: Response,
  httpStatus: number,
  codigo: string,
  mensagem: string,
  contexto: {
    modulo: string;
    campo: string[];
    descricao?: string;
  },
  severidade: "Erro" | "Aviso" | "Informação"
) {
  return res.status(httpStatus).json({
    codigo,
    mensagem,
    contexto: {
      modulo: contexto.modulo,
      campo: contexto.campo.join(", "),
      descricao: contexto.descricao,
    },
    severidade,
  });
}
