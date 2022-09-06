const form = document.querySelector("form");
const imClube = document.querySelector("#imClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
    let clube;

    if (form.rbFlamengo.checked) {
        clube = "Flamengo";
    } else if (form.rbFluminense.checked) {
        clube = "Fluminense";
    } else {
        clube = "Cruzeiro";
    }

    dvTitulo.className = `row cores-${clube}`;

    imClube.src = `img/${clube.toLowerCase()}.png`;
    imClube.className = `img-fluid`;
    imClube.alt = `Símbolo do ${clube}`;

    localStorage.setItem("clube", clube);
}

form.rbFlamengo.addEventListener("change", trocarClube);
form.rbFluminense.addEventListener("change", trocarClube);
form.rbCruzeiro.addEventListener("change", trocarClube);

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        if (clube == "Flamengo") {
            form.rbFlamengo.checked = true;
        } else if (clube == "Fluminense") {
            form.rbFluminense.checked = true;
        } else {
            form.rbCruzeiro.checked = true;
        }

        trocarClube();
    }   
}

window.addEventListener("load", verificarClube);