document.addEventListener('DOMContentLoaded', function () {
  let contador = 0;
  const contadorElemento = document.getElementById('contador');
  const botaoClique = document.getElementById('botaoClique');
  const botaoReiniciar = document.getElementById('botaoReiniciar');

  botaoClique.addEventListener('click', () => {
    contador++;
    contadorElemento.textContent = contador;
  });

  botaoReiniciar.addEventListener('click', () => {
    contador = 0;
    contadorElemento.textContent = contador;
  });
});
