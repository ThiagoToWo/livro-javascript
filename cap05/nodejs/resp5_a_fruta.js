const prompt = require("prompt-sync")();

const fruta = prompt("Fruta: ");
const num = Number(prompt("Número: "));

let resposta = "";
for (let i = 1; i < num; i++) {
    resposta = `${resposta}${fruta}*`;
}

resposta = `${resposta}${fruta}`;

console.log(resposta);