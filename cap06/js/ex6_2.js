const form = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];
const sorteado = 1 + Math.floor(Math.random() * 100);
const CHANCES = 6;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);

    if (numero == sorteado) {
        respDica.innerText = `Parabéns!!! O número sorteado é ${sorteado}`;
        form.btSubmit.disabled = true;
        form.btNovo.className = "exibe";
    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro...`);
        } else {
            erros.push(numero);
           
            const numErros = erros.length;
            const numChances = CHANCES - numErros;

            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;

            if (numChances == 0) {
                alert("Suas chances acabaram");
                form.btSubmit.disabled = true;
                form.btNovo.className = "exibe";
                
                respDica.innerText = `Game Over!! O número sorteado era ${numero}`;
            } else {
                const dica = sorteado > numero ? "maior" : "menor";

                respDica.innerText = `Dica: tente um número ${dica} que ${numero}`
            }            
        }
    }

    form.inNumero.value = "";
    form.inNumero.focus();
});

form.btNovo.addEventListener("click", () => {
    location.reload();
});