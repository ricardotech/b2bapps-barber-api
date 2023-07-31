import mongoose, { Types } from "mongoose";
import { PlanosEnum } from "../types";
import {
  contatoSchema,
  enderecoSchema,
  expedienteSchema,
} from ".";

const barbeariaSchema = new mongoose.Schema({
  _id_gestor: {
    type: Types.ObjectId,
    required: true,
  },
  plano: {
    type: String,
    enum: PlanosEnum,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  nomeFantasia: {
    type: String,
    required: true,
  },
  documento: {
    type: String,
    unique: true,
    required: true,
  },
  endereco: {
    type: enderecoSchema,
    required: true,
  },
  logo: {
    type: String,
    default: null,
  },
  slogan: {
    type: String,
    default: null,
  },
  expediente: {
    type: [expedienteSchema],
    required: true,
  },
  sobre: {
    type: String,
    max: 500,
    required: true,
  },
  contato: {
    type: contatoSchema,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Barbearia = mongoose.model("Barbearia", barbeariaSchema);

export default Barbearia;
