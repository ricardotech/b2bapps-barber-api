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

export enum TipoUsuarioEnum {
    Gestor = "gestor",
    Barbeario = "barbeiro",
}

export interface ExpedienteType {
  diaSemana: number; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  horarioInicio: Date; // Date com apenas hora e minuto
  horarioFim: Date; // Date com apenas hora e minuto
}

export interface EnderecoType {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento: string;
}

export interface DocumentoEmpresaType {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  telefone: string;
  email: string;
  dataAbertura: Date;
}

export interface DocumentoPessoaType {
  cpf: string;
  rg: string | null;
  dataNascimento: Date | null;
  naturalidade: string;
  filiacao: string;
}

export interface GestorType {
  _id: string;
  nome: string;
  telefone: string;
  email: string;
  avatar: string | null;
  documento: DocumentoPessoaType;
  status: boolean;
}

export interface BarbeariaType {
  _id: string;
  _id_gestor: string;
  plano: PlanosEnum;
  nome: string;
  endereco: EnderecoType;
  logo: string | null;
  slogan: string | null;
  expediente: ExpedienteType[];
  documento: DocumentoEmpresaType | null;
  status: boolean;
}

export interface ServicoType {
  _id: string;
  _id_barbearia: string;
  nome: string;
  preco: number;
  imagem: string | null;
  duracao_minutos: number;
}

export interface BarbeiroType {
  _id: string;
  _id_barbearia: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string | null;
  expediente: ExpedienteType[];
  avaliacoes: number[];
  avatar: string | null;
  servicos: string[];
}

export interface UsuarioType {
    tipo: TipoUsuarioEnum;
    cpf: string;
    password: string;
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