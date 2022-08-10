const prompt = require("prompt-sync")();
console.log("Informe os alunos. Após, digite 'fim' no nome para sair");
const alunos = [];

do {
    const nome = prompt("Nome: ");

    if (nome == "fim") {
        break;
    }

    const nota = Number(prompt("Nota: "));

    alunos.push({ nome, nota });

    console.log("Aluno cadastrado");
} while (true);

console.log("-".repeat(40));

const maior = alunos.reduce((acumulador, aluno) => Math.max(acumulador, aluno.nota), 0);

console.log(`Maior nota: ${maior}`);

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior);

    for (const destaque of destaques) {
        console.log(`- ${destaque.nome}`);
    }
} else {
    console.log("Não há alunos em destaque na turma");
}