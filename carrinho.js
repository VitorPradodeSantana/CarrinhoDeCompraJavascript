let carrinho = document.getElementById('carrinhoDeCompra')
const carrinhoLocalStorage = JSON.parse(localStorage.getItem('Carrinho'))
const limparCarrinho = document.getElementById('limparCarrinho')

carrinhoLocalStorage.map(item => {
  carrinho.innerHTML += `
    <div>

      <span>${item.idProduto}</span>
      <p>${item.descricaoProduto}</p>
      <p>${item.tamanhoProduto}</p>
      <p>${item.precoProduto}</p>
      <input type="number" value="${item.quantidadeProduto}" />

    </div>
  `
})

limparCarrinho.addEventListener('click', () => {
  localStorage.clear()
  carrinho = ''
  window
})
