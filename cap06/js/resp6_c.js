const form = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inCandidato.value;
    const acertos = Number(form.inAcertos.value);

    candidatos.push({nome, acertos});

    form.reset();
    form.inCandidato.focus();
    form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos cadastrados na lista");
        return;
    }

    let lista = "";

    for (const candidato of candidatos) {
        const {nome, acertos} = candidato;
        lista += nome + " - " + acertos + " acertos\n";
    }

    resp.innerText = lista;
});

form.btAprovados.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos cadastrados na lista");
        return;
    }

    const acertosAprov = Number(prompt("Número de acertos para aprovação"));

    const aprovados = candidatos.filter(c => c.acertos >= acertosAprov);

    if (aprovados.length == 0) {
        alert("Nenhum candidato foi aprovado");
        return;
    }

    aprovados.sort((a, b) => b.acertos - a.acertos);

    let lista = "";

    for (const candidato of aprovados) {
        const {nome, acertos} = candidato;
        lista += nome + " - " + acertos + " acertos\n";
    }

    resp.innerText = lista;
});