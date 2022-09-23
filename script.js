const produtos = [
  {
    image: './image/imagemFake.jpg',
    id: 0,
    descricao: 'camiseta balmain',
    preco: 50.0,
    tamanho: 'p',
    quantidade: 0
  },
  {
    image: './image/imagemFake.jpg',
    id: 1,
    descricao: 'camiseta nike',
    preco: 60.0,
    tamanho: 'm',
    quantidade: 0
  },
  {
    image: './image/imagemFake.jpg',
    id: 2,
    descricao: 'camiseta adidas',
    preco: 80.0,
    tamanho: 'g',
    quantidade: 0
  }
]

const btnAdicionar = document.getElementsByClassName('adicionar')

const listaProdutos = document.getElementById('listaProdutos')

const avisoItemAdicionado = document.getElementById('avisoItemAdicionado')

let carrinhoDeCompra = []

const pegarCarrinho = () => {
  return localStorage['Carrinho'] ? JSON.parse(localStorage['Carrinho']) : []
}

const carregarProdutos = () => {
  produtos.map(produto => {
    listaProdutos.innerHTML += `
    
      <div id="item">

        <img src="${produto.image}" />
        <div class="informacoesProduto">
          <p id="descricao">${produto.descricao}</p>
          <p id="tamanho">${produto.tamanho}</p>
          <p id="preco">R$ ${produto.preco}.00</p>
          <a href="#" class="adicionar" key=${produto.id}>adicionar</a>
        </div>

      </div>

    `
  })
}

carregarProdutos()

let salvarProdutoCarrinho = item => {
  let verifica = carrinhoDeCompra.findIndex(
    id => id.idProduto == item.idProduto
  )
  if (verifica < 0) {
    carrinhoDeCompra.push(item)
    localStorage.setItem('Carrinho', JSON.stringify(carrinhoDeCompra))

    avisoItemAdicionado.style.display = 'block'

    setTimeout(() => {
      avisoItemAdicionado.style.display = 'none'
    }, 1000)
  } else {
    avisoItemAdicionado.innerText = `Item já existe no carrinho de compra`
    avisoItemAdicionado.style.border = '1px solid rgb(49, 0, 0)'
    avisoItemAdicionado.style.background = 'rgb(230, 111, 111)'
    avisoItemAdicionado.style.display = 'block'

    setTimeout(() => {
      avisoItemAdicionado.style.display = 'none'
    }, 1000)
  }
}

for (var i = 0; i < btnAdicionar.length; i++) {
  btnAdicionar[i].addEventListener('click', e => {
    let key = e.target.getAttribute('key')

    let img = produtos[key].image
    let id = produtos[key].id
    let descricao = produtos[key].descricao
    let tamanho = produtos[key].tamanho
    let preco = produtos[key].preco
    let quantidade = produtos[key].quantidade

    const produto = {
      imageProduto: img,
      idProduto: id,
      descricaoProduto: descricao,
      tamanhoProduto: tamanho,
      precoProduto: preco,
      quantidadeProduto: quantidade
    }

    salvarProdutoCarrinho(produto)
  })
}
