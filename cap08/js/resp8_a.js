const form =  document.querySelector("form");
const resp =  document.querySelector("pre");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inNome.value;
    const idade = Number(form.inIdade.value);

    const tracos = retornarTracos(nome);
    const categoria = categorizarAluno(idade);

    resp.innerText = `${nome}\n${tracos}\nCategoria: ${categoria}`;

    form.reset();
    form.inNome.focus();
});

const retornarTracos = (texto) => {
    const tracos = texto.replace(/[^ ]/g, "-");
    return tracos;
}

const categorizarAluno = (numero) => {
    let categoria = "Infantil";

    if (numero > 18) {
        categoria = "Adulto";
    } else if (numero >= 13) {
        categoria = "Juvenil";
    }

    return categoria;
}