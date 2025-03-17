// Função para verificar se o número é par ou ímpar
function verificarParOuImpar() {
    // Pegando o valor digitado pelo usuário
    let numero = parseInt(document.getElementById("numero").value);
    
    // Verificando se o número é par ou ímpar
    if (isNaN(numero)) {
        document.getElementById("resultado").innerText = "Por favor, digite um número válido.";
    } else if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = `O número ${numero} é Par.`;
    } else {
        document.getElementById("resultado").innerText = `O número ${numero} é Ímpar.`;
    }
}
