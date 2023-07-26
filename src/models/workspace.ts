import mongoose, { Schema, Document, Types } from "mongoose";

interface Endereco {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento?: string;
}

interface DadosCNPJ {
  nome_empresarial: string;
  nome_fantasia: string;
  cnpj: string;
  capital_social?: number;
  data_abertura?: Date;
  telefone: string;
  email: string;
}

interface DadosCPF {
  user: Types.ObjectId;
  identidade?: number;
  cpf?: number;
  data_nascimento?: Date;
  naturalidade?: string;
  filiacao?: string;
}

interface Dados {
  documento_tipo: "CNPJ" | "CPF";
  dados_cnpj?: DadosCNPJ;
  dados_cpf?: DadosCPF;
  /*
  Utilizado para armazenar o horário de abertura e fechamento do estabelecimento.
  Irá armazenar apenas o horário, a data será ignorada.
  Irá definir a faixa de renderização dos horários disponíveis para agendamento.
  */
  horario_abertura: Date;
  horario_fechamento: Date;
}

interface Avaliacao {
  nota: number;
  comentario: string;
  userId: Types.ObjectId;
}

interface WorkspaceModel extends Document {
  nome: string;
  criador: Types.ObjectId;
  endereco: Endereco;
  avaliacoes: Avaliacao[];
  logo_uri?: string;
  imagens_uri?: string[];
  slogan?: string;
  dados: Dados;
}

const workspaceSchema = new Schema<WorkspaceModel>({
  nome: {
    type: String,
    required: true,
  },
  criador: Types.ObjectId,
  endereco: {
    cep: String,
    rua: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    complemento: String,
  },
  avaliacoes: [
    {
      nota: Number,
      comentario: String,
      userId: Types.ObjectId,
    },
  ],
  logo_uri: String,
  imagens_uri: [String],
  slogan: String,
  dados: {
    documento_tipo: {
      enum: ["CNPJ", "CPF"],
      type: String,
      required: true,
    },
    dados_cnpj: {
      nome_empresarial: String,
      nome_fantasia: String,
      cnpj: String,
      capital_social: Number,
      data_abertura: Date,
      telefone: String,
      email: String,
    },
    dados_cpf: {
      user: Types.ObjectId,
      identidade: Number,
      cpf: Number,
      data_nascimento: Date,
      naturalidade: String,
      filiacao: String,
    },
  },
});

const Workspace = mongoose.model<WorkspaceModel>("Workspace", workspaceSchema);

export default Workspace;
