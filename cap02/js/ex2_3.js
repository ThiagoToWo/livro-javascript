const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

form.addEventListener("submit", (e) => {
    const veiculo = form.inVeiculo.value;
    const preco = Number(form.inPreco.value);

    const entrada = .5 * preco;
    const parcela = (.5 * preco) / 12;

    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;

    e.preventDefault();
})