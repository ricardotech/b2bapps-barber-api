import mongoose, { Types } from "mongoose";
import { PlanosEnum } from "../types";
import { documentoEmpresa, enderecoSchema, expedienteSchema } from ".";

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
  endereco: {
    type: enderecoSchema,
    required: true,
  },
  logo: {
    type: String,
    allowNull: true,
    default: null,
  },
  slogan: {
    type: String,
    allowNull: true,
    default: null,
  },
  expediente: {
    type: [expedienteSchema],
    required: true,
  },
  documento: {
    type: documentoEmpresa,
    allowNull: true,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  }
});

const Barbearia = mongoose.model("Barbearia", barbeariaSchema);

export default Barbearia;