import { ObjectIdSchemaDefinition } from "mongoose";

export interface DadosCPF {
  user: ObjectIdSchemaDefinition;
  identidade?: string;
  cpf?: string;
  data_nascimento?: Date;
  naturalidade?: string;
  filiacao?: string;
}
