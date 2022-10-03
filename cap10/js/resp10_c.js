const form = document.querySelector("form");
const dvTabela = document.querySelector("#divTabela");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const clube = form.inClube.value;

    const h5 = document.createElement("h5");
    h5.innerText = clube;
    h5.className = "alinha-direita italico";
    dvTabela.appendChild(h5);

    form.inClube.value = "";
    form.inClube.focus();
});

form.btTabela.addEventListener("click", () => {
    const listaH5 = document.querySelectorAll("h5");

    if (listaH5.length == 0) {
        alert("Nenhum time inserido");
        form.inClube.focus();
        return;
    }

    if (listaH5.length % 2 != 0) {
        alert("Existe uma quantidade ímpar de times. Insira pelo menos mais um.");
        form.inClube.focus();
        return;
    } else {
        const titulo = document.createElement("h3");

        titulo.innerText = "Tabela de Jogos";
        dvTabela.appendChild(titulo);

        const tabela = document.createElement("table");
        tabela.className = "table table-striped";
        let linha;
        let coluna;

        for (let i = 0; i < listaH5.length; i++) {
            if (i % 2 == 0) {
                linha = tabela.insertRow(-1);
                coluna = linha.insertCell(0);
                coluna.innerText = listaH5[i].innerText;
            } else {
                coluna = linha.insertCell(1);
                coluna.innerText = listaH5[i].innerText;
            }
        }

        dvTabela.appendChild(tabela);

        form.btAdicionar.disabled = true;
        form.btTabela.disabled = true;
    }
});

form.addEventListener("reset", () => {
    window.location.reload();
});