const form =  document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
    const valor = Number(form.inValor.value);

    if (valor < 1) {
        alert("Valor inferior ao mínimo (R$ 1,00)")
        form.inValor.focus();
    }

    const tresReais = Math.floor(valor / 3);
    let resto = valor % 3;
    const umRealE75 = Math.floor(resto / 1.75);
    resto %= 1.75;
    const umReal = Math.floor(resto);
    resto -= umReal;
    const tempo = umReal * 30 + umRealE75 * 60 + tresReais * 120;

    resp1.innerText = `Tempo: ${tempo} min`;
    resp2.innerText = `Troco R$ ${resto.toFixed(2)}`;

    e.preventDefault();
});