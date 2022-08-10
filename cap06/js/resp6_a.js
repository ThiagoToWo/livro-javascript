const form = document.querySelector("form");
const resp = document.querySelector("pre");

const times = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        alert("Informe o nome do clube");
        form.inClube.focus();
        return;
    }

    const clube = form.inClube.value;

    times.push(clube);

    form.reset();
    form.inClube.focus();
    form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {
    if (times.length == 0) {
        alert("Não há nenhum time cadastrado");
        return;
    }

    let lista = "";

    for (const time of times) {
        lista += time + "\n";
    }

    resp.innerText = lista;
});

form.btTabela.addEventListener("click", () => {
    const numTimes = times.length;

    if (times.length == 0) {
        alert("Não há nenhum time cadastrado");
        return;
    }

    if (numTimes % 2 != 0) {
        alert("Não é possível criar a tebela de jogos com um número ímpar de times");
        return;
    }

    const copia = [...times];
    const numJogos = numTimes / 2;
    let jogos = "";

    for (let i = 0; i < numJogos; i++) {
        const casa = copia.shift();
        const fora = copia.pop();

        jogos += casa + " x " + fora + "\n";
    }

    resp.innerText = jogos;
});