const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    const preco = Number(form.inPreco.value);
    const tempo = Number(form.inTempo.value);

    const total = Math.ceil(tempo / 15) * preco;

    resp.innerText = `VAlor a pagar R$ ${total.toFixed(2)}`;
    
    e.preventDefault();
})