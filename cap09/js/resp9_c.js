const form = document.querySelector("form");
const resp1 = document.querySelector("span");
const resp2 = document.querySelector("h4");

let servicos = [];

const mostrarPendentes = () => {
    resp1.innerText = servicos.length;
}

const salvarServicos = () => {
    localStorage.setItem("twServicos", servicos.join(";"))
}

const carregarServicos = () => {
    if (localStorage.getItem("twServicos")) {
        servicos = localStorage.getItem("twServicos").split(";");
        mostrarPendentes();
    }   
}

const adicionarServico = (e) => {
    e.preventDefault();

    const servico = form.inServico.value;

    servicos.push(servico);

    salvarServicos();
    mostrarPendentes();

    form.reset();
    form.inServico.focus();
}

const executarServico = () => {
    if (servicos.length != 0) {
        resp2.innerText = servicos.shift();
        mostrarPendentes();
    } else {
        localStorage.removeItem("twServicos");
        resp2.innerText = "";
    }    
}

form.addEventListener("submit", adicionarServico);
form.btExecutar.addEventListener("click", executarServico);
window.addEventListener("load", carregarServicos);