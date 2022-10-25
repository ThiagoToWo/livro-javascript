const form = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];
const apostas = [];

const obterCavalo = (numero) => {
    const posicao = numero - 1;
    return CAVALOS[posicao];
};

const validarCavalo = (numero) => {
    return numero >= 1 && numero <= CAVALOS.length;
};

function contarApostas(numero) {
    let contador = 0;

    for (const aposta of apostas) {
        if (aposta.cavalo == numero) {
            contador++;
        }
    }

    return contador;
};

const totalizarApostas = (numero) => {
    let total = 0;

    for (const aposta of apostas) {
        if (aposta.cavalo == numero) {
            total += aposta.valor;
        }
    }

    return total;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cavalo = Number(form.inCavalo.value);
    const valor = Number(form.inValor.value);

    apostas.push({cavalo, valor});

    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R$ ${aposta.valor.toFixed(2)}\n`;
    }

    respLista.innerText = lista;

    form.reset();
    form.inCavalo.focus();
});

form.inCavalo.addEventListener("blur", () => {
    if (form.inCavalo.value == "") {
        respCavalo.innerText = "";
        return;
    }

    const numCavalo = Number(form.inCavalo.value);

    if (!validarCavalo(numCavalo)) {
        alert("Nº de cavalo inválido");
        form.inCavalo.focus();
        return;
    }

    const nome = obterCavalo(numCavalo);
    const contaNum = contarApostas(numCavalo);
    const total = totalizarApostas(numCavalo);

    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$ ${total.toFixed(2)})`;
});

form.inCavalo.addEventListener("focus", () => {
    form.inCavalo.value = "";
    respCavalo.innerText = "";
});

form.btResumo.addEventListener("click", () => {
    const somaAposta = [0, 0, 0, 0, 0, 0];

    for (const aposta of apostas) {
        somaAposta[aposta.cavalo - 1] += aposta.valor;
    }

    let resposta = `Nº Cavalo.............. R$ Apostado\n${"-".repeat(35)}\n`;

    CAVALOS.forEach((cavalo, i) => {
        resposta += ` ${i + 1} ${cavalo.padEnd(20)}`;
        resposta += ` ${somaAposta[i].toFixed(2).padStart(11)}\n`;
    });

    respLista.innerText = resposta;
});

form.btGanhador.addEventListener("click", () => {
    const ganhador = 1 + Math.floor(Math.random() * 6);
    //const ganhador = Number(prompt("Nº do cavalo ganhador: "));

    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert("Cavalo inválido");
        return;
    }

    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0);

    let resumo = `Resultado Final do Páreo\n${"-".repeat(30)}\n`;

    resumo += `Nº Total de Apostas: ${apostas.length}\n`;
    resumo += `Total Geral: R$ ${total.toFixed(2)}\n\n`;
    resumo += `Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
    const numApostas = contarApostas(ganhador);
    resumo += `Nº de Apostas: ${numApostas}\n`;
    resumo += `Total Apostado: R$ ${totalizarApostas(ganhador).toFixed(2)}\n\n`;
    resumo += `Valor para cada ganhador: R$ ${(total / numApostas).toFixed(2)}`;
    respLista.innerText = resumo;

    form.btApostar.disabled = true;
    form.btGanhador.disabled = true;
    form.inCavalo.focus();
});

form.btNovo.addEventListener("click", () => window.location.reload());