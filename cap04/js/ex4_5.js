const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);

    let raiz = Math.sqrt(numero);

    if (Number.isInteger(raiz)) {
        resp.innerText = `Raíz = ${raiz}`;
    } else {
        resp.innerText = `Não existe raiz quadrada exata pata ${numero}`;
    }
});