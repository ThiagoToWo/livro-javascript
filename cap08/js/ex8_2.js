const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = form.inModelo.value;
    const ano = Number(form.inAno.value);
    const preco = Number(form.inPreco.value);
    
    const classificacao = classificarVeiculo(ano);
    const entrada = calcularEntrada(preco, classificacao);
    const parcela = (preco - entrada) / 10;

    resp1.innerText = `${modelo} - ${classificacao}`;
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+ 10x de ${parcela.toFixed(2)}`;

    form.reset();
    form.inModelo.focus();
});

const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear();
    let classif;

    if (ano == anoAtual) {
        classif = "Novo";
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo";   
    } else {
        classif = "Usado";
    }

    return classif;
}

const calcularEntrada = (valor, status) => status == "Novo" ? valor * 0.5 : valor * 0.3;