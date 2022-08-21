const form = document.querySelector("form");
const resp = document.querySelector("pre");

const itens = [];

form.rbPizza.addEventListener("click", () => {
    form.inBebida.className = "oculta";
    form.inPizza.className = "exibe";
});

form.rbBebida.addEventListener("click", () => {
    form.inBebida.className = "exibe";
    form.inPizza.className = "oculta";
});

form.inDetalhes.addEventListener("focus", () => {
    if (form.rbPizza.checked) {
        const pizza = form.inPizza.value;
        const n = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
        form.inDetalhes.placeholder = `Até ${n} sabores`;
    }
});

form.inDetalhes.addEventListener("blur", () => {
    form.inDetalhes.placeholder = "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let produto;

    if (form.rbPizza.checked) {
        const i = form.inPizza.selectedIndex;
        produto = form.inPizza.options[i].text;
    } else {
        const i = form.inBebida.selectedIndex;
        produto = form.inBebida.options[i].text;
    }

    const detalhes = form.inDetalhes.value;
    itens.push(`${produto} (${detalhes})`);
    resp.innerText = itens.join("\n");

    form.reset();
    form.rbPizza.dispatchEvent(new Event("click"));
});