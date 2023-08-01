import mongoose, { Types } from "mongoose";
import { StatusAgendamentoEnum } from "../types";

const agendamentoSchema = new mongoose.Schema({
  idBarbearia: {
    type: Types.ObjectId,
    ref: "Barbearia",
    required: true
  },
  idCliente: {
    type: Types.ObjectId,
    ref: "Cliente",
    required: true
  },
  idBarbeiro: {
    type: Types.ObjectId,
    ref: "Barbeiro",
    required: true
  },
  servicos: [{
    type: Types.ObjectId,
    ref: "Servico",
    required: true
  }],
  avaliacao: {
    type: Number,
    default: null
  },
  inicio: {
    type: Date,
    required: true
  },
  fim: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: StatusAgendamentoEnum,
    default: StatusAgendamentoEnum.Confirmado,
    required: true
  }
});

const Agendamento = mongoose.model("Agendamento", agendamentoSchema);

export default Agendamento;