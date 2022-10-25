const form = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

const trocarStatus = (numero) => {
    if (numero > 0) imgStatus.src = `img/status${numero}.jpg`;
};

const concluirJogo = () => {
    respDica.innerText = "* Clique no botão 'Inciciar Jogo' para jogar novamente";
    form.inLetra.disabled = true;
    form.btJogar.disabled = true;
    form.btVerDica.disabled = true;
};

const verificarFim = () => {
    const chances = Number(respChances.innerText);

    if (chances == 0) {
        respMensagemFinal.className = "display-3 text-danger";
        respMensagemFinal.innerText = `Ah... era ${palavraSorteada}. Você perdeu`;
        concluirJogo();
    } else if (respPalavra.innerText == palavraSorteada) {
        respMensagemFinal.className = "display-3 text-primary";
        respMensagemFinal.innerText = "Parabéns! Você ganhou!";
        trocarStatus(4);
        concluirJogo();
    }
};

window.addEventListener("load", () => {
    if (!localStorage.getItem("forcaPalavras")) {
        alert("Cadastre palavras para poder jogar");
        form.inLetra.disabled = true;
        form.btJogar.disabled = true;
        form.btVerDica.disabled = true;
    }

    const palavras = localStorage.getItem("forcaPalavras").split(";");
    const dicas = localStorage.getItem("forcaDicas").split(";");
    const tam = palavras.length;
    const rand = Math.floor(Math.random() * tam);

    palavraSorteada = palavras[rand].toUpperCase();
    dicaSorteada = dicas[rand];

    let displayPalavra = "";

    for (const letra of palavraSorteada) {
        if (letra == palavraSorteada[0]) {
            displayPalavra += letra;
        } else {
            displayPalavra += "_";
        }
    }

    respPalavra.innerText = displayPalavra;
});

form.btVerDica.addEventListener("click", () => {
    if (respErros.innerText.includes("*")) {
        alert("Você já solicitou a dica");        
        form.inLetra.focus();
        return;
    }

    respDica.innerText = " * " + dicaSorteada;
    respErros.innerText += "*";

    const chances = Number(respChances.innerText) - 1;

    respChances.innerText = chances;

    trocarStatus(chances);

    verificarFim();
    form.inLetra.focus();
});

form.addEventListener("submit", e => {
    e.preventDefault();

    const letra = form.inLetra.value.toUpperCase();
    const erros = respErros.innerText;
    const palavra = respPalavra.innerText;

    if (erros.includes(letra) || palavra.includes(letra)) {
        alert("Você já apostou essa letra");
        form.inLetra.value = "";
        form.inLetra.focus();
        return;
    }

    if (palavraSorteada.includes(letra)) {
        let displayPalavra = "";
        
        for (let i = 0; i < palavraSorteada.length; i++) {
            if (palavraSorteada[i] == letra) {
                displayPalavra += letra;
            } else {
                displayPalavra += palavra[i];
            }
        }

        respPalavra.innerText = displayPalavra;
    } else {
        respErros.innerText += letra;

        const chances = Number(respChances.innerText) - 1;
        respChances.innerText = chances;

        trocarStatus(chances);
    }

    verificarFim();

    form.inLetra.value = "";
    form.inLetra.focus();
});