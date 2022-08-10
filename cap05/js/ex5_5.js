const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";
let numContas = 0;
let total = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = form.inDescricao.value;
    const valor = Number(form.inValor.value);
    
    numContas++;
    total += valor;
    resposta = `${resposta}${descricao} - R$ ${valor.toFixed(2)}\n`;
   
    resp1.innerText = `${resposta}-----------------------------\n`;
    resp2.innerText = `${numContas} conta(s) - Total R$ ${total}`;

    form.inDescricao.value = "";
    form.inValor.value = "";
    form.inDescricao.focus();
});