const prompt = require("prompt-sync")();
const pessoas = Number(prompt("N° pessoas: "));
const peixes = Number(prompt("N° peixes: "));
let pagar;
if (peixes <= pessoas) {
	pagar = pessoas * 20;
} else {
	pagar = pessoas * 20 + (peixes - pessoas) * 12;
}
console.log(`Pagar R$ ${pagar.toFixed(2)}`);