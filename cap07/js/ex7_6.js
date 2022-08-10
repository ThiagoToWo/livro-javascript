const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const senha = form.inSenha.value;
    const erros = [];

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");
    }

    if (!senha.match(/[0-9]/g)) {
        erros.push("possuir algum número");
    }

    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir alguma letra minúscula");
    }

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("possuir ao menos 2 letras maiúsculas");
    }

    if (!senha.match(/\W|_/g)) {
        erros.push("possuir algum símbolo");
    }

    if (erros.length == 0) {
        resp.innerText = "Ok! Senha válida!";
    } else {
        resp.innerText = `Erro! A senha deve ${erros.join(", ")}.`;
    }
});