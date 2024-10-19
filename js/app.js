let  totalGeral = 0
limpar()
document.getElementById("quantidade").value = 1;

function adicionar() {
    let produtoSelecionado = document.getElementById("produto").value;
    let nomeDoProduto = produtoSelecionado.split("-")[0];
    let valorUnitario = produtoSelecionado.split("R$")[1];
    let quantidadeSelecionada = document.getElementById("quantidade").value;
    let listaDeProdutos = document.getElementById("lista-produtos");
 
    let totalDeUmItem = quantidadeSelecionada * valorUnitario; 
    

    // += na frente da variavel faz com que o a injecao do codigo HTML concatene com a anterior e nao a exclua
    listaDeProdutos.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeSelecionada}x</span> ${nomeDoProduto} <span class="texto-azul">${totalDeUmItem}</span>
  </section>`; 

    totalGeral += totalDeUmItem;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`;
    quantidadeSelecionada = document.getElementById("quantidade").value = 1;
  }

  function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
    totalGeral = 0;
  }