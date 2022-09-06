const form = document.querySelector("form");
const resp = document.querySelector("pre");

let produtos = [];

const imprimirLista = () => {
    let lista = "Produtos Adicionados\n";
    lista += "--------------------\n"

    for (const produto of produtos) {
        lista += produto + "\n";
    }

    resp.innerText = lista;
}

const adicionarProduto = (e) => {
    e.preventDefault();

    const produto = form.inProduto.value;

    produtos.push(produto);
    produtos.sort();

    imprimirLista();
    salvarLista();

    form.reset();
    form.inProduto.focus();
}

const carregarLista = () => {
    if (localStorage.getItem("listaDeCompras")) {
        produtos = localStorage.getItem("listaDeCompras").split(";");
        imprimirLista();
    }    
}

const salvarLista = () => {
    localStorage.setItem("listaDeCompras", produtos.join(";"));
}

const limparLista = () => {
    localStorage.removeItem("listaDeCompras");
    resp.innerText = "";
}

form.addEventListener("submit", adicionarProduto);
form.btLimpar.addEventListener("click", limparLista);
window.addEventListener("load", carregarLista);
