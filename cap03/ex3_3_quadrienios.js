const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário (R$): "));
const anos = Number(prompt("Tempo (anos): "));

const quadrienios = Math.floor(anos / 4);
const acrescimo = quadrienios * salario * 0.01;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário total R$ ${(salario + acrescimo).toFixed(2)}`);