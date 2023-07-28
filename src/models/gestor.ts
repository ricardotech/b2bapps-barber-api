import mongoose from "mongoose";

const gestorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    max: 11,
    unique: true,
    required: true,
  },
  telefone: {
    type: String,
    max: 11,
    required: true,
  },
  email: {
    type: String,
    max: 320,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
    allowNull: true,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  }
});

const Gestor = mongoose.model("Gestor", gestorSchema);

export default Gestor;
