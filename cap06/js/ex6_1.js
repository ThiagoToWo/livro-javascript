const form = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inPaciente.value;

    pacientes.push(nome);

    let lista = "";

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerText = lista;

    form.inPaciente.value = "";
    form.inPaciente.focus();
});

form.btUrgencia.addEventListener("click", () => {
    if (!form.checkValidity()) {
        alert("Informe o nome de um paciente a ser atendido com urgência");
        form.inPaciente.focus();
        return;
    }

    const nome  = form.inPaciente.value;

    pacientes.unshift(nome);

    let lista = "";

    pacientes.forEach((paciente, i) => {lista += `${i + 1}. ${paciente}\n`;});

    respLista.innerText = lista; 

    form.inPaciente.value = "";
    form.inPaciente.focus();
});

form.btAtender.addEventListener("click", () => {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        form.inPaciente.focus();
        return;
    }

    const atender = pacientes.shift();

    respNome.innerText = atender;

    let lista = "";

    pacientes.forEach((paciente, i) => {lista += `${i + 1}. ${paciente}\n`;});

    respLista.innerText = lista;
});