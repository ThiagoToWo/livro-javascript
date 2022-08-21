const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inNome.value;

    if (!validarNome(nome)) {
        form.inNome.focus();
        return;
    }

    const sobrenome = obterSobrenome(nome);
    const numVogais = contarVogais(nome);

    resp.innerText = `Senha Inicial: ${sobrenome}${numVogais}`;

    form.reset();
    form.inNome.focus();
});

const validarNome = (nome) => {
    let erros = "";
    if (!nome.includes(" ")) {
        erros += "Insira o nome completo com sobrenome\n";
    } else if (nome.includes("  ")) {
        erros += "O nome possui muitos espaços desnecessários\n";
    }

    if (erros.length != 0) {
        alert(erros);
        return false;
    } else {
        return true;
    }
}

const obterSobrenome = (nome) => {
    const ultimoEspaco = nome.lastIndexOf(" ");
    return nome.substr(ultimoEspaco).toLowerCase();
}

const contarVogais = (nome) => {
    const vogais = nome.replace(/[^AEIOUaeiou]/g, "");
    console.log(vogais)
    return vogais.length.toString().padStart(2, "0");
}