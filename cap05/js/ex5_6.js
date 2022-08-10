const form = document.querySelector("form");
const resp1 = document.querySelector("pre");
const resp2 = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    let achou = false;
    let divisor;
    
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i == 0) {
            achou = true;
            divisor = i;
            break;
        }
    }

    if (numero > 1 && !achou) {   
        resp1.innerText = "";     
        resp2.innerText = `${numero} é Primo`;
    } else {
        resp1.innerText = `${numero} = ${divisor} x ${numero / divisor}`;
        resp2.innerText = `${numero} não é Primo`;
    }
});