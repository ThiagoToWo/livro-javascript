const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    let resposta = `De ${numero} até 1: `;

    for (let i = numero; i >= 2; i--) {
        resposta = `${resposta}${i}, `;
    }

    resposta = `${resposta}1.`;

    resp.innerText = resposta;
});