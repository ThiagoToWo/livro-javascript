const prompt = require("prompt-sync")();

const vinhos = [
    {marca: "Garibaldi", tipo: "Tinto Suave", preco: 15.90},
    {marca: "Country Wine", tipo: "Branco Suave", preco: 16.90},
    {marca: "Jota Pe", tipo: "Tinto Seco", preco: 20.90},
    {marca: "Sangue de Boi", tipo: "Tinto Suave", preco: 14.90},
    {marca: "Chalise", tipo: "Branco Seco", preco: 19.90},
];

function titulo(texto) {
    console.log();
    console.log(texto);
    console.log("=".repeat(40));
}

function incluir() {
    titulo("===< Inclusão de Vinhos >===");

    const marca = prompt("Marca.....: ");
    const tipo = prompt("Tipo......: ");
    const preco = Number(prompt("Preço (R$): "));

    vinhos.push({marca, tipo, preco});
    console.log("Ok! Vinho cadastrado com sucesso");
}

function listar() {
    titulo("==< Lista de Vinhos Cadastrados >===");
    console.log("Marca............... Tipo................ Preço (R$):");

    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` + 
            `${vinho.preco.toFixed(2).padStart(11)}`);
    }
}

function pesquisar() {
    titulo("===< Pesquisar por Tipo de Vinho >===");

    const pesquisa = prompt("Tipo: ");

    let cont = 0;

    console.log("Marca............... Tipo................ Preço (R$):");

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesquisa.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` + 
                `${vinho.preco.toFixed(2).padStart(11)}`);

            cont++;
        }       
    }

    if (cont == 0) {
        console.log(`Obs.: não há vinhos cadastrados do tipo ${pesquisa}`);
    }
}

function calcularMedia() {
    titulo("===< Média e Destaques do Cadastro de Vinhos >===");

    const n = vinhos.length;

    if (n == 0) {
        console.log("Obs.: não há nenhum vinho cadastrado");
        return;
    }

    let total = 0;

    for (const vinho of vinhos) {
        total += vinho.preco;
    }

    const media = total / n;

    const vinhos2 = [...vinhos];

    vinhos2.sort((a, b) => a.preco - b.preco);

    const menor = vinhos2[0];
    const maior = vinhos2[n - 1];

    console.log(`Preço médio dos vinhos: R$ ${media.toFixed(2)}`);
    console.log(`Menor valor: R$ ${menor.preco.toFixed(2)} - ${menor.marca}`);
    console.log(`Maior valor: R$ ${maior.preco.toFixed(2)} - ${maior.marca}`);
}

do {
    titulo("==< Cadastro de Vinhos >==");
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por Tipos");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar");

    const opcao = Number(prompt("Opção: "));

    if (opcao == 1) {
        incluir();
    } else if (opcao == 2) {
        listar();
    } else if (opcao == 3) {
        pesquisar();
    } else if (opcao == 4) {
        calcularMedia();
    } else if (opcao == 5) {
        break;
    } else {
        console.log("Opção inválida");
    }
} while(true);

