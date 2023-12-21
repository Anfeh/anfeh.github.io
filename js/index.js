var palabra = " programador";
var velocidadEscritura = 250;
var elementoTexto = document.getElementById("texto");

function escribirTexto(index) {
  elementoTexto.textContent = palabra.slice(0, index);
  if (index < palabra.length) {
    setTimeout(function() {
      escribirTexto(index + 1);
    }, velocidadEscritura);
  } else {
    setTimeout(function() {
      escribirTexto(0);
    }, velocidadEscritura);
  }
}
escribirTexto(0);