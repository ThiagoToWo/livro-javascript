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
            exibirResultados(preco, 20);
        } else {
            exibirResultados(preco, 50);
        }
    } else {
        exibirResultados(preco, 10);
    }

    form.reset();
    form.inPreco.focus();
    form.rbNao.dispatchEvent(new Event("click"));
});

const calcularDesconto = (valor, taxaPorcentagem) => valor * taxaPorcentagem / 100;

const exibirResultados = (valor, taxaPorcentagem) => {
    const desconto = calcularDesconto(valor, taxaPorcentagem);
    resp1.innerText = `Desconto: R$ ${desconto.toFixed(2)}`;
    resp2.innerText = `À pagar: R$ ${(valor - desconto).toFixed(2)}`;
}