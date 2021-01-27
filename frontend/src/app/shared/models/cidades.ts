export interface CidadesAPI {
  items: Cidades;
  hasNext: boolean;
}

export interface Cidade {
  id: string;
  nome: string;
  estado: string;
}

export type Cidades = Array<Cidade>;
