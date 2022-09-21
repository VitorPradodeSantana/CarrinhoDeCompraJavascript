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

let salvarProdutoCarrinho = item => {
  let verifica = carrinhoDeCompra.findIndex(
    id => id.idProduto == item.idProduto
  )
  if (verifica < 0) {
    carrinhoDeCompra.push(item)
    localStorage.setItem('Carrinho', JSON.stringify(carrinhoDeCompra))
  } else {
    carrinhoDeCompra.quantidadeProduto++
  }
}

for (var i = 0; i < btnAdicionar.length; i++) {
  btnAdicionar[i].addEventListener('click', e => {
    let key = e.target.getAttribute('key')

    let id = produtos[key].id
    let descricao = produtos[key].descricao
    let tamanho = produtos[key].tamanho
    let preco = produtos[key].preco
    let quantidade = produtos[key].quantidade

    const produto = {
      idProduto: id,
      descricaoProduto: descricao,
      tamanhoProduto: tamanho,
      precoProduto: preco,
      quantidadeProduto: quantidade
    }

    salvarProdutoCarrinho(produto)

    window.location.href = 'carrinho.html'
  })
}
