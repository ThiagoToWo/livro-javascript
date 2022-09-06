const inRadios = document.querySelectorAll("input");
const imClube = document.querySelector("#imClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
    let clubes = ["Flamengo", "Fluminense", "Cruzeiro"];

    let selecao;

    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i;
            break;
        }
    }

    if (selecao <= 2) {
        dvTitulo.className = `row cores-${clubes[selecao]}`;

        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
        imClube.className = "img-fluid";
        imClube.alt = `Símbolo do ${clubes[selecao]}`;

        localStorage.setItem("clube", clubes[selecao]);
    } else {
        dvTitulo.className = `row`;

        imClube.className = "d-none";
        imClube.alt = "";

        localStorage.removeItem("clube");
    }    
}

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        if (clube == "Flamengo") {
            inRadios[0].checked = true;
        } else if (clube == "Fluminense") {
            inRadios[1].checked = true;
        } else {
            inRadios[2].checked = true;
        }

        trocarClube();
    } 
    
    contarVisita();
}

const contarVisita = () => {
    if (!localStorage.getItem("numVisita")) {
        alert("Muito Bem Vindo! Essa é sua primeira visita ao nosso site.");
        localStorage.setItem("numVisita", 1);
    } else {
        numVisita = localStorage.getItem("numVisita");
        alert(`Que bom que você voltou! Esta é sua visita de número ${++numVisita} ao nosso site.`);
        localStorage.setItem("numVisita", numVisita);
    }
}

window.addEventListener("load", verificarClube);