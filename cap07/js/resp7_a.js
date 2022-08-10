const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mensagem = form.inMensagem.value;

    const tam = mensagem.length;
    let cripto = "";

    for (let i = 1; i < tam; i += 2) {
        cripto += mensagem[i];
    }

    for (let i = 0; i < tam; i += 2) {
        cripto += mensagem[i];
    }

    resp.innerText = cripto;
});

form.btDescript.addEventListener("click", () => {
    if (!form.checkValidity()) {
        alert("Insira um texto a ser criptografado");
        form.inMensagem.focus();
        return;
    }

    const mensagem = form.inMensagem.value;

    const tam = mensagem.length;
    const meio = Math.floor(tam / 2);
    let descript = "";

    for (let i = 0; i < meio; i++) {
        descript += mensagem[meio + i];
        descript += mensagem[i];
    }

    if (tam % 2 != 0) {
        descript += mensagem[tam - 1];
    }

    resp.innerText = descript;
});