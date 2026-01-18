let carrinho = [];

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;

    const div = document.createElement("div");
    div.className = "item-carrinho";
    div.innerHTML = `
      <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
      <button onclick="removerItem(${index})">X</button>
    `;

    lista.appendChild(div);
  });

  totalSpan.innerText = total.toFixed(2);
}

function filtrarCategoria(categoria) {
  document.querySelectorAll(".produto").forEach(produto => {
    produto.style.display =
      produto.dataset.categoria === categoria ? "flex" : "none";
  });
}

function enviarWhatsApp() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let mensagem = "🐾 *Pedido Pet Shop* 🐾\n\n";
  let total = 0;

  carrinho.forEach(item => {
    mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    total += item.preco;
  });

  mensagem += `\n💰 *Total:* R$ ${total.toFixed(2)}`;

  const telefone = "5511999999999";
  window.open(
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
}
