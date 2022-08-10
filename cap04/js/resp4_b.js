const form =  document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    const permitida = Number(form.inVelPermitida.value);
    const condutor = Number(form.inVelCondutor.value);

    if (condutor <= permitida) {
        resp.innerText = `Situação: Sem Multa`;
    } else if (condutor <= 1.2 * permitida) {
        resp.innerText = `Situação: Multa Leve`;
    } else {
        resp.innerText = `Situação: Multa Grave`;
    }

    e.preventDefault();
});