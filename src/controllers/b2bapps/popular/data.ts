import { GestorType } from "../../../types";

export const GestorMock: GestorType[] = [
  {
    nome: "Gestor 1",
    telefone: "11999999999",
    email: "gestor.teste.1@dominio.com.br",
    avatar: null,
    cpf: "11111111111",
    rg: null,
    dataNascimento: new Date("1990-01-01"),
    naturalidade: "São Paulo",
    filiacao: "Mãe do Gestor 1",
  },
  {
    nome: "Gestor 2",
    telefone: "12999999999",
    email: "gestor.teste.2@dominio.com.br",
    avatar: null,
    cpf: "22222222222",
    rg: "68523168 - SPLFs",
    dataNascimento: new Date("1990-01-02"),
    naturalidade: "Rio de Janeiro",
    filiacao: "Mãe do Gestor 2",
  },
  {
    nome: "Gestor 3",
    telefone: "13999999999",
    email: "gestor.teste.3@dominio.com.br",
    avatar: null,
    cpf: "33333333333",
    rg: "123456789",
    dataNascimento: null,
    naturalidade: "Salvador",
    filiacao: "Mãe do Gestor 3",
  },
];
export const BarbeariaMock = [];
export const ServicoMock = [];
export const BarbeiroMock = [];
export const ClienteMock = [];
export const AgendamentoMock = [];
