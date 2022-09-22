let carrinho = document.getElementById('carrinhoDeCompra')
const carrinhoLocalStorage = JSON.parse(localStorage.getItem('Carrinho'))
const limparCarrinho = document.getElementById('limparCarrinho')
const valorTotalCarrinho = document.getElementById('valorTotal')
const finalizarVenda = document.getElementById('finalizarVenda')
const calculoDoPedido = document.getElementById('calculoDoPedido')

carrinhoLocalStorage.map(item => {
  carrinho.innerHTML += `
    <div>

      <img src="${item.imageProduto}" />
      <span>${item.idProduto}</span>
      <p>${item.descricaoProduto}</p>
      <p>${item.tamanhoProduto}</p>
      <p>${item.precoProduto}</p>
      <input type="number" value="${item.quantidadeProduto}" />
      <button class="btnExcluir">excluir</button>

    </div>
  `
})

let somaValorTotal = carrinhoLocalStorage.reduce(
  (soma, atual) => soma + atual.precoProduto,
  0
)

valorTotalCarrinho.innerHTML = `Total -> ${somaValorTotal}`

limparCarrinho.addEventListener('click', () => {
  localStorage.clear()
  carrinho = ''
  document.location.reload(true)
})

const btnExcluirItem = document.getElementsByClassName('btnExcluir')

for (var i = 0; i < btnExcluirItem.length; i++) {
  btnExcluirItem[i].addEventListener('click', e => {
    let item = e.target.parentNode

    let indice = parseInt(item.children[1].innerHTML)

    carrinhoLocalStorage.splice(indice, 1)

    localStorage.setItem('Carrinho', JSON.stringify(carrinhoLocalStorage))

    console.log(carrinhoLocalStorage)

    item.style.display = 'none'

    valorTotalCarrinho.innerHTML = `Total -> ${somaValorTotal}`

    document.location.reload(true)
  })
}

finalizarVenda.onclick = () => {
  location.href = 'pedidoFinalizado.html'
}

carrinhoLocalStorage.map(item => {
  calculoDoPedido.innerHTML += `
    <div>

      <p>${item.precoProduto}+</p>

    </div>
  `
})
