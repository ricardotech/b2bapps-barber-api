import mongoose from "mongoose";

export const contatoSchema = new mongoose.Schema({
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
  whatsapp: {
    type: String,
    max: 11,
    default: null,
  },
  facebook: {
    type: String,
    default: null,
  },
  instagram: {
    type: String,
    default: null,
  },
});

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
    enum: [0, 1, 2, 3, 4, 5, 6],
    required: true,
  },
  horarioInicio: {
    type: Date,
    required: true,
  },
  horarioFim: {
    type: Date,
    required: true,
  },
});

export const documentoEmpresaSchema = new mongoose.Schema({
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
    required: true,
  },
  dataAbertura: {
    type: Date,
    required: true,
  },
});

export const documentoPessoaSchema = new mongoose.Schema({
  cpf: {
    type: String,
    max: 11,
    unique: true,
    required: true,
  },
  rg: {
    type: String,
    unique: true,
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
});
