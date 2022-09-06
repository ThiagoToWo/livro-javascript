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
}

window.addEventListener("load", verificarClube);