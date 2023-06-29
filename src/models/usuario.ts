import mongoose, { Schema, Document, Types } from "mongoose";

interface UsuarioModel extends Document {
  nome: string;
  email: string;
  telefone: number;
  tipo: "cliente" | "colaborador";
  avatar?: string;
  barbearia?: Types.ObjectId;
}

const usuarioSchema = new Schema<UsuarioModel>({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
  tipo: {
    type: String,
    enum: ["cliente", "colaborador"],
  },
  avatar: String,
  barbearia: Types.ObjectId,
});

const Usuario = mongoose.model<UsuarioModel>("Usuario", usuarioSchema);

export default Usuario;
