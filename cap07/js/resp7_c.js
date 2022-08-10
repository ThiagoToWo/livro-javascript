const form = document.querySelector("form");
const resp1 = document.querySelector("#out1");
const resp2 = document.querySelector("#out2");

const prazoMilissegundos = 90 * 24 * 60 * 60 * 1000;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = form.inData.value;
    const valor = Number(form.inValor.value);

    const partes = data.split("-"); 
    const vencto = new Date();
    vencto.setDate(partes[2]);
    vencto.setMonth(partes[1] - 1);
    vencto.setFullYear(partes[0]);
    vencto.setDate(vencto.getDate() + 90);
           
    let valorComDesconto = valor * 0.8;
    const diaVencto = vencto.getDate().toString().padStart(2, "0");
    const mesVencto = (vencto.getMonth() + 1).toString().padStart(2, "0");
    const anoVencto = vencto.getFullYear();

    resp1.innerText = `Data limite para om pagamento com desconto: ${diaVencto}/${mesVencto}/${anoVencto}`;
    resp2.innerText = `Valor do desconto: R$ ${valorComDesconto.toFixed(2)}`;
});