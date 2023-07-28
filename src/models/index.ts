import mongoose from "mongoose";

export const enderecoSchema = new mongoose.Schema({
  cep: {
    type: String,
    max: 8,
    required: true,
  },
  rua: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

export const expedienteSchema = new mongoose.Schema({
    dia: {
        type: Number,
        enum: [0,1,2,3,4,5,6],
        required: true,
    },
    horarioInicio: {
        type: Date,
        required: true,
    },
    horarioFim: {
        type: Date,
        required: true,
    }
});

export const documentoEmpresa = new mongoose.Schema({
    razaoSocial: {
        type: String,
        required: true,
    },
    nomeFantasia: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        max: 14,
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
        required: true,
    },
    dataAbertura: {
        type: Date,
        required: true,
    }
});