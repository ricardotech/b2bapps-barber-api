import mongoose, {
  Schema,
  Document,
  Types,
  ObjectIdSchemaDefinition,
} from "mongoose";

interface ClienteModel extends Document {
  barbearia: ObjectIdSchemaDefinition;
  nome: string;
  telefone: string;
  email?: string;
  avatar?: string;
}

const clienteSchema = new Schema<ClienteModel>({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  avatar: String,
  barbearia: {
    type: Types.ObjectId,
    required: true,
  },
});

const Cliente = mongoose.model<ClienteModel>("Cliente", clienteSchema);

export default Cliente;
