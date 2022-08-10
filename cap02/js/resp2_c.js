const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
    const produto = form.inProduto.value;
    const preco = Number(form.inPreco.value);

    const meio = preco / 2;
    const total = 2 * preco + meio;

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${total.toFixed(2)}`;
    resp2.innerText = `O 3° produto sai por ${meio.toFixed(2)}`;

    e.preventDefault();
})