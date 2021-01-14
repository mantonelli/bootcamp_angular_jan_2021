import {
  buscaProdutoPorNome,
  filtroProdutoPorCodigo,
  mediaPrecoPedido,
  nomeProdutoMaisBarato,
} from './exercicio';

mediaPrecoPedido();
nomeProdutoMaisBarato();

let arr1 = filtroProdutoPorCodigo('0002');
console.dir(arr1);

let item1 = buscaProdutoPorNome('PC');
console.dir(item1);

let item2 = buscaProdutoPorNome('ATARI');
console.dir(item2);
