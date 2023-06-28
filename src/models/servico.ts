import mongoose, { Schema, Document, Types } from "mongoose";

interface ServicoModel extends Document {
  nome: string;
  descricao?: string;
  imagens?: string[];
  barbearia: Types.ObjectId;
  preco: number;
  duracao_minutos: number;
}

const servicoSchema = new Schema<ServicoModel>({
  nome: {
    type: String,
    required: true,
  },
  descricao: String,
  imagens: [String],
  barbearia: Types.ObjectId,
  preco: Number,
  duracao_minutos: Number,
});

const Servico = mongoose.model<ServicoModel>("Servico", servicoSchema);

export default Servico;
