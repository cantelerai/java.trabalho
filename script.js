let contador = 0;
const contadorElemento = document.getElementById('contador');
const botao = document.getElementById('botaoClique');

botao.addEventListener('click', () => {
  contador++;
  contadorElemento.textContent = contador;
});
