const prompt = require("prompt-sync")();
const parcelas = Number(prompt("Quantas parcelas? "));

const data = new Date();

for (let i = 0; i < parcelas; i++) {
    data.setMonth(data.getMonth() + 1);
    const dia = data.getDate().toString().padStart(2, 0);
    const mes = (data.getMonth() + 1).toString().padStart(2, 0);
    const ano = data.getFullYear();
    console.log(`${i}ª parcela: ${dia}/${mes}/${ano}`);
}