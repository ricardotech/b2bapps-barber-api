export enum PlanosEnum {
  Barber = "Barber",
  BarberPlus = "Barber_Plus",
  BarberPro = "Barber_Pro",
}

export enum StatusAgendamentoEnum {
  Confirmado = "Confirmado",
  Cancelado = "Cancelado",
  Realizado = "Realizado",
}

export interface ExpedienteType {
  dia: number;
  horarioInicio: Date;
  horarioFim: Date;
}

export interface EnderecoType {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface ContatoType {
  telefone: string;
  email: string;
  instagram: string | null;
  facebook: string | null;
  whatsapp: string | null;
}

export interface GestorType {
  _id?: string;
  nome: string;
  telefone: string;
  email: string;
  avatar: string | null;
  cpf: string;
  rg: string | null;
  dataNascimento: Date | null;
  naturalidade: string;
  filiacao: string;
  status?: boolean;
}

export interface BarbeariaType {
  _id?: string;
  idGestor: string;
  plano: PlanosEnum;
  nome: string;
  nomeFantasia: string;
  documento: string;
  endereco: EnderecoType;
  logo: string | null;
  slogan: string | null;
  expediente: ExpedienteType[];
  sobre: string;
  contato: ContatoType;
  status?: boolean;
}

export interface ServicoType {
  _id?: string;
  idBarbearia: string;
  nome: string;
  imagem: string | null;
  preco: number;
  duracaoMinutos: number;
  status?: boolean;
}

export interface BarbeiroType {
  _id?: string;
  idBarbearia: string;
  nome: string;
  documento: string;
  avatar: string | null;
  email: string;
  telefone: string;
  servicos: string[];
  expediente: ExpedienteType[];
  status?: boolean;
}

export interface ClienteType {
  _id: string;
  _id_barbearia: string;
  nome: string;
  telefone: string;
  email: string | null;
  avatar: string | null;
}

export interface AgendamentoType {
  _id: string;
  _id_barbearia: string;
  _id_cliente: string;
  _id_barbeiro: string;
  servicos: string[];
  avaliacao: number | null;
  inicio: Date;
  fim: Date;
  status: StatusAgendamentoEnum;
}
