const form = document.querySelector("form");
const tbFilmes = document.querySelector("table");

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1);

    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";
}

const gravarFilme = (titulo, genero) => {
    if (localStorage.getItem("filmesTitulos")) {
        filmesTitulos = localStorage.getItem("filmesTitulos") + ";" + titulo;
        filmesGeneros = localStorage.getItem("filmesGeneros") + ";" + genero;

        localStorage.setItem("filmesTitulos", filmesTitulos);
        localStorage.setItem("filmesGeneros", filmesGeneros);
    } else {
        localStorage.setItem("filmesTitulos", titulo);
        localStorage.setItem("filmesGeneros", genero);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = form.inTitulo.value;
    const genero = form.inGenero.value;

    inserirLinha(titulo, genero);
    gravarFilme(titulo, genero);

    form.reset();
    form.inTitulo.focus();
});

window.addEventListener("load", () => {
    if (localStorage.getItem("filmesTitulos")) {
        const titulos = localStorage.getItem("filmesTitulos").split(";");
        const generos = localStorage.getItem("filmesGeneros").split(";");

        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i]);
        }
    }
});

tbFilmes.addEventListener("click", (e) => {
    if (e.target.className == "exclui") {
        const titulo = e.target.parentElement.parentElement.children[0].innerText;
        if (confirm(`conforma exclusão do filme "${titulo}"?`)) {
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("filmesTitulos");
            localStorage.removeItem("filmesGeneros");

            for (let i = 1; i < tbFilmes.rows.length; i++) {
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                const auxGenero = tbFilmes.rows[i].cells[1].innerText;

                gravarFilme(auxTitulo, auxGenero);
            }
        }
    }
});