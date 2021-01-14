/*
 
Dado um retorno de API, crie funções para as seguintes situações:

- Média de preço do pedido
- Nome do produto mais barato
- Filtro por código do produto
- Busca de produto por nome

*/

const api = {
  numeroPedido: '0001',
  cliente: 'Alvaro',
  items: [
    { produto: '0001', descricao: 'XBOX', preco: 5000 },
    { produto: '0002', descricao: 'PS5', preco: 5500 },
    { produto: '0003', descricao: 'PC', preco: 10000 },
    { produto: '0004', descricao: 'SWITCH', preco: 1000 },
    { produto: '0005', descricao: 'ATARI', preco: 500 },
  ],
};

export const mediaPrecoPedido = () => {
  let media = 0;
  api.items.forEach((item) => {
    media += item.preco;
  });

  console.log(`O preço médio do pedido é de ${media / api.items.length}`);
};

export const nomeProdutoMaisBarato = () => {
  let sorted = api.items.sort((item1, item2) => {
    return item1.preco < item2.preco ? -1 : item1.preco > item2.preco ? 1 : 0;
  });

  console.log(`O produto com menor preço é o ${sorted[0].descricao}`);
};

export const filtroProdutoPorCodigo = (codigo: string) => {
  let filtered = api.items.find((item) => {
    return item.produto == codigo;
  });
  return filtered;
};

export const buscaProdutoPorNome = (nome: string) => {
  let produto = api.items.find((item) => {
    return item.descricao === nome;
  });
  return produto;
};
