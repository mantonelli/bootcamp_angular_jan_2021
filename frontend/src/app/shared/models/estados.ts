export interface EstadoAPI {
  items: Estados;
  hasNext: boolean;
}

export interface Estado {
  id: string;
  sigla: string;
  nome: string;
}

export type Estados = Array<Estado>;
