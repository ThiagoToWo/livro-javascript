const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    resp1.innerText = "";
    resp2.innerText = "";

    const a = Number(form.inA.value);
    const b = Number(form.inB.value);
    const c = Number(form.inC.value);

    if ((a < b + c) && (b < a + c) && (c < a + b)) { // forma triângulo
        resp1.innerText = `Lados podem formar um triângulo`;

        if (a == b && a == c) { // três lados iguais
            resp2.innerText = `Tipo: Equilátero`;
        } else if (a != b && a != c && b != c) { // nenhum lado igual
            if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)) { // vale Pitágoras
                resp2.innerText = `Tipo: Escaleno (Retângulo)`;
            } else { // não vale Pitágoras
                resp2.innerText = `Tipo: Escaleno`;
            }           
        } else { // ao menos dois iguais
            resp2.innerText = `Tipo: Isósceles`;
        }
    } else { // não forma triângulo
        resp1.innerText = `Lados não podem formar um triângulo`;
    }
});