const prompt = require("prompt-sync")();
const pesoKg = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo Diário (g): "));

const pesoG = pesoKg * 1000;
const duracao = Math.floor(pesoG / consumo);
const sobra = pesoG % consumo;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra (g): ${sobra} g`);