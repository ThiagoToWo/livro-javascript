const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    const quilo = Number(form.inQuilo.value);
    const consumo = Number(form.inConsumo.value);

    const preco = (quilo / 1000) * consumo;

    resp.innerText = `Valor a pagar: R$${preco.toFixed(2)}`;

    e.preventDefault();
})