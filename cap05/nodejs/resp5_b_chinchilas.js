const prompt = require("prompt-sync")();

let num = Number(prompt("N° de Chinchilas: "));
const anos = Number(prompt("N° de Anos: "));

console.log(`${1}° ano: ${num} chinchilas`);

for (let i = 2; i <= anos; i++) {
    num *= 3;
    console.log(`${i}° ano: ${num} chinchilas`);
}