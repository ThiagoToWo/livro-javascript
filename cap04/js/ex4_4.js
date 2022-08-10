const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const horaBrasil = Number(form.inHoraBrasil.value);

    let horaNoruega = horaBrasil + 5;

    if (horaNoruega > 24) {
        horaNoruega -= 24;
    }

    resp.innerText = `Hora na Noruega: ${horaNoruega.toFixed(2)}`;
});