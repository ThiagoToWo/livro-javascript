const form = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = form.inModelo.value;
    const preco = Number(form.inPreco.value);

    carros.push({modelo, preco});

    form.inModelo.value = "";
    form.inPreco.value = "";
    form.inModelo.focus();
    form.btListar.dispatchEvent(new Event("click"));
});

form.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("A lista de carros está vazia");
        return;
    }

    const lista = carros.reduce((acumulador, carro) => `${acumulador}${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`, "");
    resp.innerText = `Lista de Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
});

form.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    if (maximo == 0 || isNaN(maximo)) {
        return;
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo);
    
    if (carrosFilter.length == 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado");
        return;
    }

    const lista = carrosFilter.reduce((acumulador, carro) => `${acumulador}${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`, "");

    resp.innerText = `Carros até ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

form.btSimular.addEventListener("click", () => {
    const taxa = Number(prompt("Qual o percentual de desconto?"));

    if (taxa == 0 || isNaN(taxa)) {
        return;
    }

    const carrosDesc = carros.map(carro => ({
        modelo: carro.modelo, 
        preco: carro.preco * (1 - taxa / 100)
    }))

    const lista = carrosDesc.reduce((acumulador, carro) => `${acumulador}${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`, "");

    resp.innerText = `Carros com desconto: ${taxa}%\n${"-".repeat(40)}\n${lista}`;
});