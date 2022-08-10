const prompt = require("prompt-sync")();

const produto = prompt("Produto: ");
const num = Number(prompt("N° de etiquetas: "));

for (let i = 0; i < num/2; i++) {
    console.log(`${produto.padEnd(30)}${produto.padEnd(30)}\n`);
}

if (num % 2 == 1) {
    console.log(`${produto}`);
}