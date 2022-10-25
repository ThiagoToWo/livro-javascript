const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const palavra = form.inPalavra.value.trim();
    const dica = form.inDica.value;

    if (palavra.includes(" ")) {
        alert("Informe uma palavra válida (sem espaços)");
        form.inPalavra.focus();
        return;
    }

    if (localStorage.getItem("forcaPalavras")) {
        localStorage.setItem("forcaPalavras", localStorage.getItem("forcaPalavras") + ";" + palavra);
        localStorage.setItem("forcaDicas", localStorage.getItem("forcaDicas") + ";" + dica);
    } else {
        localStorage.setItem("forcaPalavras", palavra);
        localStorage.setItem("forcaDicas", dica);
    }

    if (localStorage.getItem("forcaPalavras")) {
        alert(`Palavra ${palavra} salva com sucesso`);
    }

    form.reset();
    form.inPalavra.focus();
});