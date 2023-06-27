import mongoose, { Schema, Document, Types } from "mongoose";

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

interface BarbeiroModel extends Document {
  nome: string;
  email: string;
  telefone: string;
  avatar?: string;
  especialidades: string[];
  horarioTrabalho: HorarioTrabalho[];
  avaliacoes: Avaliacao[];
  barbearia: Types.ObjectId;
}

const barbeiroSchema = new Schema<BarbeiroModel>({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  avatar: String,
  especialidades: [String],
  horarioTrabalho: [
    {
      diaSemana: String,
      horarioInicio: String,
      horarioFim: String,
    },
  ],
  avaliacoes: [
    {
      nota: Number,
      comentario: String,
      userId: Schema.Types.ObjectId,
    },
  ],
  barbearia: {
    type: Schema.Types.ObjectId,
    ref: "Barbearia",
  },
});

const Barbeiro = mongoose.model<BarbeiroModel>("Barbeiro", barbeiroSchema);

export default Barbeiro;
