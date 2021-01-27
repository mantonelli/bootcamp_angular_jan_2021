import {
  buscaProdutoPorNome,
  filtroProdutoPorCodigo,
  mediaPrecoPedido,
  nomeProdutoMaisBarato,
} from './exercicio';

mediaPrecoPedido();
nomeProdutoMaisBarato();

let item1 = filtroProdutoPorCodigo('0002');
console.dir(item1);

let item4 = buscaProdutoPorNome('ATARI');
console.dir(item4);
