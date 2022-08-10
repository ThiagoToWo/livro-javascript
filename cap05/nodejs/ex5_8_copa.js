const prompt = require("prompt-sync")();
console.log("Programa Anos da Copa do Mundo (digite 0 para sair)");

do {
    const ano = Number(prompt("Ano: "));
    if (ano == 0) break;
    
    if (ano == 1942 || ano == 1946) {
        console.log(`Não houve copa em ${ano} (Segunda Guerra Mundial)`);
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é ano de Copa do Mundo`);
    } else {
    console.log(`Não... ${ano} não é ano de Copa do Mundo`);
    }
} while (true);