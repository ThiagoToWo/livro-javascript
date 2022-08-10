const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da Compra (R$): "));

const aux = Math.floor(valor / 20);
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcelas = valor / parcelas;
console.log(`Pode pagar em ${parcelas} de R$ ${valorParcelas.toFixed(2)}`);