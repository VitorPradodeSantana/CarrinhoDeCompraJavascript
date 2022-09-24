let carrinho = document.getElementById('carrinhoDeCompra')
const carrinhoLocalStorage = JSON.parse(localStorage.getItem('Carrinho'))
const limparCarrinho = document.getElementById('limparCarrinho')
const valorTotalCarrinho = document.getElementById('valorTotal')
const finalizarVenda = document.getElementById('finalizarVenda')
const calculoDoPedido = document.getElementById('calculoDoPedido')
let carrinhodeCompra = []

let salvarProdutoCarrinho = item => {
  let verifica = carrinhodeCompra.findIndex(
    id => id.idProduto == item.idProduto
  )
  if (verifica < 0) {
    carrinhodeCompra.push(item)
    localStorage.setItem('Carrinho', JSON.stringify(carrinhodeCompra))
  }
}

carrinhoLocalStorage.map(item => {
  carrinho.innerHTML += `
    <div>

      <img src="${item.imageProduto}" />
      <p>${item.descricaoProduto}</p>
      <p>${item.tamanhoProduto}</p>
      <p>${item.precoProduto}</p>
      <span class="idProduto">${item.idProduto}</span>
      <i class="fa-solid fa-minus" id="diminuirQuantidade"></i>
      <input type="number" class="quantidadeProduto" value="${item.quantidadeProduto}" />
      <i class="fa-solid fa-plus" id="aumentarQuantidade"></i>
      <button class="btnExcluir">excluir</button>

    </div>
  `
})

limparCarrinho.addEventListener('click', () => {
  localStorage.clear()
  carrinho = ''
  document.location.reload(true)
})

const btnExcluirItem = document.getElementsByClassName('btnExcluir')

for (var i = 0; i < btnExcluirItem.length; i++) {
  btnExcluirItem[i].addEventListener('click', e => {
    let item = e.target.parentNode

    let indice = parseInt(item.children[1].innerHTML - 1)

    carrinhoLocalStorage.splice(indice, 1)

    localStorage.setItem('Carrinho', JSON.stringify(carrinhoLocalStorage))

    console.log(carrinhoLocalStorage)

    item.style.display = 'none'

    valorTotalCarrinho.innerHTML = `Total -> ${somaValorTotal}`

    document.location.reload(true)
  })
}

carrinhoLocalStorage.map(item => {
  calculoDoPedido.innerHTML += `
    <div>

      <p>${item.precoProduto}+</p>

    </div>
  `
})

let divCarrinhoDeCompra = carrinhoDeCompra.children

console.log(divCarrinhoDeCompra)

for (i = 0; i < divCarrinhoDeCompra.length; i++) {
  divCarrinhoDeCompra[i].children[7].onclick = e => {
    let alvo = e.target.parentNode.children[4].innerHTML
    let quantidadeProduto = document.getElementsByClassName('quantidadeProduto')
    let valorInteiroQuantidade = quantidadeProduto[alvo]
    valorInteiroQuantidade.value++
  }

  divCarrinhoDeCompra[i].children[5].onclick = e => {
    let alvo = e.target.parentNode.children[4].innerHTML
    let quantidadeProduto = document.getElementsByClassName('quantidadeProduto')
    let valorInteiroQuantidade = quantidadeProduto[alvo]
    valorInteiroQuantidade.value--
  }
}

finalizarVenda.onclick = () => {
  for (i = 0; i < divCarrinhoDeCompra.length; i++) {
    let img = divCarrinhoDeCompra[i].children[0].getAttribute('src')
    let descricao = divCarrinhoDeCompra[i].children[1].innerHTML
    let tamanho = divCarrinhoDeCompra[i].children[2].innerHTML
    let preco = divCarrinhoDeCompra[i].children[3].innerHTML
    let id = divCarrinhoDeCompra[i].children[4].innerHTML
    let quantidade = parseInt(divCarrinhoDeCompra[i].children[6].value)

    const produto = {
      imageProduto: img,
      idProduto: id,
      descricaoProduto: descricao,
      tamanhoProduto: tamanho,
      precoProduto: preco,
      quantidadeProduto: quantidade
    }

    salvarProdutoCarrinho(produto)
  }

  let somaValorTotal = carrinhoLocalStorage.reduce(
    (soma, atual) => soma + atual.quantidadeProduto * atual.precoProduto,
    0
  )

  valorTotalCarrinho.innerHTML = `Total -> ${somaValorTotal}`

  /*location.href = 'pedidoFinalizado.html'*/
}
