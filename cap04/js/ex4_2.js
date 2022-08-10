const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inNome.value;
    const masculino = form.inMasculino.checked;
    const altura = Number(form.inAltura.value);

    let peso;

    if (masculino) {
        peso = 22 * Math.pow(altura, 2);
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    resp.innerText = `${nome}. Seu peso ideal é ${peso.toFixed(0)} kg.`;
})

form.addEventListener("reset", () => {
    resp.innerText = "";
})