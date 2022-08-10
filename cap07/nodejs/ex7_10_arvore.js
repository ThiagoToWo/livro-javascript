const prompt = require("prompt-sync")();
const altura = Number(prompt("Altura: da árvore: "));
console.log();
for (let i = 0; i < altura; i++) { // cria copa
    const espacos = 30 + (altura - i);
    console.log(" ".repeat(espacos) + "*".repeat(i * 2));
}

for (let i = 0; i < altura / 4; i++) { // cria tronco
    const espacos = 30 + altura - 1;
    console.log(" ".repeat(espacos) + "*".repeat(2));
}