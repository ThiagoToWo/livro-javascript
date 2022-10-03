const form = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

const adicionarTarefa = (e) => {
    e.preventDefault();

    const tarefa = form.inTarefa.value;

    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    dvQuadro.appendChild(h5);

    form.inTarefa.value = "";
    form.inTarefa.focus();
}

const selecionarTarefa = () => {
    const tarefas = document.querySelectorAll("h5");

    const n = tarefas.length;

    if (n == 0) {
        alert("Não há tarefas cadastradas");
        return;
    }
    
    let aux = -1;
    
    for (let i = 0; i < n; i++) {
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal";
            aux = i;
            break;
        }
    }

    if (aux == n - 1) {
        aux = -1;
    }

    tarefas[aux + 1].className = "tarefa-selecionada";
    
}

const retirarTarefa = () => {
    const tarefas = document.querySelectorAll("h5");

    let aux = -1;

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className == "tarefa-selecionada") {
            aux = i;
            break;
        }
    }

    if (aux == -1) {
        alert("Selecione alguma tarefa para ser retirada");
        return;
    }

    if (confirm(`Confirma a exclusão de ${tarefas[aux].innerText}?`)) {
        dvQuadro.removeChild(tarefas[aux]);
    }
}

const gravarTarefa = () => {
    const tarefas = document.querySelectorAll("h5");

    if (tarefas.length == 0) {
        alert("Não há tarefas a serem salvas");
        return;
    }

    let dados = "";

    for (const tarefa of tarefas) {
        dados += tarefa.innerText + ";";
    }

    localStorage.setItem("tarefasAFazer", dados);

    if (localStorage.getItem("tarefasAFazer")) {
        alert("Tarefas salvas com sucesso!");
    }
}

const carregarTarefa = () => {
    if (localStorage.getItem("tarefasAFazer")) {
       const dados = localStorage.getItem("tarefasAFazer").split(";");

       for (const dado of dados) {
            const h5 = document.createElement("h5");
            const texto = document.createTextNode(dado);
            h5.appendChild(texto);
            dvQuadro.appendChild(h5);
       }
    }
}

form.addEventListener("submit", adicionarTarefa);
form.btSelecionar.addEventListener("click", selecionarTarefa);
form.btRetirar.addEventListener("click", retirarTarefa);
form.btGravar.addEventListener("click", gravarTarefa);
window.addEventListener("load", carregarTarefa);