const fs = require("fs");

fs.readFile("faturamento.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
    return;
  }

  const faturamentoDiario = JSON.parse(data);

  function calcularFaturamento(faturamento) {

    const valoresValidos = faturamento
      .filter(dia => dia.valor > 0)
      .map(dia => dia.valor);

    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);

    const mediaMensal =
      valoresValidos.reduce((acc, valor) => acc + valor, 0) / valoresValidos.length;

    const diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal)
      .length;

    return {
      menorValor,
      maiorValor,
      mediaMensal,
      diasAcimaDaMedia,
    };
  }

  const resultado = calcularFaturamento(faturamentoDiario);

  console.log("Menor valor de faturamento:", resultado.menorValor.toFixed(2));
  console.log("Maior valor de faturamento:", resultado.maiorValor.toFixed(2));
  console.log("Média mensal de faturamento:", resultado.mediaMensal.toFixed(2));
  console.log("Dias acima da média mensal:", resultado.diasAcimaDaMedia);
});