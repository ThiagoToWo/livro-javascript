const form = document.querySelector("form");
const resp = document.querySelector("#outEspacos");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(form.inNumero.value);
    let estrelas = "";

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas = `${estrelas}*`;
        } else {
            estrelas = `${estrelas}-`;
        }
    }

    resp.innerText = estrelas;
});