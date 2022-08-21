const form = document.querySelector("form");
const resp1 = document.querySelector("#outDesconto");
const resp2 = document.querySelector("#outPagar");

form.rbSim.addEventListener("click", () => {
    document.querySelector("#pConvenio").className = "exibe";
});

form.rbNao.addEventListener("click", () => {
    document.querySelector("#pConvenio").className = "oculta";
});

form. addEventListener("submit", (e) => {
    e.preventDefault();

    const preco = Number(form.inPreco.value);
    let convenio;

    if (form.rbSim.checked) {
        const i = form.selConvenio.selectedIndex;
        convenio = form.selConvenio.options[i].value;

        if (convenio == "amigo") {
            resp1.innerText = `Desconto: R$ ${(0.2 * preco).toFixed(2)}`;
            resp2.innerText = `À pagar: R$ ${(0.8 * preco).toFixed(2)}`;
        } else {
            resp1.innerText = `Desconto: R$ ${(0.5 * preco).toFixed(2)}`;
            resp2.innerText = `À pagar: R$ ${(0.5 * preco).toFixed(2)}`;
        }
    } else {
        resp1.innerText = `Desconto: R$ ${(0.1 * preco).toFixed(2)}`;
        resp2.innerText = `À pagar: R$ ${(0.9 * preco).toFixed(2)}`;
    }

    form.reset();
    form.inPreco.focus();
    form.rbNao.dispatchEvent(new Event("click"));
});