function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmBc = valorEmDolarNumerico * 0.000024;
  console.log(valorEmBc);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O valor inserido equivale a " +
    valorEmBc +
    " em BitCoins e " +
    valorEmDolarNumerico / 5 +
    "em Real.";
  elementoValorConvertido.innerHTML = valorConvertido;
}