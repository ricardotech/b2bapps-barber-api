import mongoose, { Schema, Document, Types } from "mongoose";
import { DadosCPF } from "../utils/types";

interface Avaliacao {
  nota: number;
  comentario: string;
  userId: Types.ObjectId;
}

interface HorarioTrabalho {
  diaSemana: string;
  horarioInicio: string;
  horarioFim: string;
}

interface UsuarioModel extends Document {
  nome: string;
  telefone: string;
  tipo: "admin" | "barbeiro";
  dados: DadosCPF;
  barbearia: Types.ObjectId;
  email?: string;
  avatar?: string;
  avaliacoes?: Avaliacao[];
  especialidades?: string[];
  horarioTrabalho?: HorarioTrabalho[];
}

const usuarioSchema = new Schema<UsuarioModel>({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ["admin", "barbeiro"],
    default: "barbeiro",
  },
  email: {
    type: String,
    unique: true,
  },
  avaliacoes: [
    {
      nota: Number,
      comentario: String,
      userId: Types.ObjectId,
    },
  ],
  especialidades: [String],
  horarioTrabalho: [
    {
      diaSemana: String,
      horarioInicio: String,
      horarioFim: String,
    },
  ],
  avatar: String,
  barbearia: Types.ObjectId,
  dados: {
    documento_tipo: {
      enum: ["CNPJ", "CPF"],
      type: String,
      required: true,
    },
    dados_cnpj: {
      nome_empresarial: String,
      nome_fantasia: String,
      cnpj: String,
      capital_social: Number,
      data_abertura: Date,
      telefone: Number,
      email: String,
    },
    dados_cpf: {
      user: String,
      identidade: {
        type: String,
      },
      cpf: {
        type: String,
        max: 11,
      },
      data_nascimento: Date,
      naturalidade: String,
      filiacao: String,
    },
  },
});

const Usuario = mongoose.model<UsuarioModel>("Usuario", usuarioSchema);

export default Usuario;
