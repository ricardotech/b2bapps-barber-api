import mongoose, { Types } from "mongoose";
import { expedienteSchema } from ".";

const barbeiroSchema = new mongoose.Schema({
  idBarbearia: {
    type: Types.ObjectId,
    ref: "Barbearia",
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  documento: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    max: 320,
    unique: true,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    max: 11,
    unique: true,
  },
  servicos: [
    {
      type: Types.ObjectId,
      ref: "Servico",
      required: true,
    },
  ],
  expediente: [expedienteSchema],
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Barbeiro = mongoose.model("Barbeiro", barbeiroSchema);

export default Barbeiro;
