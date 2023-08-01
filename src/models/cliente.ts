import mongoose, { Types } from "mongoose";

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    unique: true,
    max: 11,
    required: true,
  },
  email: {
    type: String,
    max: 320,
    default: null,
  },
  avatar: {
    type: String,
    default: null
  },
  barbearia: {
    type: Types.ObjectId,
    ref: "Barbearia",
    required: true,
  },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

export default Cliente;
