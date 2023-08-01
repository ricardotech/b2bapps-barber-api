import { BarbeariaType, GestorType, PlanosEnum } from "../../../types";

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
export const BarbeariaMock: BarbeariaType[] = [
  {
    idGestor: "64c91a20c3f64689c32392d9",
    plano: PlanosEnum.Barber,
    nome: "Barbearia 1 - Teste",
    nomeFantasia: "Barbearia 1",
    documento: "11111111111", // CPF
    endereco: {
      cep: "00000000",
      rua: "Rua Teste",
      numero: "123",
      bairro: "Bairro Teste",
      cidade: "Cidade Teste",
      estado: "SP",
    },
    logo: null,
    slogan: "Slogan da Barbearia 1",
    expediente: [
      {
        dia: 1,
        horarioInicio: new Date("2021-01-01 08:00"),
        horarioFim: new Date("2021-01-01 18:00"),
      },
    ],
    sobre: "Sobre a Barbearia 1",
    contato: {
      telefone: "11999999999",
      email: "barbearia.1@dominio.com.br",
      instagram: null,
      facebook: null,
      whatsapp: null,
    },
  },
  {
    idGestor: "64c91a20c3f64689c32392da",
    plano: PlanosEnum.Barber,
    nome: "Barbearia 2 - Teste",
    nomeFantasia: "Barbearia 2",
    documento: "22222222222", // CPF
    endereco: {
        cep: "00000000",
        rua: "Rua Teste",
        numero: "123",
        bairro: "Bairro Teste",
        cidade: "Cidade Teste",
        estado: "SP",
    },
    logo: null,
    slogan: "Slogan da Barbearia 2",
    expediente: [
        {
            dia: 1,
            horarioInicio: new Date("2021-01-01 08:00"),
            horarioFim: new Date("2021-01-01 18:00"),
        },
        {
            dia: 2,
            horarioInicio: new Date("2021-01-01 08:00"),
            horarioFim: new Date("2021-01-01 18:00"),
        }
    ],
    sobre: "Sobre a Barbearia 2",
    contato: {
        telefone: "12999999999",
        email: "barbearia.2@dominio.com.br",
        instagram: null,
        facebook: null,
        whatsapp: null,
    }
  },
  {
    idGestor: "64c91a20c3f64689c32392da",
    plano: PlanosEnum.BarberPlus,
    nome: "Barbearia 3 - Teste",
    nomeFantasia: "Barbearia 3",
    documento: "33333333333333", // CNPJ
    endereco: {
        cep: "00000000",
        rua: "Rua Teste",
        numero: "123",
        bairro: "Bairro Teste",
        cidade: "Cidade Teste",
        estado: "SP",
    },
    logo: null,
    slogan: "Slogan da Barbearia 3",
    expediente: [
        {
            dia: 1,
            horarioInicio: new Date("2021-01-01 08:00"),
            horarioFim: new Date("2021-01-01 18:00"),
        },
        {
            dia: 2,
            horarioInicio: new Date("2021-01-01 08:00"),
            horarioFim: new Date("2021-01-01 18:00"),
        }
    ],
    sobre: "Sobre a Barbearia 3",
    contato: {
        telefone: "13999999999",
        email: "barbearia.2@dominio.com.br",
        instagram: null,
        facebook: null,
        whatsapp: null,
    }
  },
  {
    idGestor: "64c91a20c3f64689c32392db",
    plano: PlanosEnum.BarberPro,
    nome: "Barbearia 4 - Teste",
    nomeFantasia: "Barbearia 4",
    documento: "44444444444444", // CNPJ,
    endereco: {
        cep: "00000000",
        rua: "Rua Teste",
        numero: "123",
        bairro: "Bairro Teste",
        cidade: "Cidade Teste",
        estado: "SP",
    },
    logo: null,
    slogan: "Slogan da Barbearia 4",
    expediente: [
        {
            dia: 1,
            horarioInicio: new Date("2021-01-01 08:00"),
            horarioFim: new Date("2021-01-01 18:00"),
        },
    ],
    sobre: "Sobre a Barbearia 4",
    contato: {
        telefone: "14999999999",
        email: "barbearia.4@dominio.com.br",
        instagram: null,
        facebook: null,
        whatsapp: null,
    }
  },
];
export const ServicoMock = [];
export const BarbeiroMock = [];
export const ClienteMock = [];
export const AgendamentoMock = [];
