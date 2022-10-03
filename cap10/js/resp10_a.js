const form = document.querySelector("form");
const dvVelas = document.querySelector("#divVelas");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const idade = form.inIdade.value;

    for (let i = 0; i < idade.length; i++) {
        const vela = document.createElement("img");
        vela.src = "img/" + idade[i] + ".jpg";
        vela.altText = "vela " + idade[i];

        dvVelas.appendChild(vela);
    }

    form.btSubmit.disabled = true;
});

form.addEventListener("reset", () => {
    window.location.reload();
});