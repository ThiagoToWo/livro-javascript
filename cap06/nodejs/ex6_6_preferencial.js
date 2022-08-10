const prompt = require("prompt-sync")();
console.log("Informe os clientes em ordem de chegada ou digite 'fim' no nome para sair");
const clientes = [];

do {
    const nome = prompt("Nome: ");

    if (nome == "fim") {
        break;
    }

    const idade = Number(prompt("Nota: "));

    clientes.push({ nome, idade });

    console.log("Cliente inserido na fila");
} while (true);

console.log("\nFila Preferencial");
console.log("-".repeat(40));

const filaPref = clientes.filter(c => c.idade >= 60);

filaPref.forEach((pref, i) => {
    console.log(`${i + 1}. ${pref.nome}`);
});

console.log("\nFila Normal");
console.log("-".repeat(40));

const filaNorm = clientes.filter(c => c.idade < 60);

filaNorm.forEach((norm, i) => {
    console.log(`${i + 1}. ${norm.nome}`);
});