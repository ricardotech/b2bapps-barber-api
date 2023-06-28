import mongoose, { Schema, Document, Types } from "mongoose";

interface AgendamentoModel extends Document {
  user: Types.ObjectId;
  barbeiro: Types.ObjectId;
  barbearia: Types.ObjectId;
  criador: Types.ObjectId;
  servicos: Types.ObjectId[];
  inicio: Date;
  fim: Date;
}

const agendamentoSchema = new Schema<AgendamentoModel>({
  user: Types.ObjectId,
  barbeiro: Types.ObjectId,
  barbearia: Types.ObjectId,
  criador: Types.ObjectId,
  servicos: [Types.ObjectId],
  inicio: Date,
  fim: Date,
});

const Agendamento = mongoose.model<AgendamentoModel>(
  "Agendamento",
  agendamentoSchema
);

export default Agendamento;
