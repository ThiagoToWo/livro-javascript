const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
    const nome = form.inNome.value;
    const nota1 = Number(form.inNota1.value);
    const nota2 = Number(form.inNota2.value);

    const media = (nota1 + nota2) / 2;

    resp1.innerText = `Média das Notas: ${media.toFixed(1)}`;

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
        resp2.style.color = "green";
    } else if (media >= 4) {
        resp2.innerText = `Atenção ${nome}! Você está em exame final`;
        resp2.style.color = "orange";
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`;
        resp2.style.color = "red";
    }

    e.preventDefault();
})