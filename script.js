const produtos = [
  {
    id: 1,
    descricao: 'camiseta balmain',
    preco: 50.0,
    tamanho: 'p'
  },
  {
    id: 2,
    descricao: 'camiseta nike',
    preco: 60.0,
    tamanho: 'm'
  },
  {
    id: 3,
    descricao: 'camiseta adidas',
    preco: 80.0,
    tamanho: 'g'
  }
]

const listaProdutos = document.getElementById('listaProdutos')

const carregarProdutos = () => {
  produtos.map(produto => {
    listaProdutos.innerHTML += `

      <div>

        <span>${produto.id}</span>
        <p>${produto.descricao}</p>
        <p>${produto.tamanho}
        <p>${produto.preco}</p>
        <a href="#">COMPRAR</a>

      </div>

    `
  })
}

carregarProdutos()
