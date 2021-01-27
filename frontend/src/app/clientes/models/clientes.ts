export interface ClientesAPI {
  items: Clientes;
  hasNext: boolean;
}

export interface Cliente {
  id: string;
  nome: string;
  cidade: string;
  estado: string;
  dataNascimento: Date;
  endereco: string;
  sexo: string;
}

export type Clientes = Array<Cliente>;
