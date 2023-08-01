import mongoose from "mongoose";
import { GestorType } from "../types";

const gestorSchema = new mongoose.Schema<GestorType>({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    max: 11,
    unique: true,
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
  cpf: {
    type: String,
    max: 11,
    unique: true,
    required: true,
  },
  rg: {
    type: String,
    default: null,
  },
  dataNascimento: {
    type: Date,
    default: null,
  },
  naturalidade: {
    type: String,
    required: true,
  },
  filiacao: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Gestor = mongoose.model("Gestor", gestorSchema);

export default Gestor;
