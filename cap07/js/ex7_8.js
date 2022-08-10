const form = document.querySelector("form");

const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataVenc = form.inData.value;
    const valor = Number(form.inValor.value);
    
    const hoje = new Date();
    const vencto = new Date();
    const partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1] - 1));
    vencto.setFullYear(Number(partes[0]));

    const atraso = hoje - vencto;
    let multa = 0;
    let juros = 0;

    if (atraso > 0) {
        const dias = atraso / 86400000;
        multa = valor * TAXA_MULTA;
        juros = valor * TAXA_JUROS * dias;
    }

    const total = valor + multa + juros;

    form.outMulta.value = multa.toFixed(2);
    form.outJuros.value = juros.toFixed(2);
    form.outTotal.value = total.toFixed(2);
});