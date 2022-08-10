const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

const numeros = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    resp2.innerText = "";

    const num = Number(form.inNumero.value);

    let achou = false;
    
    for (const numero of numeros) {
        if (num == numero) {
            achou = true;
            break;
        }
    }

    if (!achou) {
        numeros.push(num);
    }

    resp1.innerText = "Números: " + numeros.join(", ");

    form.reset();
    form.inNumero.focus();
});

form.btVerificar.addEventListener("click", () => {
    let achou = false;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeros[i + 1]) {
            achou = true;
            break;
        }
    }

    if (achou) {
        resp2.innerText = "Atenção... Números não estão em ordem crescente";
    } else {
        resp2.innerText = "Os números estão em ordem crescente";
    }
});