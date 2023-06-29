import mongoose, { Schema, Document, Types } from "mongoose";

interface AgendamentoModel extends Document {
  usuario: Types.ObjectId;
  barbeiro: Types.ObjectId;
  barbearia: Types.ObjectId;
  criador: Types.ObjectId;
  servicos: Types.ObjectId[];
  inicio: Date;
  status: "Confirmado" | "Cancelado" | "Realizado";
  fim: Date;
}

const agendamentoSchema = new Schema<AgendamentoModel>({
  usuario: Types.ObjectId,
  barbeiro: Types.ObjectId,
  barbearia: Types.ObjectId,
  criador: Types.ObjectId,
  servicos: [Types.ObjectId],
  inicio: Date,
  fim: Date,
  status: {
    type: String,
    enum: ["Confirmado", "Cancelado", "Realizado"],
    default: "Confirmado"
  }
});

const Agendamento = mongoose.model<AgendamentoModel>(
  "Agendamento",
  agendamentoSchema
);

export default Agendamento;
