const produtos = [
  {
    id: 0,
    descricao: 'camiseta balmain',
    preco: 50.0,
    tamanho: 'p',
    quantidade: 0
  },
  {
    id: 1,
    descricao: 'camiseta nike',
    preco: 60.0,
    tamanho: 'm',
    quantidade: 0
  },
  {
    id: 2,
    descricao: 'camiseta adidas',
    preco: 80.0,
    tamanho: 'g',
    quantidade: 0
  }
]

let carrinhoDeCompra = []

const listaProdutos = document.getElementById('listaProdutos')

const carregarProdutos = () => {
  produtos.map(produto => {
    listaProdutos.innerHTML += `
    
      <div id="item">

        <span id="id">${produto.id}</span>
        <p id="descricao">${produto.descricao}</p>
        <p id="tamanho">${produto.tamanho}
        <p id="preco">${produto.preco}</p>
        <a href="#" class="adicionar" key=${produto.id}>adicionar</a>

      </div>

    `
  })
}

carregarProdutos()

const btnAdicionar = document.getElementsByClassName('adicionar')

let pegarCarrinho = () => {
  return localStorage.getItem('Carrinho')
    ? JSON.parse(localStorage.getItem('Carrinho'))
    : []
}

let hasItem = item => {
  let carrinho = pegarCarrinho()
  if (!item.idProduto) {
    return false
  }
  return carrinho.some(itemCarrinho => item.idProduto == itemCarrinho.id)
}

let salvarProdutoCarrinho = item => {
  let carrinho = pegarCarrinho()
  if (hasItem(item)) {
    carrinho.forEach(cartItem => {
      if (cartItem.idProduto == item.idProduto) {
        console.log('iguais')
      }
    })
  }
}

for (var i = 0; i < btnAdicionar.length; i++) {
  btnAdicionar[i].addEventListener('click', e => {
    let key = e.target.getAttribute('key')

    let id = produtos[key].id
    let descricao = produtos[key].descricao
    let tamanho = produtos[key].tamanho
    let preco = produtos[key].tamanho
    let quantidade = produtos[key].quantidade

    const produto = {
      idProduto: id,
      descricaoProduto: descricao,
      tamanhoProduto: tamanho,
      precoProduto: preco,
      quantidadeProduto: quantidade
    }

    salvarProdutoCarrinho(produto)
  })
}
