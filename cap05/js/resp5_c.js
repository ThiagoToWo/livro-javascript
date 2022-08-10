const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(form.inNumero.value);

    let display= "1";
    let soma = 1;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            display = `${display} - ${i} `;
            soma += i;
        }        
    }
    
    resp1.innerText = `Divisores próprios de ${num}: ${display} (Soma = ${soma})`;

    if (soma == num) {
        resp2.innerText = `${num} é um número perfeito`;
    } else {
        resp2.innerText = `${num} não é um número perfeito`;
    }
;});