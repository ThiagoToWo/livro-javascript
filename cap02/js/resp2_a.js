const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
    const remedio = form.inMed.value;
    const preco = Number(form.inPreco.value);

    const total = Math.floor(2 * preco);

    resp1.innerText = `Promoção de ${remedio}`;
    resp2.innerText = `Leve 2 por apenas R$ ${total.toFixed(2)}`;

    e.preventDefault();
})