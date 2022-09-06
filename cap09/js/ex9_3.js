const form = document.querySelector("form");
const respLista = document.querySelector("pre");

const apostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";");

        return pesos.includes(peso.toString());
    } else {
        return false;
    }
}

const mostrarApostas = () => {
    if (!localStorage.getItem("melanciaNome")) {
        respLista.innerText = "";
        return;
    }

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = ""

    for (let i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "g\n";
    }

    respLista.innerText = linhas;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inNome.value;
    const peso = Number(form.inPeso.value);

    if (apostaExiste(peso)) {
        alert("Alguém já apostou esse peso. Informe outro.");
        form.inPeso.focus();
        return;
    }

    if (localStorage.getItem("melanciaNome")) {
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else {
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas();
    form.reset();
    form.inNome.focus();
});

window.addEventListener("load", mostrarApostas);

form.btVencedor.addEventListener("click", () => {
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas");
        form.inNome.focus();
        return;
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return;
    }

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);
    let difVencedor = Math.abs(vencedorPeso - pesoCorreto);

    for (let i = 0; i < nomes.length; i++) {        
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        if (difAposta < difVencedor) {
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
            difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        }
    }

    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}g\n`;
    mensagem = `${mensagem}------------------------------------\n`;
    mensagem = `${mensagem}Vencedor: ${vencedorNome}\n`;
    mensagem = `${mensagem}Aposta: ${vencedorPeso}`;

    alert(mensagem);
});

form.btLimpar.addEventListener("click", () => {
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas");
        form.inNome.focus();
        return;
    }

    if (confirm("Confirma a exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");
        mostrarApostas();
    }
});