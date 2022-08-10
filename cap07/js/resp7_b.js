const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const frase = form.inFrase.value;

    if (!frase.includes(" ")) {
        alert("Inclua uma frase");
        form.inFrase.focus();
        return;
    }

    const fraseSemEspaco = frase.replace(/ /g, "");

    let reverso = "";

    for (let i = fraseSemEspaco.length - 1; i >= 0; i--) {
        reverso += fraseSemEspaco[i];
    }

    if (fraseSemEspaco == reverso) {
        resp.innerText = `${frase.toUpperCase()} é um palíndromo`;
    } else {
        resp.innerText = `${frase.toUpperCase()} não é um palíndromo`;
    }
});