import mongoose, { Schema, Document, Types } from "mongoose";

interface ServicoModel extends Document {
  nome: string;
  descricao?: string;
  imagens?: string[];
  barbearia: Types.ObjectId;
  preco: number;
  duracao_minutos: number;
  /*
  Quantidade de minutos necessários para realizar a manutenção do serviço.
  Caso o tempo de execução do serviço seja maior que 30 minutos o valor do buffer terá como padrão 0 minutos,
  caso contrário o valor do buffer será a diferença entre 30 minutos e o tempo de execução do serviço.
  Possui como objetivo fornecer um tempo de folga para o barbeiro entre um serviço e outro.
  O buffer poderá ser utilizado para realocar um agendamento, essa realocação poderá ser feita apenas pelo barbeiro.
  */
  buffer?: number;
}

const servicoSchema = new Schema<ServicoModel>({
  nome: {
    type: String,
    required: true,
  },
  descricao: String,
  imagens: [String],
  barbearia: Types.ObjectId,
  preco: Number,
  duracao_minutos: Number,
});

const Servico = mongoose.model<ServicoModel>("Servico", servicoSchema);

export default Servico;
