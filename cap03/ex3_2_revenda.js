const input = require("prompt-sync")();

const veiculo = input("Veículo: ");
const preco = input("Preço (R$): ");

const entrada = preco / 2;
const parcela = preco / 24;

console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$ ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);