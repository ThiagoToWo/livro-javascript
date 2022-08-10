const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor (R$): "));
const numParcelas = Number(prompt("N° de Parcelas: "));

const parcelas = Math.floor(valor / numParcelas);
const ultima = parcelas + valor % numParcelas;

for (let i = 1; i < numParcelas; i++) {
    console.log(`${i}a parcela: R$ ${parcelas}`);
}

console.log(`${numParcelas}a parcela: R$ ${ultima}`);