function verificarParOuImpar() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Por favor, insira dois números válidos.";
        document.getElementById("resultado").classList.remove("par", "impar");
        return;
    }

    const soma = num1 + num2;
    let resultado = (soma % 2 === 0) ? "A soma é Par!" : "A soma é Ímpar!";
    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = resultado;

    // Altera a classe para o estilo adequado (par ou impar)
    if (soma % 2 === 0) {
        resultadoDiv.classList.add("par");
        resultadoDiv.classList.remove("impar");
    } else {
        resultadoDiv.classList.add("impar");
        resultadoDiv.classList.remove("par");
    }
}
