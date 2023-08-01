import mongoose, { Types } from "mongoose";

const servicoSchema = new mongoose.Schema({
  idBarbearia: {
    type: Types.ObjectId,
    ref: "Barbearia",
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    default: null,
  },
  preco: {
    type: Number,
    required: true,
  },
  duracaoMinutos: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Servico = mongoose.model("Servico", servicoSchema);

export default Servico;
