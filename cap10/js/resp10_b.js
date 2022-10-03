const form = document.querySelector("form");
const dvNome = document.querySelector("#divNome");

const sortearCor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inNome.value.trim();
    const partes = nome.split(" ");

    if (partes.length == 1) {
        alert("Insira o nome completo")
        form.inNome.focus();
        return;
    }

    const listaH3 = document.querySelectorAll("h3");

    for (const elemeto of listaH3) {
        elemeto.remove();
    }

    for (const parte of partes) {
        const h3 = document.createElement("h3");
        h3.style.color = sortearCor();
        h3.innerText = parte;
        dvNome.appendChild(h3);
    }
});