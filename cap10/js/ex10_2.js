const form = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

const criarMoedas = (quantidade, nomeImagem, textoAlt, classe) => {
    for (let i = 0; i < quantidade; i++) {
        const novaMoeda = document.createElement("img");
        novaMoeda.src = "img/" + nomeImagem;
        novaMoeda.textAlt = textoAlt;
        novaMoeda.className = classe;
        dvMoedas.appendChild(novaMoeda);
    }

    const br = document.createElement("br");
    dvMoedas.appendChild(br);
}

window.addEventListener("load", () => {
    const num100 = 1 + Math.floor(Math.random() * 5);
    const num050 = 1 + Math.floor(Math.random() * 5);
    const num025 = 1 + Math.floor(Math.random() * 5);
    const num010 = 1 + Math.floor(Math.random() * 5);

    const alt100 = "Moedas de um real";
    const alt050 = "Moedas de cinquenta centavos";
    const alt025 = "Moedas de vinte e cinco centavos";
    const alt010 = "Moedas de dez centavos";

    criarMoedas(num100, "100.jpg", alt100, "moeda-100");
    criarMoedas(num050, "050.jpg", alt050, "moeda-050");
    criarMoedas(num025, "025.jpg", alt025, "moeda-025");
    criarMoedas(num010, "010.jpg", alt010, "moeda-010");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const soma = Number(form.inSoma.value);
    const moedas = dvMoedas.querySelectorAll("img");
    let totalMoedas = 0;

    for (const moeda of moedas) {
        const classe = moeda.className;

        if (classe == "moeda-100") {
            totalMoedas += 1;
        } else if (classe == "moeda-050") {
            totalMoedas += 0.5;
        } else if (classe == "moeda-025") {
            totalMoedas += 0.25;
        } else {
            totalMoedas += 0.1;
        }
    }

    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    let mensagem;

    if (soma == totalMoedas.toFixed(2)) {
        div.className = "alert alert-success";
        mensagem = "Parabéns! Você acertou!";
    } else {
        div.className = "alert alert-danger";
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`;
    }

    const texto = document.createTextNode(mensagem);
    h3.appendChild(texto);
    div.appendChild(h3);
    dvMoedas.appendChild(div);

    form.btSubmit.disabled = true;
});

form.addEventListener("reset", () => {
    window.location.reload();
});